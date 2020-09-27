<template>
  <div class="canvas-container">
    <canvas id="canvas">trees</canvas>
    <!-- <div>
      Steps:
      <span id="speed"></span>
    </div>
    <div id="period"></div>-->
  </div>
</template>

<script>
export default {
  name: "TreeCanvas",
  props: {
    gap: Number,
    width: Number,
    height: Number
    // gap: 15,
    // width: 18,
    // height: 10
  },
  data() {
    return {
      // gap: 0
      count_up: 32, // these numbers may break if odd, watch out
      count_across: 64,
      //we're doubling it horizontally
      xgap: 2 * this.gap, // these numbers get overwritten, oops
      ygap: 15,
      growSpeed: 0.02, // percent of tree per frame
      treeHeight: 50 // maximim height in pixels
    };
  },

  // methods: {
  // makeForest() {
  //   for (let i = -this.count * 2; i < this.count * 2; i++) {
  //     let row = [];
  //     for (let j = -this.count; j < this.count; j++) {
  //       // ///
  //       let ypos = this.ygap * i + 50;
  //       let xpos = this.xgap * j + 2 * i;
  //       if (i % 2 == 0) {
  //         xpos -= this.xgap / 2;
  //       }
  //       let height = Math.random() + 0.25;
  //       // plants.push({x: xpos, y: ypos, height: height, angle: 0})
  //       row.push(new Plant(xpos, ypos, height));
  //     }
  //     plants.push(row);
  //   }
  // },
  //   for (let i = -this.count * 2; i < this.count * 2; i++) {
  //     let row = [];
  //     for (let j = -this.count; j < this.count; j++) {
  //       // ///
  //       let ypos = this.ygap * i + 50;
  //       let xpos = this.xgap * j + 2 * i;
  //       if (i % 2 == 0) {
  //         xpos -= this.xgap / 2;
  //       }
  //       let height = Math.random() + 0.25;
  //       // plants.push({x: xpos, y: ypos, height: height, angle: 0})
  //       row.push(new Plant(xpos, ypos, height));
  //     }
  //     plants.push(row);
  // }
  // },
  mounted() {
    let self = this;

    /**************** speedo for testing ****************/
    let stepNum = 0;
    let running = false;
    let speedo = {
      start: 0,
      n: 0,
      total: 0, // in steps
      t0: 0,
      m: 0,
      totalMs: 0,
      fastest: 0,
      slowest: 0, // in ms
      mark0: function() {
        this.t0 = Date.now();
      },
      mark1: function() {
        let period = Date.now() - this.t0;
        if (period < this.fastest || !this.fastest) {
          this.fastest = period;
        } else if (period > this.slowest) {
          this.slowest = period;
        }
        this.totalMs += period;
        this.m++;
        stepNum++;
      },
      init: function() {
        this.n = this.total = this.m = this.totalMs = this.fastest = this.slowest = this.start = this.startMs = 0;
      },
      speed: document.getElementById("speed"),
      period: document.getElementById("period"),
      monitor: function() {
        let o = speedo;
        // console.log("o.start is", o.start);
        if (!running) {
          o.init();
          running = true;
          // o.start = 0;
        } else if (!o.start) {
          o.start = stepNum;
        } else {
          // console.log("stepNum is", stepNum);
          let steps = stepNum - o.start;
          o.start = stepNum;
          o.total += steps;
          o.n++;
          o.speed.textContent =
            steps + " /sec, average: " + (o.total / o.n).toFixed(2);
          o.period.textContent =
            "fastest: " +
            o.fastest +
            "ms, slowest: " +
            o.slowest +
            ", average: " +
            (o.totalMs / o.m).toFixed(1);
        }
      }
    };
    // setInterval(speedo.monitor, 1000);

    var plants = [];
    var totalCarbon = 150;
    var carbon = 150; // just a weird way of keeping track of total negative trees

    var active = true; // One initial grow at begining to cull overpopulated trees.

    // var oldcarbon = 0; // TODO for testing
    var growthGoal = 0; //Initial value doesn't matter, used to track growth spurts
    const spurtSize = 750; // size of growth spurt, measured in units of fully grown trees;
    const waitTime = 400; // milliseconds after damage to grow
    // var maxHeight = 20;
    // let canvas = this.canvas;
    var canvas = {
      elem: document.getElementById("canvas"),

      resize: function() {
        let max_width = 1200;
        this.width = this.elem.width = Math.min(
          this.elem.parentElement.offsetWidth,
          // max_width,
          max_width
        );
        this.height = this.elem.height = Math.min(
          this.width,
          this.elem.parentElement.offsetHeight
        );
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
      }
    };
    var ctx = canvas.elem.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    window.addEventListener("resize", () => {
      positionTrees();
    });
    function positionTrees() {
      canvas.resize();
      // let gap = canvas.width / (self.count * 2);
      self.xgap = (canvas.width / self.count_across) * 0.8;
      self.ygap = canvas.height / self.count_up / 2;
      for (var i = 0; i < plants.length; i++) {
        for (var j = 0; j < plants[i].length; j++) {
          // moved this here from before draw for performance
          // only move on resize screen
          let height = i - plants.length / 2;
          let ypos = self.ygap * height + 50;
          let xpos = self.xgap * (j - plants[i].length / 2) + height * 2;
          if (i % 2 == 0) {
            xpos -= self.xgap / 2;
          }
          plants[i][j].x = xpos;
          plants[i][j].y = ypos;
        }
      }
    }

    class Plant {
      // TODO no more x and y
      constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.angle = 0; // but performance!
      }
      color() {
        return (
          "rgb(" +
          (this.y / 3 + this.height * 200 + 10) +
          "," +
          (this.y / 4 + 256 - this.height * 128) +
          ", " +
          192 * Math.abs(this.angle) +
          ")"
        );
      } //Math.sqrt(Math.abs(this.angle))+")"};
      drawMe() {
        let xpos = this.x;
        let ypos = this.y;
        ctx.lineWidth = 2;
        let trunkHeight = self.treeHeight;
        // let baseHeight = 10;
        let sin = Math.sin(this.angle);
        let cos = Math.cos(this.angle);
        let basex = sin * this.height * trunkHeight + xpos;
        let basey = -cos * this.height * trunkHeight + ypos;
        ctx.strokeStyle = "#653";
        //ctx.strokeStyle = this.color;
        // drawLine(xpos, ypos, basex, basey);
        // var grd = ctx.createLinearGradient(
        //   xpos + canvas.centerX - this.height * 10,
        //   ypos,
        //   this.x + canvas.centerX + this.height * 20,
        //   ypos
        // );
        // grd.addColorStop(0, "#220");
        // grd.addColorStop(0.5, this.color());
        // grd.addColorStop(1, "#ff2");

        // ctx.fillStyle = grd;
        ctx.fillStyle = "#012";
        ctx.strokeStyle = this.color();
        drawLine(xpos, ypos, basex, basey);
        // ctx.fillRect(10, 10, 2000, 100);
        // drawLine(basex, basey, endx, endy);
        // drawFlower(basex, basey, this.height * 10, this.angle);
      }

      updateAngle() {
        let finnick = 0.01;
        if (this.angle > finnick) {
          this.angle *= 0.95;
        } else if (this.angle < -finnick) {
          this.angle *= 0.95;
        } else {
          this.angle = 0;
        }
      }

      growMe(y, x) {
        let friendHeight = getMeanFriendHeight(y, x);
        let meanFriendHeight = friendHeight * 8;
        if (this.height == 0) {
          if (
            (meanFriendHeight >= 0.4 && meanFriendHeight < 1) ||
            (carbon > totalCarbon - 1 && (x == 0 || x == self.count_across - 1))
          ) {
            this.height += self.growSpeed;
            carbon -= self.growSpeed;
          }
        } else if (
          meanFriendHeight + this.height >= 2.2 &&
          friendHeight >= this.height - 0.2
        ) {
          carbon += this.height;
          this.height = 0.0;
        } else if (meanFriendHeight + this.height < 1.5) {
          carbon -= self.growSpeed;
          this.height += self.growSpeed;
        }
      }
    }
    // Create all the trees here
    // + 1 because the top row would be invisible anyway
    for (let i = -this.count_up + 7; i < this.count_up; i++) {
      let row = [];
      for (let j = -this.count_across / 2; j < this.count_across / 2; j++) {
        // ///
        // let ypos = this.ygap * i + 50;
        // let xpos = this.xgap * j + 2 * i;
        // if (i % 2 == 0) {
        //   xpos -= this.xgap / 2;
        // }

        // let xpos = self.xgap * (j - plants[i].length / 2) + 2 * i;
        // let ypos = self.ygap * (i - this.count);
        // let xpos = self.xgap * (j - this.count) + 2 * i;
        // let ypos = self.ygap * i + 50;
        // let xpos = self.xgap * j + 2 * i;

        let height = Math.random() + 0.25;
        carbon -= height;
        // plants.push({x: xpos, y: ypos, height: height, angle: 0})
        row.push(new Plant(0, 0, height));
      }
      plants.push(row);
      positionTrees();
      //pl
    }
    //console.log("plants is", plants)//

    // var canvas = {
    //   elem: document.getElementById("canvas"),
    //
    //   resize: function() {
    //     this.width = this.elem.width = this.elem.offsetWidth;
    //     this.height = this.elem.height = this.elem.offsetHeight;
    //     this.centerX = this.width * 0.5;
    //     this.centerY = this.height * 0.5;
    //     //scale = Math.max(this.width, this.height) / 1440;
    //     draw();
    //   }
    // };
    positionTrees();

    // window.addEventListener("resize", canvas.resize.bind(canvas), false);

    function drawEverything(lines, shapes) {}

    // WARNING: don't call this for shapes, it's inefficient.
    function drawLine(start_x, start_y, end_x, end_y) {
      //   cleanLine(
      //     Math.round(start_x + canvas.centerX),
      //     Math.round(start_y + canvas.centerY),
      //     Math.round(end_x + canvas.centerX),
      //     Math.round(end_y + canvas.centerY)
      //   );
      ctx.beginPath();
      ctx.moveTo(start_x + canvas.centerX, start_y + canvas.centerY);
      ctx.lineTo(end_x + canvas.centerX, end_y + canvas.centerY);
      ctx.stroke();
    }

    function cleanLine(x0, y0, x1, y1) {
      var dx = Math.abs(x1 - x0);
      var dy = Math.abs(y1 - y0);
      var sx = x0 < x1 ? 1 : -1;
      var sy = y0 < y1 ? 1 : -1;
      var err = dx - dy;

      while (true) {
        // ctx.setPixel(x0, y0); // Do what you need to for this
        ctx.fillRect(x0, y0, 1, 1);

        if (x0 === x1 && y0 === y1) break;
        var e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          x0 += sx;
        }
        if (e2 < dx) {
          err += dx;
          y0 += sy;
        }
      }
    }
    function drawShape(xs, ys) {
      ctx.beginPath();
      ctx.moveTo(xs[0] + canvas.centerX, ys[0] + canvas.centerY);
      for (var i = 1; i < xs.length; i++) {
        ctx.lineTo(xs[i] + canvas.centerX, ys[i] + canvas.centerY);
      }
      ctx.lineTo(xs[0] + canvas.centerX, ys[0] + canvas.centerY);
      ctx.stroke();
    }
    function fillShape(xs, ys) {
      ctx.beginPath();
      ctx.moveTo(xs[0] + canvas.centerX, ys[0] + canvas.centerY);
      for (var i = 1; i < xs.length; i++) {
        ctx.lineTo(xs[i] + canvas.centerX, ys[i] + canvas.centerY);
      }
      ctx.lineTo(xs[0] + canvas.centerX, ys[0] + canvas.centerY);
      ctx.fill();
    }
    function drawFlower(x, y, size, angle) {
      // drawLine(x, y, x-size, y-size);
      // drawLine(x-size, y-size, x, y-size*2);
      // drawLine(x-size, y-size, x, y-size*2);
      let x1 = (Math.sin(angle - Math.PI / 2) * size) / 2 + x;
      let y1 = (-Math.cos(angle - Math.PI / 2) * size) / 2 + y;

      let topx = Math.sin(angle) * size * 5 + x;
      let topy = -Math.cos(angle) * size * 5 + y;

      let x2 = (Math.sin(angle + Math.PI / 2) * size) / 2 + x;
      let y2 = (-Math.cos(angle + Math.PI / 2) * size) / 2 + y;
      drawShape([x1, topx, x2], [y1, topy, y2]);
      // fillShape([x1, topx, x2], [y1, topy, y2]);
    }

    // function guessDistance(dx, dy) {
    //   return Math.abs(dx) + Math.abs(dy);
    // }
    function getDistance(dx, dy) {
      //return Math.abs(dx)+Math.abs(dy)
      return Math.sqrt(dx * dx + dy * dy);
      // return Math.abs(dx) + Math.abs(dy);
    }

    //handles drawing and growing
    function draw() {
      //console.log("drawing")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!pointer) {
        pointer = { x: -10000, y: -10000 };
      }

      // ctx.rect(xmin, ymin, xmax, ymax);
      // // ctx.rect(0, 0, 100, 100);
      // ctx.stroke();

      if (active) {
        var oldCarbon = carbon;
      }

      // draw mouse
      // drawFlower(pointer.x, pointer.y, 10, 30);
      for (var i = 0; i < plants.length; i++) {
        for (var j = 0; j < plants[i].length; j++) {
          if (active) {
            plants[i][j].growMe(i, j);
          }
          plants[i][j].drawMe();
          plants[i][j].updateAngle();
        }
      }
      // Grow only on mouse move
      // active = false;
      // if (Math.abs(oldcarbon - carbon) > 10) {
      //   console.log("carbon is", carbon);
      //   oldcarbon = carbon;
      // }
      // rather than stopping at zero, the goalpost is 50 more trees
      // than when growing started.
      // or auto stop when growth just doesn't happen
      // or NOT when you start breaking it
      // or NOT when a tree dies and breaks the carbon
      // but yes when the numbers happen to line exactly up yeah
      if (active && (carbon <= growthGoal || carbon == oldCarbon)) {
        active = false;
      }
    }

    function getMeanFriendHeight(y, x) {
      let row = plants[y];
      let rowDown, rowUp;
      let maxX = row.length - 1;
      let maxY = plants.length - 1;
      // let neighbors = [];
      let total = 0;
      let friendCount = 0;
      //let offset = y%2? 1 : -1

      let onTop = y == 0,
        onRight = x == maxX,
        onBottom = y == maxY,
        onLeft = x == 0;

      if (!onBottom) {
        rowDown = plants[y + 1];
        total += rowDown[x].height;
        friendCount++;
      }
      if (!onTop) {
        rowUp = plants[y - 1];
        total += rowUp[x].height;
        friendCount++;
      }

      if (y % 2) {
        if (!onTop & !onRight) {
          total += rowUp[x + 1].height;
          friendCount++;
        }
        if (!onBottom && !onRight) {
          total += rowDown[x + 1].height;
          friendCount++;
        }
      } else {
        if (!onTop && !onLeft) {
          total += rowUp[x - 1].height;
          friendCount++;
        }
        if (!onBottom && !onLeft) {
          total += rowDown[x - 1].height;
          friendCount++;
        }
      }

      if (!onLeft) {
        total += row[x - 1].height;
        friendCount++;
      }
      if (!onRight) {
        total += row[x + 1].height;
        friendCount++;
      }

      let friendHeight = total / friendCount;
      return friendHeight;
    }

    var pointer = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      moveDistance: 0,
      timer: null,

      move: function(e) {
        // speedo.mark0();
        e.preventDefault();
        var cursor = e.targetTouches ? e.targetTouches[0] : e;
        var rect = canvas.elem.getBoundingClientRect();
        let static_x = cursor.clientX - rect.left;
        this.x = static_x - canvas.centerX;
        let static_y = cursor.clientY - rect.top;
        this.y = static_y - canvas.centerY;
        // this.y = cursor.clientY - canvas.centerY - rect.top;
        // this.x = cursor.clientX - canvas.centerX;
        // this.y = cursor.clientY - canvas.centerY;
        var mouse_speed = getDistance(this.x - this.px, this.y - this.py * 2);
        // for (var i = 0; i < plants.length; i++) {
        //   for (var j = 0; j < plants[i].length; j++) {
        // reverse engineer position to avoid searching so many
        // var ymin = Math.max(0, (static_y - 50) / self.ygap - 10);
        var ymin = 0;
        var ymax = Math.min(plants.length, static_y / self.ygap);
        // console.log("y is", static_y, " ymax is", ymax, "gap is", self.ygap);
        var xmin = 0;
        var xmax = plants[0].length;

        // let ypos = self.ygap * height + 50;
        // let xpos = self.xgap * (j - plants[i].length / 2) + height * 2;
        for (var i = ymin; i < ymax; i++) {
          for (var j = xmin; j < xmax; j++) {
            let plant = plants[i][j];
            // Optimization, don't do the square root and other nasty stuff if it's far away
            // (euclidiean distance)
            let xdistance = this.x - plant.x;
            let ydistance = (this.y - plant.y) * 2;
            if (Math.abs(xdistance) + Math.abs(ydistance) < 200) {
              let distance = getDistance(xdistance, ydistance);
              let angle = Math.max(
                0,
                ((0.008 - distance / 20000) * mouse_speed * mouse_speed) / 50
              );
              if (angle > Math.PI / 4) {
                //plant.height = 0
                let new_height = Math.max(0, plant.height - angle);
                carbon += plant.height - new_height;
                plant.height = new_height;
              } else {
                if (pointer.x > plant.x) {
                  angle = -angle;
                }
                plant.angle += angle;
              }
            }
          }
        }

        this.px = this.x;
        this.py = this.y;
        if (carbon > -10000) {
          growthGoal = carbon - spurtSize;
          // start regrowing after 2 seconds of no activity
          window.clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            active = true;
          }, waitTime);
          // console.log("carbon is high");
          // active = true;
        }
        // active = true; // grow
        // speedo.mark1();
      }
    };

    window.addEventListener("mousemove", pointer.move.bind(pointer), false);
    canvas.elem.addEventListener(
      "touchmove",
      pointer.move.bind(pointer),
      false
    );
    // window.addEventListener("click", pointer.click);

    ~(function step() {
      //console.log("stepping")
      draw();
      requestAnimationFrame(step);
    })();
  }
};
</script>
<style scoped>
#canvas {
  /*   background-image: linear-gradient(#002, #324); */
  /* background: #223; */
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  /* width: 100%;
  height: 100%; */
  /* width: 512px; */
  /* height: 512px; */
  /* 	background: #000; */
  /* 	position: absolute; */
}
</style>
