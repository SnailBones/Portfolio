<template>
  <div class="project">
    <h1>King of the Worms</h1>
    <!-- <h3>A</h3> -->


    <div class="imageContainer">
        <img src="@/assets/img/worms/worms_1.jpg" />
    </div>

    <div class="info">
      <!-- <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/forest/forest.webm')" type="video/mp4" />
        </video>
      </div> -->
        <p><i>King of The Worms</i> combines a classic videogame theme with physical, active play, supported by a network of sensors and projectors. A worm follows each player as they walk across the floor. Players dodge other worms while collecting food to grow their own. Players may aim to defeat their rival worms and remain king, the game also accomodates the slower, cooperative playstyle of younger players.
        </p>
        <p><i>King of The Worms</i> can be played at
            <span class="link">
            <a href="https://electricplayhouse.com/">Electric Playhouse</a>.
            </span>
        </p>
    </div>

    <div class="imageContainer">
        <img src="@/assets/img/worms/worms_2.jpg" />
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
        // {
        //   title: "Model 1",
        //   href: require("@/assets/img/museum/models/mini.jpg"),
        //   type: "image/jpg"
        // },
        // {
        //   title: "Model 2",
        //   href: require("@/assets/img/museum/models/big.jpg"),
        //   type: "image/jpg"
        // },
        // {
        //   title: "Model 2",
        //   // description: "Close up",
        //   href: require("@/assets/img/museum/models/close.jpg"),
        //   type: "image/jpg"
        // },
        // {
        //   title: "Concept development: sunken labyrinth",
        //   href: require("@/assets/img/museum/models/labside.jpg"),
        //   type: "image/jpg"
        // }
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
