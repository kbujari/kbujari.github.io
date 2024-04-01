FROM alpine:3.19 AS builder

RUN apk add -U nodejs npm git

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM busybox:1.36

RUN adduser -D static
USER static

WORKDIR /home/static
COPY --from=builder /app/dist .

CMD ["busybox", "httpd", "-fvp", "80"]
