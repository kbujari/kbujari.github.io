FROM alpine:3.19 AS builder

RUN apk add -U nodejs npm git

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM lipanski/docker-static-website:2.2.1
COPY --from=builder /app/dist .
