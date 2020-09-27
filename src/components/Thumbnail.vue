<template>
  <div
    class="thumbnail"
    v-bind:class="{ active: active }"
    @mouseover="play"
    @click="activate"
    @mouseleave="deactivate"
  >
    <div id="darken-screen"></div>
    <!-- <div class="picture" :style="{ backgroundImage: `url('${img}')` }">
      <div class="title">{{title}}</div>
    </div>-->
    <div ref="picture" class="picture">
      <video
        ref="video"
        preload
        loop
        muted
        v-if="['webm', 'mp4'].includes(fileType)"
        :class="{'zoom-out': zoomOut}"
      >
        <source :src="img" type="video/webm" />
      </video>
      <img v-if="['jpg', 'png', 'gif'].includes(fileType)" :src="img" />
      <div class="title">{{title}}</div>
    </div>
    <div class="info">{{info}}</div>
    <router-link :to="'/project/' + link" v-if="link && active"></router-link>
    <a :href="outlink" v-if="outlink && active"></a>
    <!-- <img :src="img" /> -->
    <!-- <img :src="require('@/assets/img/painless/set.jpg')" /> -->
    <!-- <img src="../assets/img/painless/set.jpg" /> -->
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    img: String,
    title: String,
    info: String,
    link: String,
    outlink: String,
    zoomOut: false
  },
  data() {
    return {
      playing: false,
      active: false,
      vidElement: null
    };
  },
  // return {
  //   image: require(img)
  // }
  computed: {
    fileType: function() {
      var r = /.+\.(.+)$/.exec(this.img);
      return r ? r[1].toLowerCase() : null;
    }
  },
  methods: {
    // updatePaused(event) {
    //   this.videoElement = event.target;
    //   // this.paused = event.target.paused;
    // },
    play: function(event) {
      this.playing = true;
      // event.target.play();
      // if (this.videoElement) {
      //   this.videoElement.play();
      // }
      if (this.$refs.video) {
        this.$refs.video.play();
      }
    },

    //changes class to expand image
    // change transforms so image expands and stays on the page
    activate: function() {
      // set style manually instead of css hover
      this.active = true;
      // console.log("clicked! active is ", this.active);
      let picture = this.$refs.picture;
      if (!picture) {return}
      // console.log("adjusting!");
      // console.log(picture);
      // console.log("margin left is now", picture.style.marginLeft);
      let bounds = picture.getBoundingClientRect();
      // console.log(bounds.left, bounds.top, bounds.right);
      // console.log("width is", document.body.clientWidth);
      let onLeft = bounds.left <= 0;
      // console.log("bonds left is", bondse.left);
      let onRight = bounds.right >= document.body.clientWidth - 10;
      if (onLeft & !onRight) {
        picture.style.transform = "translate(0, -50%)";
        picture.style.left = "0";
        // picture.style.margin = "0 80px";
        // picture.style.left = "0";
      } else if (onRight & !onLeft) {
        picture.style.transform = "translate(-100%, -50%)";
        picture.style.left = "100%";
      } else {
        picture.style.transform = "translate(-50%, -50%)";
        picture.style.left = "50%";
      }
    },
    deactivate: function() {
      this.playing = false;
      this.active = false;
      if (this.$refs.video) {
        this.$refs.video.pause();
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/style.scss";

$size: 400px;
$hover-size: 800px;

.thumbnail:before {
  content: "";
  float: left;
  padding-top: 100%;
}

.thumbnail {
  flex-grow: 1;
  // width: 40%;
  // height: 40%;
  // max-width: 400px;
  // flex-grow: 1;
  // padding: 160px 0;
  min-width: $size;
  // overflow: hidden;
  position: relative;

  // box-shadow: 0 0 32px 0 black;
  // background-color: black;
  // transition: box-shadow 1s;

  &:hover {
    .picture {
      filter: none;
    }
    .title {
      // opacity: 1;
      z-index: 11;
      transition: 0.25s 0.11s;
      top: 0;
    }
  }
  &.active {
    overflow: visible;
    z-index: 10;

    .picture {
      z-index: 10;
      border-radius: 100%;
      // box-shadow: 0 0 64px 0 $color-light;

      //width can't be exact because items change sizes. oops.
      // margin-left: -($hover-size - $size)/3;
      // margin-top: -$hover-size/4;
      box-shadow: 0 4px 128px 4px #000;
      width: $hover-size;
      height: $hover-size;
      transition: 0.33s;
      // transition: z-index 0s step-start, width 0.5s, height 0.5s,
      //   box-shadow 0.33s;
      // video,
      // img {

      // }
      // box-shadow: none;
    }
    .info {
      transition: 0.25s 0.44s;
      opacity: 1;
      // z-index: 11;
      top: ($size);
      // bottom: -($hover-size/4);
    }
  }
  // margin: 8px;

  .picture {
    // right: 0;
    position: absolute;
    overflow: hidden;
    // padding: 160px 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: 0.33s;
    // transition: z-index 2s step-end, width 0.33s, height 0.33s, box-shadow 0.16s;
    pointer-events: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: grayscale(50%) brightness(50%);

    .zoom-in & {
      background-size: auto;
    }
    video,
    img {
      left: 50%;
      top: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      height: $hover-size;
      // width: 100%;
      // height: 100%;
      // overflow: hidden;
    }
    img,
    video.zoom-out {
      // transform: translate(-50%, -50%) scale(0.5);
      // height: 100%;
    }
  }
  // $soft-dark: rgba($color-light, 0.6);
  $soft-dark: rgba($color-dark, 0.6);
  .info {
    padding: 10px 4px 20px 4px;
    // bottom: -12px;
    opacity: 0;
    transition: 0.25s;
    z-index: 100;
    background: $soft-dark;
    color: $color-light;
    position: absolute;

    width: 100%;
    top: ($size + 64px);
    // box-shadow: 0 0 32px 32px $soft-dark;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    color: $color-light;
    // font-variant: small-caps;
    padding: 40px 0 4px 0;
    top: -164px;
    transition: 0.25s 0.22s;
    opacity: 1;
    z-index: 100;
    background: $soft-dark;
    position: absolute;

    width: 100%;
    // box-shadow: 0 0 32px 32px $soft-dark;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #darken-screen {
    // position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: black;
    // filter: alpha(opacity=30);
    // opacity: 0;
    opacity: 0.3;
    pointer-events: none;
    // display: none;
    transition: 0.2s;
  }
}
.zoom-in .picture {
  background-size: auto;
}
</style>