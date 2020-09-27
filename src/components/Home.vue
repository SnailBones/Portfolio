<template>
  <div class="home">
    <div class="title-card">
      <TreeCanvas id="tree-background" v-bind:gap="15" :width="10" :height="10" />
    </div>
    <!-- <div class="container d-flex justify-content-around" id="menu">
      <div class="my-shadow">
        <router-link to="/about">code</router-link>
      </div>
      <div class="my-shadow">
        <router-link to="/pictures">pictures</router-link>
      </div>
      <div class="my-shadow">
        <router-link to="/about">about</router-link>
      </div>
    </div>-->

    <!-- Here's the projects and stuff -->
    <!-- <div class="sticky" v-scroll-to="'.gallery'"> -->
    <!-- <div class="sticky"> -->
    <h1 class="signature" v-on:click="evolve" v-bind:class="{ secret: isRealName }">
      <span class="l cap">a</span>
      <span class="l">i</span>
      <span class="l change L1">
        <div class="start">l</div>
        <div class="end">d</div>
      </span>
      <span class="l">a</span>
      <span class="l">n</span>
      <br />
      <!-- <span class="l">&nbsp</span>
      <span class="l">&nbsp</span>-->
      <span class="l change T2">
        <div class="start">t</div>
        <div class="end">&nbsp</div>
      </span>
      <span class="l">h</span>
      <span class="l change U3">
        <div class="start">u</div>
        <div class="end">&nbsp</div>
      </span>
      <span class="l change S4">
        <div class="start">s</div>
        <div class="end">h</div>
      </span>
      <!-- <span class="l change S4">
        <div class="start"></div>
        <div class="end">h</div>
      </span>-->
    </h1>
    <!-- <h1 class="signature secret">
        <span class="l cap">a</span>
        <span class="l">i</span>
        <span class="l change L">
          d
        </span>
        <span class="l">a</span>
        <span class="l">n</span>
        <br />
        <span class="l change">&nbsp</span>
        <span class="l">h</span>
        <span class="l change">
          &nbsp
        </span>
        <span class="l change">
          h
        </span>
    </h1>-->
    <!-- </div> -->
    <div class="content">
      <!-- <h1>Projects</h1> -->
      <div class="gallery">
        <!-- <div class="center-cropped" style="background-image: url('@/assets/img/painless/poster.png');"> -->
        <!-- </div> -->
        <!-- outlink="https://github.com/SnailBones/Tree3D" -->
        <Thumbnail
          :img="require('@/assets/img/worms/worms_1.jpg')"
          title="King of the Worms"
          info="Multi-player snake game in real space."
          link="worms"
        />
        <Thumbnail
          :img="require('@/assets/img/ball/cactris.mp4')"
          title="Cactris"
          info="A tile matching puzzle game played with your body."
          link="cactris"
          zoomOut="true"
        />
        <Thumbnail
          :img="require('@/assets/img/epfast/loop.mp4')"
          zoomOut="true"
          title="Electric Power Fast"
          info="Visualizing chaos in the grid."
          link="grid"
        />
        <Thumbnail
          class="zoom-in"
          title="What Trees Were"
          info="Procedurally generated 3D trees."
          :img="require('@/assets/img/trees/sea-serpent.webm')"
          link="trees"
        />
        <Thumbnail
          title="Seeing Beyond"
          info="Interactive clouds for the Georgia O`Keeffe Muesum"
          :img="require('@/assets/img/okeeffe/crowd.jpg')"
          link="okeeffe"
        />
        <Thumbnail
          :img="require('@/assets/img/museum/models/close.jpg')"
          title="Nature Now"
          info="A physical and digital exhibit about urban ecology."
          link="nature"
        />
        <Thumbnail
          class="zoom-in"
          :img="require('@/assets/img/forest/forest.webm')"
          title="A Tree Falls: The Musical"
          info="An interactive model of ecological sucession, put to data-driven music."
          link="forest"
        />
        <Thumbnail
          :img="require('@/assets/img/gan/doublesizebush.webm')"
          title="Renaissance GAN"
          info="Generative Adversarial Network that outputs music and images (including of G. W. Bush)."
          outlink="https://github.com/eharkins/RenaissanceGAN"
        />
        <Thumbnail
          :img="require('@/assets/img/ocean/bullets.mp4')"
          title="ExplOcean"
          info="Blow up your opponent—and blow up some islands in a battle that constantly recreates its map."
          zoomOut="true;"
          link="ocean"
        />
        <Thumbnail
          :img="require('@/assets/img/runner/good.jpg')"
          title="Prism Escape"
          info="Move your body to race through a virtual landscape in this fast-paced agility game."
          outlink="https://electricplayhouse.com/"
        />
        <Thumbnail
          :img="require('@/assets/img/exquisite/corpse.png')"
          title="Exquisite Corpse"
          info="Web application for collaborative storytelling, following the Hero's Journey."
          outlink="https://exquisite-corpse.herokuapp.com/begin"
        />
        <!-- <Thumbnail
          :img="require('@/assets/img/painless/set.jpg')"
          title="Painless"
          info="A drama about technology, desire, and the wild west. Written and directed by me."
        /> -->
        <Thumbnail
          :img="require('@/assets/img/lamplight/lamplight.mp4')"
          zoomOut="true;"
          title="Lamplight"
          info="A small videogame."
          outlink="https://ailanthus.itch.io/lamplight"
        />
      </div>
      <!-- <component :is="openProject"></component> -->
    </div>
    <div>
      <div class="footer-space">
        <div class="bottom-stuff">
          <About />
          <div id="footer-links">
            <a class="smallfade icon-container" href="https://github.com/SnailBones">
              <img src="@/assets/link-icons/GitHub-Mark-Light-64px.png" />
            </a>
            <a class="smallfade icon-container" href="https://codepen.io/snailbones">
              <img src="@/assets/link-icons/codepenlogo.png" />
            </a>
            <a
              class="smallfade icon-container"
              href="https://www.shadertoy.com/user/ailanthus"
              style="color:white; font-family: Lobster,Tahoma,Arial; font-size: 36px"
            >S</a>
            <!-- <div>
        <a
          class="smallfade icon-container"
          href="https://www.linkedin.com/in/a-hendrickson"
        >
          <img width="64px" src="@/assets/link-icons/linkedin.png" />
        </a>
            </div>-->
            <div>
              <a class="smallfade icon-container" href="https://medium.com/@snailbones">
                <img width="64px" src="@/assets/link-icons/medium.png" />
              </a>
            </div>
            <div>
              <a class="smallfade icon-container" href="https://ailanthus.itch.io/">
                <img width="64px" src="@/assets/link-icons/itch.png" />
              </a>
            </div>
            <div>
              <a class="smallfade icon-container" href="mailto:aidhendrickson@gmail.com">
                <img width="64px" src="@/assets/link-icons/email.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";

import TreeCanvas from "@/components/TreeCanvas.vue";
import Thumbnail from "@/components/Thumbnail.vue";
import Project from "@/components/Project.vue";
import About from "@/components/About.vue";

// const ProjectMuseum = () => import("@/components/projects/Museum.vue");

// import ProjectZero from "@/components/projects/Zero.vue";
// import ProjectPlay from "@/components/projects/Play.vue";
// import ProjectMuseum from "@/components/projects/Museum.vue";
// import ProjectEPFast from "@/components/projects/EPFast.vue";

// import Pictures from "@/components/Pictures.vue";

export default {
  name: "Home",
  // props: {
  //   msg: String
  // },
  components: {
    // Home,
    TreeCanvas,
    Thumbnail,
    Project,
    About,
    // ProjectZero,
    // ProjectPlay,
    ProjectMuseum: () => import("@/components/projects/Museum.vue"),
    ProjectEPFast: () => import("@/components/projects/EPFast.vue")
    // Pictures
  },
  methods: {
    evolve: function(event) {
      this.isRealName = !this.isRealName;
      // console.log("welcome!");
      if (this.isRealName) {
        setTimeout(() => {
          VueScrollTo.scrollTo(".gallery");
        }, 1000);
      }
    }
  },
  data() {
    return {
      isRealName: false,
      openProject: "ProjectMuseum"
    };
  }
  // computed: {
  //   openProject() {
  //     return this.ProjectMuseum;
  //   }
  // }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
@import url("https://fonts.googleapis.com/css2?family=Lobster");

$signature-height: 256px;

html {
  /* overflow: hidden; */
  touch-action: none;
  content-zooming: none;
}

input,
textarea {
  display: block;
  margin: 10px;
  padding: 10px;
  /* background: #012; */
  /* color: #ffa */
}

body {
  /* font-family: 'Encode Sans Condensed', sans-serif; */
  /* position: absolute; */
  margin: 0;
  padding: 0;
  /* width: 100%; */
  /* height: 100%; */
  /* background: #012; */
  /* background: #000; */
  /* color: #669; */
  /* color: #db5f04; */
  text-align: center;
}

.title-card {
  // height: calc(100vh - #{$signature-height});
  height: 100vh;
}
.underbar {
  /* background: #000000; */
  width: 100%;
  /* height: 100%; */
  /* position: absolute; */
  bottom: 0;
  /* bottom: 20%; */
  /* overflow-y: scroll; */
}

.my-shadow {
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    box-shadow: 0 0 32px 32px $color-dark;
    background: $color-dark;
    // box-shadow: 0 0 32px 32px green;
    // background: green;
    width: 100%;
    height: 100%;
    // bottom: 1px;
    // top: 0;
    right: 0;
    // position: relative;
    position: absolute;
    z-index: -1;
    // text-shadow: 0 0 16px red, 0 0 32px red, 0 0 8px red;
  }
}

.sticky {
  // mix-blend-mode: hue;
  // mix-blend-mode: color-dodge;
  // color: #443;
  // color: #666;
  // position: sticky;
  // top: 0;
  z-index: 1;
  height: $signature-height;
  bottom: 60%;
  position: fixed;
  // position: relative;
  width: 100%;
  // &:hover {
  //   .signature {
  //     transition: 1s 1s;
  //     opacity: 0;
  //     z-index: -1;
  //     // &.secret {
  //     //   opacity: 1;
  //     //   z-index: 1;
  //     //   // pointer-events: all;
  //     // }
  //   }
  // }
}

.signature {
  position: absolute;
  top: 10%;
  font-family: "Montserrat Alternates", helvetica, sans-serif;
  // font-family: "Jacques Francois Shadow", helvetica, sans-serif;
  // font-weight: 900;
  // font-weight: 700;
  color: #333;
  mix-blend-mode: exclusion;
  will-change: opacity; //fixes chrome bug
  // color: rgba($color-light, 0.5);
  // color: #fff;
  height: 50%;
  line-height: 0.8;
  width: 100%;
  // width: 780px;
  // left: 50%;
  // margin-left: -390px;
  // position: absolute;
  text-align: center;
  // mix-blend-mode: lighten;
  // font-weight: lighter;
  // font-variant: small-caps;
  // text-align: center;
  font-size: 12rem;
  @media only screen and (min-width: 600px) {
    font-size: 24rem;
  }
  /* display: inline-block; */
  // border-radius: 12px;
  // word-wrap: break-word;
  overflow-wrap: break-word;
  // text-align: right;
  // margin-bottom: 120px;
  // height: 120px;
  // display: inline-block;
  // bottom: 64px;
  // top: 50%;
  // bottom: 0;

  @media only screen and (min-width: 600px) {
    padding: 0 100px 0 16px;
  }

  // right: 0;
  // position: sticky;
  z-index: 1000;
  /* left: 0; */
  user-select: none;
  transition: 5s 900s;
  // background: $color-dark;
  // border-bottom: 2px solid $color-green;
  // border-radius: 0 0 0 32px;
  //   // pointer-events: none;
  //   z-index: -1;
  //   // border-bottom: 2px solid $color-orange;
  //   // border-left: 2px solid $color-orange;
  //   // box-shadow: 0 0 32px 32px #181a20;
  // }

  // width: 100%;
  .l {
    display: inline-block;
    position: relative;
    // width: 4rem;
    // margin: -0.12em;
    margin: -0.115em;
    // height: 1em;
    // top: 0.4em;
    // text-shadow: 0 0 16px #181a20, 0 0 32px #181a20, 0 0 8px #181a20;
    // text-shadow: -2px -8px 8px $color-dark, 2px -8px 8px $color-dark, -2px 8px 8px $color-dark, 2px 8px 8px $color-dark,0 0 32px $color-dark, 0 0 16px $color-dark, 0 0 16px $color-dark;
    // opacity: 0.9;
    // can't have shadow and opacity
    // transition: color 9s, text-shadow 2s;
    // box-shadow: 0 0 32px 32px #181a20;
    // color: $color-green;
    transition: 0.4s;
    mix-blend-mode: screen;
    // opacity: 0.5;
    &.change {
      // color: $color-orange 0.1;
      text-align: center;
      &.L1 {
        // margin: 0 -0.1em 0 -0.1em;
        // switch absolute and relative positions so psotition is based on the D
        text-align: right;
        transform-origin: right;
        .start {
          position: absolute;
          width: 100%;
        }
        .end {
          position: relative;
        }
        transition-delay: 0;
      }
      &.T2 {
        .start {
          // margin: -0.2em -0.15em;
        }
        // margin-left: -0.19em;
        transition-delay: 0.11s;
        // switch absolute and relative positions so psotition is based on the D
      }
      &.U3 {
        transition-delay: 0.22s;
        // .start {
        //   position: absolute;
        //   width: 100%;
        // }
        // .end {
        //   position: relative;
        // }
      }
      &.S4 {
        transform-origin: left;
        transition-delay: 0.33s;
        // margin-left: 0.065em;
        // margin-left: -0.05em;
        .end {
          // margin-left: 0.2em;
          margin-left: 0.085em;
        }
        // margin: 0 -0.1em 0 -0.1em;
        // switch absolute and relative positions so psotition is based on the D
      }
    }
    transform-origin: right;
    .start {
      transition: inherit;
      position: relative;
      color: #384235;
      // position: absolute;
      transform-origin: inherit;
    }
    .end {
      transition: inherit;
      position: absolute;
      top: 0;
      left: 0;
      // position: relative;
      // color: #9454ff;
      color: #393147;
      mix-blend-mode: normal;
      opacity: 0;
      transform: scaleX(-1);
      // transform: rotateX(-1);
      transform-origin: inherit;
    }
    &:hover {
      // color: #9454ff;
      color: #bcb2f3;
      .start {
        color: #9454ff;
      }
      .end {
        color: #66ce47;
      }

      // color: #463e70;
      // filter: brightness(150%);
    }
  }
}

.signature.secret .l.change {
  // opacity: 0;
  // color: green;
  .start {
    // transition: 0.4s;
    opacity: 0;
    transform: scaleX(-1);
    // transform: rotateX(-1);
    // color: red;
  }
  .end {
    // transition: 0.4s;
    opacity: 1;
    transform: scaleX(1);
    // transform: rotate(1);
    // color: green;
  }
}

// #text:hover {
//   animation: 3s multicolor;
// }
// @keyframes multicolor {
//   // 0% {
//   //     color: #000;
//   // }
//   3% {
//     color: #8424ff;
//   }
//   12% {
//     color: #54ff06;
//   }
//   100% {
//     color: #fff;
//   }
// }

.smallfade {
  /* box-shadow: 0 0 32px 32px #181a20; */
  background: #181a20;
  display: inline-block;
  z-index: 2;
  margin: 0px;
  // display: inline-block;
  position: relative;
  &:after {
    border-radius: 100%;
    transition: 0.33s;
    // box-shadow: 0 0 0x 0 magenta;
    content: "";
    // box-shadow: 0 0 32px 32px green;
    // background: green;
    right: 50%;
    top: 50%;
    // bottom: 1px;
    // top: 0;
    margin: auto;
    // position: relative;
    position: absolute;
    z-index: 10;
    // text-shadow: 0 0 16px red, 0 0 32px red, 0 0 8px red;
    mix-blend-mode: difference;
  }
  &:hover:after {
    box-shadow: 0 0 8px 8px $color-light, 0 0 8px 24px $color-light;
    background: $color-light;
    //TODO: some nice circle please;
  }
}

.content {
  background: $color-dark;
  box-shadow: 0 0 128px 128px $color-dark;
  display: flex;
  // flex-wrap: wrap;
  // flex-wrap: no-wrap;
  justify-content: center;
  margin: 64px 0;
}

.col {
  padding: 0;
}

.gallery {
  // height: 800px;
  // border-top: 4px solid $color-green;
  // border-bottom: 4px solid $color-green;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  // align-items: center;
  justify-content: center;
}
.img-container {
  width: 40%;
  height: 40%;
  overflow: hidden;
  position: relative;

  img {
    // this should center it
    height: 100%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}

.icon-container {
  width: 48px;
  transition: 0.2s;
  border-radius: 100%;
  box-shadow: none;
  img {
    width: 100%;
  }
}

.footer-space {
  height: 100vh;
  position: relative;
  @media only screen and (min-width: 600px) {
    margin: 64px;
  }
}

.bottom-stuff {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
}

#footer-links {
  // @media only screen and (min-width: 600px) {
  //   margin: 6rem 2rem 0 0;
  // }
  margin: 6rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1024px;
}

// // Projects
// .content,
// .footer-space {
//   margin: 64px;
// }
</style>
