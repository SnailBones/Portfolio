<template>
  <!-- <div class="underbar d-flex p-5 flex-wrap justify-content-around"> -->
  <div id="app">
    <div id="header-container">
      <h1>Electric Power Fast</h1>
    </div>
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
      <!-- </div> -->
    </div>
    <div class="info">
      <p>
        A visualization and user interface for Argonne National Lab's EPFast
        software. EPFast is a simulation of cascading disruptions to the
        electric power system and the resulting fragmentation of the grid.
      </p>
      <p>
        This demonstration dataset is the eastern interconnect, one complex
        connected electric circuit stretching from the Rocky Mountains to the
        Atlantic ocean. The simulation data includes electric buses, branches,
        and "islands."
      </p>
      <p>
        <i>Buses</i> (graphic nodes) include
        <i>generators</i>
        (i.e. power plants),
        <i>loads</i>
        (i.e. residential or commerical consumers of electricity) and
        transformers.
      </p>
      <p>
        <i>Branches</i>
        (graphic edges) represent power lines connecting the buses to create the
        electric grid.
      </p>

      <p>
        Visualizing islands was the biggest visualization challenge of the
        project. By iterating through several prototypes, I came up with a
        solution to guarantee that islands will not intersect with one another
        or suggest misleading outage areas. Working closely with my team, I
        developed the prototype into a final visualization tool to deliver to
        Argonne National Labs.
      </p>
    </div>
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
  name: "Home",
  props: {
    msg: String
  },
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
          poster: require("@/assets/img/epfast/nodes.mp4")
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
          poster: require("@/assets/img/epfast/island.png")
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
p i {
  font-weight: bolder;
}
</style>
