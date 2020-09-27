<template>
  <!-- <div class="underbar d-flex p-5 flex-wrap justify-content-around"> -->
  <div class="project">
    <div id="header-container">
      <h1>Electric Power Fast</h1>
      <h3>Visualizing a Fractured Grid</h3>
    </div>
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
          :style="{ backgroundImage: 'url(' + image.poster + ')' }"
        />
      </div>
    </div>
    <div class="info">
      <p>
        A visualization and user interface for Argonne National Lab's EPFast
        software. EPFast is a simulation of cascading disruptions to the
        electric power system and the resulting fragmentation of the grid.
        In this case, the disruption is a hurricane affecting the eastern interconnect, the interconnected circuit stretching from the Rocky Mountains to the
        Atlantic ocean. The data and visualization covers three affected components:
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/epfast/closekey.png" />
      </div>
      <p>
        <i>Buses</i>, or nodes, include
        <i>generators</i>
        (i.e. power plants),
        <i>loads</i>
        (i.e. residential or commerical consumers of electricity) and
        transformers.
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/epfast/lines.png" />
      </div>
      <p>
        <i>Branches</i>,
        represent power lines connecting the buses to create the
        electric grid.
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/epfast/islands.png" />
      </div>
      <p>
        <i>Islands</i>
        are groups of buses that have become isolated from the rest of the grid through disruptions of lines. Disruptions tend to cascade through the grid, forming a large number of islands. Islands can be fully powered, fully outaged, or partially outaged. Islands are visualized as polygons in their approximate area, and selecting an island highlights its lines, pproviding insight into its structure.
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/epfast/islands-lines.png" />
      </div>

      <p>Visualizing islands was a complex task: they needed to be intuitive enough for nontechnical users to interact with and understand, but provide the neccesary complexity to inform decisions. By iterating through several prototypes and experimenting with different algorithms, I developed a solution to reduce island intersection and misleading areas.</p>
      <div class="imageContainer">
        <img src="@/assets/img/epfast/heatmap.png" />
      </div>
      <p>Another challenge was the large scale of the data, which contains over 10,000 nodes. At larger views, we smoothly transition the node icons into a heatmap that provides insight into locations where the most generation and load has been lost.</p>
    </div>
    <h2 class="link">
      <router-link to="/">Back</router-link>
    </h2>
  </div>
</template>

<script>
//The visualization needed to be intuitive enough to communicate with a nontechnical audience, but include the neccesary complexity to inform descisions.

// <p>When a disruption, such as a natural disaster, damages some buses or branches, the circuit works to remain in balance. As long as there is a line connecting an active generator to an active load, the load will continue to demand electricy. This means that if one of several line connecting the two is severed, the energy cut off will be re-routed through the remaining lines. </p>
// <p> Too much flow can damage lines, so they are equipped with an automatic shutoff mechanism. If the flow reaches greater than the lines capacity, the line will be disabled to prevent further damage, or <i>tripped</i>. An unfortunate side effect is that &mdash if possible &mdash its flow will move to parallel lines, often causing further tripping. As a result, disrupted electric systems tend to split into a number of independent sub-grids, or <i>Islands</i>. Islands do not necessarily correspond to outage areas; an island with no generators will be completely outaged, and islands where generation does not meet demand will experience partial outages.
// </p>

// <p>Branches (i.e. electric lines) are visualized according to their capacity and final electric flow. Color indicates outaged lines and lines that have been over capacity, and are thus at increased likelihood for damage.</p>
//
// <p>Buses are points of interest on the lines, including generators, loads, and transformers. Each kind of bus has a corresponding icon, and colors indicate whether they are have lost electric flow. At a far zoom level, we replace the icons with a heatmap according to total load and generation lost. Red areas indicate a loss of load, and a high likelihood of outages. Yellow indicates loss of generation-- lines between red and yellow areas will need to be repaired to end outages.</p>
// The client's previous work.

// import VueGallery from "vue-gallery";
import VueGallery from "@/components/gallery.vue";
export default {
  name: "EPFast",
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
          title: "Nodes",
          href: require("@/assets/img/epfast/nodes.mp4"),
          type: "video/mp4",
          poster: require("@/assets/img/epfast/closekey.png")
        },
        {
          title: "Heat Map",
          href: require("@/assets/img/epfast/zoom_nodes.mp4"),
          type: "video/mp4",
          poster: require("@/assets/img/epfast/zoomout.png")
        },
        {
          title: "Lines",
          href: require("@/assets/img/epfast/lines.mp4"),
          type: "video/mp4",
          poster: require("@/assets/img/epfast/lines.png")
          // description: " "
        },
        {
          title: "Islands",
          // description:
          // "Islands are independent micro-grids following the disaster simulation",
          href: require("@/assets/img/epfast/islands.mp4"),
          type: "video/mp4",
          poster: require("@/assets/img/epfast/island-icon.png")
        }
      ],
      index: null
    };
  }
};
</script>

<style scoped lang="scss">
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
  // margin: 100px;
  // padding: 0;
  // /* width: 100%; */
  // /* height: 100%; */
  // /* background: #012; */
  // /* background: #000; */
  // /* color: #669; */
  // /* color: #db5f04; */
  // text-align: center;
}

#app {
  margin: 100px;
}

video {
  width: 100%;
  /* height: 240; */
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
  img {
    width: 100%;
  }
}
p i {
  font-weight: 400;
}
</style>
