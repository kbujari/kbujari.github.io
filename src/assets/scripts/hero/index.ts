const _canvas = document.getElementById("canvas") as HTMLCanvasElement;
const _ctx = _canvas.getContext("2d")!;

const can = {
  height: window.innerHeight,
  width: window.innerWidth,
};

const start = (ctx: CanvasRenderingContext2D) => {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, can.width, can.height);
};
