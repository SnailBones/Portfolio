<template>
  <div class="project">
    <h1>What Trees Were</h1>
    <h3>A procedural art generator</h3>
    <div class="carousel">
      <gallery
        loop
        :images="images"
        :index="index"
        :carousel="true"
        :options="{ continuous: true }"
        @close="index = null"
      ></gallery>
      <div class="d-flex flex-wrap justify-content-center">
        <!-- <div class="shade"> -->
        <div
          class="image shade"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image.href + ')' }"
        />
        <!-- </div> -->
      </div>
    </div>
    <!-- <img src="@/assets/img/painless/poster.png" width=400px /> -->
    <!-- <div class="imageContainer">
    <img src="@/assets/img/museum/models/labtop.jpg" />
    </div>-->
    <!-- <div class="imageContainer">
    <img src="@/assets/img/museum/models/labside.jpg" />
  </div>
  <div class="imageContainer">
    <img src="@/assets/img/museum/models/mini.jpg" />
  </div>
  <div class="imageContainer">
    <img src="@/assets/img/museum/models/big.jpg" />
  </div>
  <div class="imageContainer">
    <img src="@/assets/img/museum/models/close.jpg" />
    </div>-->
    <div class="info">
      <div class="imageContainer">
        <!-- <img src="@/assets/img/trees/sea-serpent.gif" /> -->
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/sea-serpent.webm')" type="video/webm" />
        </video>
      </div>
      <div class="imageContainer">
        <!-- <img src="@/assets/img/trees/japan.gif" /> -->
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/japan.webm')" type="video/webm" />
        </video>
      </div>
      <!-- <div class="imageContainer">
        <img src="@/assets/img/trees/small-grow.gif" />
        <img src="@/assets/img/trees/geom.gif" />
        <img src="@/assets/img/trees/willow.gif" />
        <img src="@/assets/img/trees/light.gif" />
        <img src="@/assets/img/trees/cypress.gif" />
      </div> -->
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/small-grow.webm')" type="video/webm" />
        </video>
      </div>
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/light.webm')" type="video/webm" />
        </video>
      </div>
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/geom.webm')" type="video/webm" />
        </video>
      </div>
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/willow.webm')" type="video/webm" />
        </video>
      </div>
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/cypress.webm')" type="video/webm" />
        </video>
      </div>
        <!-- <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/geom.webm')" type="video/webm" />
        </video>
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/willow.webm')" type="video/webm" />
        </video>
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/trees/cypress.webm')" type="video/webm" />
        </video> -->
      <p><i>What Trees Were</i> began as a final project for Computer Graphics and evolved into a creative tool for all your tree-generation needs. Tweak the ruleset to create the tree of your dreams, with advanced mode for interpolation between two rulesets in one tree.</p>
      <p>
        Featured in Timothy zine.
      </p>

      <p>
        Dowload on
        <span class="link">
          <a href="https://ailanthus.itch.io/whattreeswere">Itch</a>
        </span>. Source on
        <span class="link">
          <a href="https://github.com/SnailBones/CellForest">Github</a>
        </span>.
      </p>
    </div>

    <h2 class="link">
      <router-link to="/">HOME</router-link>
    </h2>
  </div>
</template>
<script>
import VueGallery from "@/components/gallery.vue";
export default {
  name: "ProjectMuseum",
  components: {
    gallery: VueGallery
  },
  data: function() {
    return {
      images: [
      ],
      index: null
    };
  }
};
</script>
<style lang="scss" scoped>
.project {
  // font-family: $font-family;
  background-color: #000;
}
.image {
  // padding: 160px 0;
  min-width: 100px;
  min-height: 60px;
  // min-height: 200px;
  // width: 50%
  // padding-top: 100%;

  // width: 100%;
  // height: 100%;
  background-size: cover;
  background-position: center;
  // box-shadow: inset 0 0 64px 0 #000;
  transition: box-shadow 0.4s;

  .zoom-in & {
    background-size: auto;
  }
}
.imageContainer {
  margin: 2em 0 2em 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  // width: 680px;
  img,
  video {
    max-width: 100%;
  }
}
p i {
  font-weight: bolder;
}
</style>
