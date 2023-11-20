<template>
  <div class="project">
    <h1>ExplOcean</h1>
    <h3>A naval action game</h3>
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
        <div
          class="image shade"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image.href + ')' }"
        />
      </div>
    </div>
    <div class="info">
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/ocean/bullets.webm')" type="video/webm" />
        </video>
      </div>
      <p>ExplOcean is a naval action game whose players cannot leave their surroundings unchanged. The world is subject to being completely reshaped by the players' weapons. My team developed this project in Unity3D, and my responsibilities included the terrain system, physics, and enemy behavior.</p>
      <p />
      <p>Players and enemies have two different weapons available. Gunshots fly in a straight line, colliding with an enemy or an island above sea level. Cannons move in an arc, and are more likely to hit the ocean floor, with a much larger explosion. The two weapons not only encourage complex combat strategies, their complementary destruction also mantains terrain variety.</p>
      <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/ocean/cannons.webm')" type="video/webm" />
        </video>
      </div>
      <p>
        As the players' destruction turns land into water, the water level drops. In effect, the amount of land and water remains constant, so the destruction can continue indefinitely.</p>
      <p>
        Created with Chris Breed as our final project for Simulation course at James Cook University
      </p>
      <span class="link">
        <a href="https://github.com/chris-breed/CP3408-Unity-Assignment">Source code.</a>
      </span>
      </p>
    </div>

    <h2 class="link">
      <router-link to="/">Back</router-link>
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
    width: 100%;
  }
}
p i {
  font-weight: bolder;
}
</style>
