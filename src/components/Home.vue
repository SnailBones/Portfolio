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
    <h1 class="signature" v-on:click="begin" v-scroll-to="'.gallery'">
      <span class="l cap">A</span>
      <span class="l">I</span>
      <span class="l">D</span>
      <span class="l">A</span>
      <span class="l">N</span>
      <span>&nbsp</span>
      <span class="l cap">H.</span>
      <span>&nbsp</span>
      <span class="l cap">H.</span>
      <!-- <span class="l">E</span>
      <span class="l">N</span>
      <span class="l">D</span>
      <span class="l">R</span>
      <span class="l">I</span>
      <span class="l">C</span>
      <span class="l">K</span>
      <span class="l">S</span>
      <span class="l">O</span>
      <span class="l">N</span>-->
    </h1>
    <div class="content">
      <!-- <h1>Projects</h1> -->
      <div class="gallery">
        <!-- <div class="center-cropped" style="background-image: url('@/assets/img/painless/poster.png');"> -->
        <!-- </div> -->
        <Thumbnail
          class="zoom-in"
          title="What Trees Were"
          :img="require('@/assets/img/trees/sea-serpent.webm')"
          outlink="https://github.com/SnailBones/Tree3D"
        />
        <Thumbnail
          :img="require('@/assets/img/museum/models/close.jpg')"
          title="Nature Now"
          link="Nature"
        />
        <Thumbnail
          :img="require('@/assets/img/epfast/islands.mp4')"
          zoomOut="true;"
          title="Electric Power Fast"
          link="EPFast"
        />
        <Thumbnail
          class="zoom-in"
          :img="require('@/assets/img/forest/forest.webm')"
          title="Cell Forest"
          outlink="https://github.com/SnailBones/CellForest"
        />
        <Thumbnail :img="require('@/assets/img/painless/set.jpg')" title="Painless" />
        <Thumbnail
          :img="require('@/assets/img/gan/doublesizebush.webm')"
          title="Renaissance GAN"
          outlink="https://github.com/eharkins/RenaissanceGAN"
        />
        <Thumbnail
          :img="require('@/assets/img/ocean/placeholder.mp4')"
          title="ExplOcean"
          zoomOut="true;"
          outlink="https://github.com/chris-breed/CP3408-Unity-Assignment"
        />
        <Thumbnail
          :img="require('@/assets/img/exquisite/corpse.png')"
          title="Exquisite Corpse"
          outlink="https://exquisite-corpse.herokuapp.com/begin"
        />
        <Thumbnail
          :img="require('@/assets/img/lamplight/lamplight.mp4')"
          zoomOut="true;"
          title="Lamplight"
          outlink="https://ailanthus.itch.io/lamplight"
        />
      </div>
      <component :is="openProject"></component>
      <!-- <ProjectMuseum /> -->
      <!-- <img src="@/assets/img/painless/show.jpg" /> -->

      <!-- <ProjectZero />
    <ProjectEPFast />
    <ProjectMuseum />
      <ProjectPlay />-->
    </div>

    <div class="footer-space">
      <div id="footer-links">
        <!-- <div> -->
        <a class="smallfade icon-container" href="https://github.com/SnailBones">
          <img src="@/assets/link-icons/GitHub-Mark-Light-64px.png" />
        </a>
        <!-- </div> -->
        <!-- <div> -->
        <a class="smallfade icon-container" href="https://codepen.io/snailbones">
          <img src="@/assets/link-icons/codepenlogo.png" />
        </a>
        <!-- </div> -->
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
        <!-- <div class="col">
      itch
    </div>
    <div class="col-sm">
      inaturalist
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import TreeCanvas from "@/components/TreeCanvas.vue";
import Thumbnail from "@/components/Thumbnail.vue";

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
    // ProjectZero,
    // ProjectPlay,
    ProjectMuseum: () => import("@/components/projects/Museum.vue"),
    ProjectEPFast: () => import("@/components/projects/EPFast.vue")
    // Pictures
  },
  methods: {
    begin: function(event) {
      // console.log("welcome!");
    }
  },
  data() {
    return {
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
  height: calc(100vh - 120px);
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

.my-shadow,
.l {
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    box-shadow: 0 0 32px 32px #181a20;
    background: #181a20;
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

.signature {
  // mix-blend-mode: lighten;
  font-weight: lighter;
  font-variant: small-caps;
  text-align: center;
  font-size: 4rem;
  /* display: inline-block; */
  border-radius: 12px;
  word-wrap: break-word;
  // margin-bottom: 120px;
  height: 120px;
  // display: inline-block;
  // bottom: 64px;
  // top: 50%;
  // bottom: 0;
  top: 0;
  position: sticky;
  z-index: 1000;
  /* left: 0; */
  user-select: none;
  width: 100%;
  .l {
    // height: 1em;
    // top: 0.4em;
    // text-shadow: 0 0 16px #181a20, 0 0 32px #181a20, 0 0 8px #181a20;
    // text-shadow: -2px -8px 8px $color-dark, 2px -8px 8px $color-dark, -2px 8px 8px $color-dark, 2px 8px 8px $color-dark,0 0 32px $color-dark, 0 0 16px $color-dark, 0 0 16px $color-dark;
    // opacity: 0.9;
    // can't have shadow and opacity
    // transition: color 9s, text-shadow 2s;
    // box-shadow: 0 0 32px 32px #181a20;
    transition: 2s;
    color: #54ff06;
    // opacity: 0.5;
    &.cap {
      color: #ee6605;
      // transition: color 7s;
      // font-size: 12rem;
      &:hover {
        // color: red;
        // transition: color 0.8s;
      }
    }
    &:hover {
      // animation: 10s multicolor;
      // color: #54FF06;
      color: #9454ff;
      // transition: color 0.5s;
      transition: 0.4s;
      opacity: 1;
      // text-shadow: -2px -8px 8px $color-dark, 2px -8px 8px $color-dark, -2px 8px 8px $color-dark, 2px 8px 8px $color-dark,0 0 32px $color-dark, 0 0 16px $color-dark, 0 0 16px $color-dark;
      // text-shadow: none;
    }
  }
}

#text:hover {
  animation: 3s multicolor;
}
@keyframes multicolor {
  // 0% {
  //     color: #000;
  // }
  3% {
    color: #8424ff;
  }
  12% {
    color: #54ff06;
  }
  // 100% {
  //     color: #FFF;
  // }
}

.smallfade {
  /* box-shadow: 0 0 32px 32px #181a20; */
  background: #181a20;
  display: inline-block;
  z-index: 2;
  margin: 4px;
  // display: inline-block;
  position: relative;
  &:after {
    transition: 1s;
    box-shadow: 0 0 0x 0 magenta;
    content: "";
    // box-shadow: 0 0 32px 32px green;
    // background: green;
    width: 100%;
    height: 100%;
    // bottom: 1px;
    // top: 0;
    right: 0;
    // position: relative;
    position: absolute;
    z-index: 10;
    // text-shadow: 0 0 16px red, 0 0 32px red, 0 0 8px red;
    mix-blend-mode: difference;
  }
  &:hover:after {
    box-shadow: 0 0 8px 8px $color-light, 0 0 32px 0px $color-light;
    background: $color-light;
    //TODO: some nice circle please;
  }
}

.content {
  background: $color-dark;
  box-shadow: 0 0 32px 32px $color-dark;
}

.col {
  padding: 0;
}

.gallery {
  // height: 800px;
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
  width: 32px;
  transition: 0.4s;
  box-shadow: none;
  img {
    width: 100%;
  }
  & :hover {
    box-shadow: 0 0 32px 0px #fff;
    background: #fff;
  }
}

.footer-space {
  height: 100vh;
  position: relative;
}

#footer-links {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1024px;
}

// Projects
.content,
.footer-space {
  margin: 64px;
}
</style>
