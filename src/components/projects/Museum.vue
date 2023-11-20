<template>
  <div class="project">
    <h1>Nature Now</h1>
    <h3>Exhibit Design Coursework at Colorado College</h3>
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
      <p>
        A
        <b>
          <i>novel ecosystem</i>
        </b> is an ecosystem that has been reconstructed, intentionally or unintentionally, by humankind. We live most of our lives surrounded by novel ecosystems, yet they receive remarkably little formal attention. For instance, natural history dioramas are ubiquitously displays of the past. In a world where our species influence permeates almost every ecosystem, the environments they portray,in almost all cases, no longer exist. <i>Nature Now</i> is my design for a present day diorama, updating the form by presenting its nonhuman inhabitants in their unflinchingly human-altered surroundings, and displaying the new interactions between species that have been created. This complexity is illustrated on a large touch screen on the back wall, which displays a food web displaying natural and novel relationships between species. Touching any creature will bring it into the center of the web, provide further information about its relationship with our species, including a map of local sightings reported by citizen scientists.
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/museum/designs/screen.jpg" />
      </div>
      <div class="imageContainer">
        <img src="@/assets/img/museum/designs/squirrel.png" />
      </div>
      <p>This exhibit encourages viewers to examine an often overlooked space: a small stream in suburban Colorado Springs. Its banks have been stablized with concrete, and its tributaries are now culverts. Litter is common, and the flora is dominated by introduced plant species. Yet, remarkable diversity flourishes, and species interact in ways that they never have before. My goal was to communicate these interspecies interactions, engage the audience, and encourage action toward sustainability.</p>
    </div>
    <h2 class="link">
      <router-link to="/">Back</router-link>
    </h2>
  </div>
  <!-- </div> -->
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
        {
          title: "Model 1",
          href: require("@/assets/img/museum/models/mini.jpg"),
          type: "image/jpg"
        },
        {
          title: "Model 2",
          href: require("@/assets/img/museum/models/big.jpg"),
          type: "image/jpg"
        },
        {
          title: "Model 2",
          // description: "Close up",
          href: require("@/assets/img/museum/models/close.jpg"),
          type: "image/jpg"
        },
        {
          title: "Concept development: sunken labyrinth",
          href: require("@/assets/img/museum/models/labside.jpg"),
          type: "image/jpg"
        }
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
  img {
    width: 100%;
  }
}
p i {
  font-weight: bolder;
}
</style>
