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
      <p>Natural history dioramas are ubiquitously displays of the past. The pristine environments they portray, in almost all cases, have since been changed. Nature Now is my design for a present day diorama, updating the form by presenting its nonhuman inhabitants in a world drastically altered by mankind. This complexity is illustrated on a large touch screen on the back wall, displaying an food web. Touching any creature will bring it into the center of the web, provide further information about its relationship with our species, including a map of local sightings reported by citizen scientists.</p>
      <div class="imageContainer">
        <img src="@/assets/img/museum/designs/screen.jpg" />
      </div>
      <p>This exhibit allows viewers to examine an often overlooked space: a small stream in suburban Colorado Springs. Its banks have been stablized with concrete, and its tributaries are now culverts. Litter is common, and the flora is dominated by introduced plant species. Yet, remarkable diversity flourishes, and species interact in ways that they never have before. My goal was to communicate these interspecies interactions, engage the audience, and encourage action toward sustainability.</p>
      <div class="imageContainer">
        <img src="@/assets/img/museum/designs/squirrel.png" />
      </div>
    </div>
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
        // require("@/assets/img/painless/set.jpg"),
        // require("@/assets/img/epfast/zoom_nodes.mp4"),
        // require("@/assets/img/epfast/nodes.mp4"),
        // require("@/assets/img/painless/set.jpg"),
        // {
        //   title: "This doesn't go here",
        //   href: require("@/assets/img/painless/set.jpg"),
        //   type: "img/jpg",
        //   poster: require("@/assets/img/painless/set.jpg")
        // },
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
        // {
        //   title: "Concept development: sunken labyrinth",
        //   href: require("@/assets/img/museum/models/labtop.jpg"),
        //   type: "image/jpg"
        // }
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
  width: 680px;
  img {
    width: 100%;
  }
}
p i {
  font-weight: bolder;
}
</style>
