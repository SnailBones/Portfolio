<template>
  <div class="thumbnail" @mouseover="play" @mouseleave="pause">
    <!-- <div class="picture" :style="{ backgroundImage: `url('${img}')` }">
      <div class="title">{{title}}</div>
    </div>-->
    <div class="picture">
      <video
        @canplay="updatePaused"
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
    <router-link :to="'/project/' + link" v-if="link"></router-link>
    <a :href="outlink" v-if="outlink"></a>
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
    link: String,
    outlink: String,
    zoomOut: false
  },
  data() {
    return {
      // active: false,
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
    updatePaused(event) {
      this.videoElement = event.target;
      // this.paused = event.target.paused;
    },
    play: function() {
      // event.target.play();
      if (this.videoElement) {
        this.videoElement.play();
      }
    },
    pause: function() {
      if (this.videoElement) {
        this.videoElement.pause();
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/style.scss";

.thumbnail {
  // width: 40%;
  // height: 40%;
  // max-width: 400px;
  // flex-grow: 1;
  padding: 160px 0;
  min-width: 300px;
  // overflow: hidden;
  position: relative;

  // box-shadow: 0 0 32px 0 black;
  // background-color: black;
  // transition: box-shadow 1s;
  &:hover {
    overflow: visible;
    z-index: 10;

    .picture {
      // box-shadow: 0 0 64px 0 $color-light;
      box-shadow: 0 4px 128px 4px #000;
      width: 133%;
      height: 133%;
      transition: 0.33s;
      transition: z-index 0s step-start, width 0.5s, height 0.5s,
        box-shadow 0.33s;
      video,
      img {
        // border-radius: 30px;
      }
      // box-shadow: none;
      .title {
        // opacity: 1;
        // z-index: 11;
        bottom: 0;
      }
    }
  }
  margin: 8px;

  .picture {
    position: absolute;
    overflow: hidden;
    // padding: 160px 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    // box-shadow: inset 0 0 64px 0 #000;
    // box-shadow: none;
    // transition: box-shadow 0.4s width 0.3s height 0.3s;
    box-shadow: 0 5px 16px 0 #000;
    border-radius: 100%;
    // transition: 5s;
    transition: z-index 2s step-end, width 0.33s, height 0.33s, box-shadow 0.16s;
    pointer-events: none;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    .zoom-in & {
      background-size: auto;
    }
    video,
    img {
      left: 50%;
      top: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      // width: 100%;
      // height: 100%;
      // overflow: hidden;
    }
    img,
    video.zoom-out {
      height: 100%;
    }
  }

  .title {
    $soft-dark: rgba(#000, 0.4);
    padding: 10px 0 20px 0;
    bottom: -64px;
    transition: 0.25s;
    opacity: 1;
    z-index: 100;
    background: $soft-dark;
    position: absolute;

    width: 100%;
    // box-shadow: 0 0 32px 32px $soft-dark;
  }
  // img {
  //   // this should center it
  //   height: 100%;
  //   left: 50%;
  //   top: 50%;
  //   position: absolute;
  //   transform: translate(-50%, -50%);

  // &:after {
  //   box-shadow: inset 0 0 50px 0px red;
  //   content: " a";
  //   display: block;
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   width: 100%;
  // }
  // display: inline-block;
  // position: relative;
  // }
  // .my-shadow {
  //   width: 100%;
  //   height: 100%;
  //   // box-shadow: 0 0 32px 32px blue;
  //   box-shadow: inset 0 0 64px 0 #0f0;
  //   // background: blue;
  //   // box-shadow: 0 0 32px 32px green;
  //   // background: green;
  //   width: 100%;
  //   height: 100%;
  //   // bottom: 1px;
  //   // top: 0;
  //   right: 0;
  //   position: absolute;
  //   z-index: 1;
  // }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.zoom-in .picture {
  background-size: auto;
}
</style>