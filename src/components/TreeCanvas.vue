<template>
  <div class="canvas-container">
    <canvas id="canvas"> trees </canvas>
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
      count: 8, // radius counts out 8 from center, in effect 16 by 16
      xgap: 2 * this.gap,
      ygap: 15
    };
  },

  methods: {
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
    onResize() {
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
    }
  },
  mounted() {
    let self = this;

    var plants = [];
    // var juice = 2000;
    // var maxHeight = 20;
    // let canvas = this.canvas;
    var canvas = {
      elem: document.getElementById("canvas"),

      resize: function() {
        let max_width = 768;
        this.width = this.elem.width = Math.min(
          this.elem.parentElement.offsetWidth,
          // max_width,
          max_width
        );
        this.height = this.elem.height = this.width;
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
        let gap = this.width / (self.count * 4);
        self.xgap = 2 * gap;
        self.ygap = gap;
      }
    };
    var ctx = canvas.elem.getContext("2d");

    window.addEventListener("resize", () => {
      canvas.resize();
    });

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
      drawMe(xpos, ypos) {
        ctx.lineWidth = 3;
        let trunkHeight = 15;
        let baseHeight = 10;
        let endx = Math.sin(this.angle) * this.height * trunkHeight + xpos;
        let endy = -Math.cos(this.angle) * this.height * trunkHeight + ypos;
        let basex = Math.sin(this.angle) * this.height * baseHeight + xpos;
        let basey = -Math.cos(this.angle) * this.height * baseHeight + ypos;
        ctx.strokeStyle = "#653";
        //ctx.strokeStyle = this.color;
        drawLine(xpos, ypos, endx, endy);
        var grd = ctx.createLinearGradient(
          xpos + canvas.centerX - this.height * 10,
          ypos,
          this.x + canvas.centerX + this.height * 20,
          ypos
        );
        grd.addColorStop(0, "#220");
        grd.addColorStop(0.5, this.color());
        grd.addColorStop(1, "#ff2");

        //ctx.fillStyle=grd;
        ctx.fillStyle = "#012";
        ctx.strokeStyle = this.color();
        //ctx.fillRect(10, 10, 2000, 100);
        drawFlower(basex, basey, this.height * 10, this.angle);
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
        let neighbors = getHexNeighbors(y, x);
        // let max_friends = neighbors.length;
        //console.log("neighbors is", neighbors)
        let friends = neighbors.map(address => plants[address[0]][address[1]]);
        //console.log("friends is", friends)
        //let sum = (c, neighbor) => c + neighbor.height;
        let totalFriendHeight = friends.reduce(
          (c, neighbor) => c + neighbor.height,
          0
        );
        let friendHeight = totalFriendHeight / friends.length;
        totalFriendHeight = friendHeight * 8;
        // let emptyCount = friends.reduce(
        //   (c, neighbor) => (neighbor.height == 0 ? c + 1 : c),
        //   0
        // );
        // let friendCount = friends.reduce((c, neighbor) =>
        //   {return neighbor.height < .4 ? c-1 : c}, 6
        // )
        //console.log("friendCount is", friendCount)
        if (this.height == 0) {
          if (totalFriendHeight >= 0.4 && totalFriendHeight < 1) {
            this.height += 0.01;
            //juice -= .01
          }
        } else if (
          totalFriendHeight + this.height >= 2.2 &&
          friendHeight >= this.height - 0.2
        ) {
          this.height = 0.0;
        } else if (totalFriendHeight + this.height < 1.5) {
          this.height += 0.01;
        }
      }
    }
    // + 1 because the top row would be invisible anyway
    for (let i = -this.count * 2 + 7; i < this.count * 2; i++) {
      let row = [];
      for (let j = -this.count; j < this.count; j++) {
        // ///
        let ypos = this.ygap * i + 50;
        let xpos = this.xgap * j + 2 * i;
        if (i % 2 == 0) {
          xpos -= this.xgap / 2;
        }
        let height = Math.random() + 0.25;
        // plants.push({x: xpos, y: ypos, height: height, angle: 0})
        row.push(new Plant(xpos, ypos, height));
      }
      plants.push(row);
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
    canvas.resize();

    window.addEventListener("resize", canvas.resize.bind(canvas), false);

    function drawLine(start_x, start_y, end_x, end_y) {
      ctx.beginPath();
      ctx.moveTo(start_x + canvas.centerX, start_y + canvas.centerY);
      ctx.lineTo(end_x + canvas.centerX, end_y + canvas.centerY);
      ctx.stroke();
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
      fillShape([x1, topx, x2], [y1, topy, y2]);
    }

    function getDistance(x1, y1, x2, y2) {
      var dx = x1 - x2;
      var dy = (y1 - y2) * 2;
      //return Math.abs(dx)+Math.abs(dy)
      return Math.sqrt(dx * dx + dy * dy);
    }

    var active = true; // One initial grow at begining to cull overpopulated trees.

    function draw() {
      //console.log("drawing")
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!pointer) {
        pointer = { x: -10000, y: -10000 };
      }
      // draw mouse
      // drawFlower(pointer.x, pointer.y, 10, 30);
      for (var i = 0; i < plants.length; i++) {
        for (var j = 0; j < plants[i].length; j++) {
          let ypos = self.ygap * (i - plants.length / 2);
          let xpos = self.xgap * (j - plants[i].length / 2) + 2 * i;
          // let ypos = self.ygap * i + 50;
          // let xpos = self.xgap * j + 2 * i;
          if (i % 2 == 0) {
            xpos -= self.xgap / 2;
          }
          plants[i][j].drawMe(xpos, ypos);
          plants[i][j].updateAngle();
          if (active) {
            plants[i][j].growMe(i, j);
          }
        }
      }
      // Grow only on mouse move
      active = false;
    }

    function getHexNeighbors(y, x) {
      let maxX = plants[0].length - 1;
      let maxY = plants.length - 1;
      let neighbors = [];
      //let offset = y%2? 1 : -1

      if (y % 2) {
        // if even/ not indented
        if ((y > 0) & (x < maxX)) {
          neighbors.push([y - 1, x + 1]);
        }
        if (y < maxY && x < maxX) {
          neighbors.push([y + 1, x + 1]);
        }
      } else {
        if (y > 0 && x > 0) {
          neighbors.push([y - 1, x - 1]);
        }
        if (y < maxY && x > 0) {
          neighbors.push([y + 1, x - 1]);
        }
      }

      if (y > 0) {
        neighbors.push([y - 1, x]);
      }
      if (y < maxY) {
        neighbors.push([y + 1, x]);
      }
      if (x > 0) {
        neighbors.push([y, x - 1]);
      }
      if (x < maxX) {
        neighbors.push([y, x + 1]);
      }
      return neighbors;
    }

    var pointer = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      moveDistance: 0,

      move: function(e) {
        e.preventDefault();
        var cursor = e.targetTouches ? e.targetTouches[0] : e;
        // console.log("canvas is", canvas.elem)
        var rect = canvas.elem.getBoundingClientRect();
        this.x = cursor.clientX - canvas.centerX - rect.left;
        this.y = cursor.clientY - canvas.centerY - rect.top;
        var mouse_speed = getDistance(this.x, this.y, this.px, this.py);
        for (var i = 0; i < plants.length; i++) {
          for (var j = 0; j < plants[i].length; j++) {
            let plant = plants[i][j];
            let distance = getDistance(pointer.x, pointer.y, plant.x, plant.y);
            let angle = Math.max(
              0,
              ((0.008 - distance / 20000) * mouse_speed * mouse_speed) / 50
            );
            if (angle > Math.PI / 4) {
              //plant.height = 0
              let new_height = Math.max(0, plant.height - angle);
              plant.height = new_height;
            } else {
              if (pointer.x > plant.x) {
                angle = -angle;
              }
              plant.angle += angle;
            }
          }
        }

        this.px = this.x;
        this.py = this.y;
        active = true; // grow
      }
    };

    window.addEventListener("mousemove", pointer.move.bind(pointer), false);
    canvas.elem.addEventListener(
      "touchmove",
      pointer.move.bind(pointer),
      false
    );
    window.addEventListener("click", pointer.click);

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
  left: 50%
  /* width: 100%;
  height: 100%; */
  /* width: 512px; */
  /* height: 512px; */
  /* 	background: #000; */
  /* 	position: absolute; */
}
</style>
