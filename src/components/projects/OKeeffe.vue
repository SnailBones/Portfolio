<template>
  <div class="project">
    <h1>Seeing Beyond</h1>
    <h3>Interactive clouds for the Georgia O'Keefe Muesum</h3>

    <div class="imageContainer" style="max-width: 540px;">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/okeeffe/georgia-okeefe.mp4')" type="video/mp4" />
        </video>
    </div>

    <div class="info">
        <p> For the <i>Seeing Beyond</i> exhibit at the Georgia O'Keeffe Museum, I developed an interactive visualization to be projected on the gallery walls, providing a new perspective to two of O'Keeffe's paintings. Sensors in the room allow clouds to respond to a person's presence, creating mounds in the cloudscape in response to each person's location in the room. The clouds are generated with 3d simplex noise combined with sensor depth data, and visualized with a ray-marching shader simulating the effects of light passing through the atmosphere. Using a custom configuration menu, I adjusted the visualization on site to match the colors of Georgia O'Keeffe's paintings and reflect the goals of the exhibit's director.
        </p>
        <p>
            <i>Seeing Beyond</i> was on display at the Georgia O`Keeffe museum in Santa Fe from November 2019 through August 2022.
        </p>
        <p>
            <span class="link">
            <a href="https://www.shadertoy.com/view/tsV3Dh">View a prototype of the clouds.</a>
            </span>
        </p>

        <p>
            <span class="link">
            <a href="https://www.okeeffemuseum.org/installation/seeing-beyond/">Learn more about the <i>Seeing Beyond</i> exhibit.</a>
            </span>
        </p>
    </div>
    <h2 class="link">
      <router-link to="/">Home</router-link>
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
};
</script>
<style lang="scss" scoped>
.image {
  min-width: 100px;
  min-height: 60px;
  background-size: cover;
  background-position: center;
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
  img,
  video {
    width: 100%;
  }
}
p i {
  font-weight: bolder;
}
</style>
