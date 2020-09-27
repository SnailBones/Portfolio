<template>
  <div class="demo">
    <h1>{{title}}</h1>
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
      </div>
    </div>
    <h3>{{description}}</h3>

    <!-- <div class="info">
      <p>Natural history dioramas are ubiquitously displays of the past. The pristine environments they portray, in almost all cases, have since been changed. Nature Now is my design for a present day diorama, updating the form by presenting its nonhuman inhabitants in a world drastically altered by mankind. This complexity is illustrated on a large touch screen on the back wall, displaying an food web. Touching any creature will bring it into the center of the web, provide further information about its relationship with our species, including a map of local sightings reported by citizen scientists.</p>
    </div>-->
  </div>
  <!-- </div> -->
</template>
<script>
import VueGallery from "@/components/gallery.vue";
export default {
  name: "Project",
  components: {
    gallery: VueGallery
  },
  props: {
    title: "Nature Now",
    description: "Some thing I made"
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
.demo {
  flex-grow: 2;
  min-width: 420px;
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
p i {
  font-weight: bolder;
}
</style>
