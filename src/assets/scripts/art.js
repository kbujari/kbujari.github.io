window.addEventListener("load", canvasApp);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

function canvasApp() {
  const TWO_PI = 2 * Math.PI;

  let numCircles;
  let maxMaxRad;
  let minMaxRad;
  let minRadFactor;
  let circles;
  let iterations;
  let timer;
  let drawsPerFrame;
  let drawCount;
  let lineWidth;

  init();

  function init() {
    /*
    In other experiments, you may wish to use more fractal curves ("circles")
    and allow the radius of them to vary. If so, modify the next three variables.
    */
    numCircles = 1;
    maxMaxRad = 200;
    minMaxRad = 200;

    /*
    We draw closed curves with varying radius. The factor below should be set between 0 and 1,
    representing the size of the smallest radius with respect to the largest possible.
    */
    minRadFactor = 0;

    /*
    The number of subdividing steps to take when creating a single fractal curve.
    Can use more, but anything over 10 (thus 1024 points) is overkill for a moderately sized canvas.
    */
    iterations = 8;

    //number of curves to draw on every tick of the timer
    drawsPerFrame = 4;

    lineWidth = 1;

    startGenerate();
  }

  function startGenerate() {
    drawCount = 0;
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.clearRect(0, 0, width, height);

    setCircles();

    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(onTimer, 1000 / 50);
  }

  function setCircles() {
    var i;
    var r, g, b, a;
    var maxR, minR;
    var grad;

    circles = [];

    for (i = 0; i < numCircles; i++) {
      maxR = minMaxRad + Math.random() * (maxMaxRad - minMaxRad);
      minR = minRadFactor * maxR;

      //define gradient
      grad = ctx.createRadialGradient(0, 0, minR, 0, 0, maxR);
      grad.addColorStop(1, "rgba(0,170,200,0.2)");
      grad.addColorStop(0, "rgba(0,20,170,0.2)");

      let newCircle = {
        centerX: -maxR,
        centerY: height / 2 - 50,
        maxRad: maxR,
        minRad: minR,
        color: grad, //can set a gradient or solid color here.
        //fillColor: "rgba(0,0,0,1)",
        param: 0,
        changeSpeed: 1 / 250,
        phase: Math.random() * TWO_PI, //the phase to use for a single fractal curve.
        globalPhase: Math.random() * TWO_PI, //the curve as a whole will rise and fall by a sinusoid.
      };

      circles.push(newCircle);
      newCircle.pointList1 = setLinePoints(iterations);
      newCircle.pointList2 = setLinePoints(iterations);
    }
  }

  function onTimer() {
    var i, j;
    var c;
    var rad;
    var point1, point2;
    var x0, y0;
    var cosParam;

    var xSqueeze = 0.75; //cheap 3D effect by shortening in x direction.

    var yOffset;

    //draw circles
    for (j = 0; j < drawsPerFrame; j++) {
      drawCount++;

      for (i = 0; i < numCircles; i++) {
        c = circles[i];
        c.param += c.changeSpeed;
        if (c.param >= 1) {
          c.param = 0;

          c.pointList1 = c.pointList2;
          c.pointList2 = setLinePoints(iterations);
        }
        cosParam = 0.5 - 0.5 * Math.cos(Math.PI * c.param);

        ctx.strokeStyle = c.color;
        ctx.lineWidth = lineWidth;
        //ctx.fillStyle = c.fillColor;
        ctx.beginPath();
        point1 = c.pointList1.first;
        point2 = c.pointList2.first;

        //slowly rotate
        c.phase += 0.0002;

        theta = c.phase;
        rad =
          c.minRad +
          (point1.y + cosParam * (point2.y - point1.y)) * (c.maxRad - c.minRad);

        //move center
        c.centerX += 0.5;
        c.centerY += 0.04;
        yOffset = 40 * Math.sin(c.globalPhase + (drawCount / 1000) * TWO_PI);
        //stop when off screen
        if (c.centerX > width + maxMaxRad) {
          clearInterval(timer);
          timer = null;
        }

        //we are drawing in new position by applying a transform. We are doing this so the gradient will move with the drawing.
        ctx.setTransform(xSqueeze, 0, 0, 1, c.centerX, c.centerY + yOffset);

        //Drawing the curve involves stepping through a linked list of points defined by a fractal subdivision process.
        //It is like drawing a circle, except with varying radius.
        x0 = xSqueeze * rad * Math.cos(theta);
        y0 = rad * Math.sin(theta);
        ctx.lineTo(x0, y0);
        while (point1.next != null) {
          point1 = point1.next;
          point2 = point2.next;
          theta =
            TWO_PI * (point1.x + cosParam * (point2.x - point1.x)) + c.phase;
          rad =
            c.minRad +
            (point1.y + cosParam * (point2.y - point1.y)) *
              (c.maxRad - c.minRad);
          x0 = xSqueeze * rad * Math.cos(theta);
          y0 = rad * Math.sin(theta);
          ctx.lineTo(x0, y0);
        }
        ctx.closePath();
        ctx.stroke();
        //ctx.fill();
      }
    }
  }

  //Here is the function that defines a noisy (but not wildly varying) data set which we will use to draw the curves.
  function setLinePoints(iterations) {
    var pointList = {};
    pointList.first = {
      x: 0,
      y: 1,
    };
    var lastPoint = {
      x: 1,
      y: 1,
    };
    var minY = 1;
    var maxY = 1;
    var point;
    var nextPoint;
    var dx, newX, newY;

    pointList.first.next = lastPoint;
    for (var i = 0; i < iterations; i++) {
      point = pointList.first;
      while (point.next != null) {
        nextPoint = point.next;

        dx = nextPoint.x - point.x;
        newX = 0.5 * (point.x + nextPoint.x);
        newY = 0.5 * (point.y + nextPoint.y);
        newY += dx * (Math.random() * 2 - 1);

        var newPoint = {
          x: newX,
          y: newY,
        };

        //min, max
        if (newY < minY) {
          minY = newY;
        } else if (newY > maxY) {
          maxY = newY;
        }

        //put between points
        newPoint.next = nextPoint;
        point.next = newPoint;

        point = nextPoint;
      }
    }

    //normalize to values between 0 and 1
    if (maxY != minY) {
      var normalizeRate = 1 / (maxY - minY);
      point = pointList.first;
      while (point != null) {
        point.y = normalizeRate * (point.y - minY);
        point = point.next;
      }
    }
    //unlikely that max = min, but could happen if using zero iterations. In this case, set all points equal to 1.
    else {
      point = pointList.first;
      while (point != null) {
        point.y = 1;
        point = point.next;
      }
    }

    return pointList;
  }
}
