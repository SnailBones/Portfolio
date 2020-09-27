<template>
  <div class="project">
    <h1>Cactris</h1>
    <!-- <h3>A</h3> -->

    <div class="info">
      <div class="imageContainer">
          <video autoplay preload loop muted>
            <source :src="require('@/assets/img/ball/cactris.mp4')" type="video/mp4" />
          </video>
      </div>

        <p><i>Cactris</i> is a tile-matching puzzle game projected on a wall, in which sensors allow a player to interact with virtual balls. The player moves their body to push, lift, and toss balls into place, forming towering cacti. Connecting three matching colors scores points, but if a cactus grows to the top of the wall, the game is over.
        </p>
        <p>Challenges in development included developing reliable physics given interactions from the depth data, a shader pass to create a 3D shadow effect, designing for accessibliity to people of all ages, sizes, and abilities.
        </p>
        <p><i>Cactris</i> can be played at
            <span class="link">
            <a href="https://electricplayhouse.com/">Electric Playhouse</a>.
            </span>
        </p>
        <div class="imageContainer">
          <video autoplay preload loop muted>
            <source :src="require('@/assets/img/ball/rain_collector.mp4')" type="video/mp4" />
          </video>
       </div>
       <p> In this game, players sort balls according to their color. Balls in the wrong goal return spiky, and spiky balls in the wrong goal take away the player's health.</p>
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
