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

        <p><i>Cactris</i> is a match-three puzzle game projected on a wall, in which players use their bodies to interact with virtual balls. Sensors pick up players' positions as they catch, push, and toss balls. When a ball collides with the ground, it grows spines and transforms into a fixed cactus pad. A cutball colliding with a cactus joins as another pad. If a cactus grows to the top of the wall, the game is over. Players can eliminate pads and score points by combining three or more pads of the same color. Cactris can be played solo or by a cooperating team.
        </p>
        <p> I built Cactris by developing a 2D physics engine and a series of shader passes that transforms sensor depth data into physics forces. First, depth data is transformed into the appropriate plane and a step functon applied, creating a "shadow" of players in front of the wall. Then the shadow is blurred to create a smooth gradient and reduce noise, then a derivative pass provides the direction and magnitude of change. Then at every frame we read the texture at each ball center and apply the value as a force to the ball. In effect, balls are repelled by people, which creates a sense of solidness and physical interaction. This approach (and the library supporting it) is shared in by game
          <span class="link">
            <router-link to="/project/worms">King of the Worms</router-link>
          </span>
        , though in that game the vector is applied in the other direction, so objects are attracted to depth instead of repelled.
        </p>
        <p>I developed Cactris through an iterative process of trial and experiment. After building the interactive physics egine, I initially sought to make a competetive two-player ball game, perhaps a digital version of volleyball or basketball. Prototypes for this game faced an obstacles: when players encountered a fast-moving ball, they instictively swung and kicked at it with fast strikes. Unfortunately, sensors running at 30fps, proved inadequate for capturing fast motions, resulting in balls moving in unexpected directions and player frustration.
        </p>
        <p> Given this limitation, I set out to build a game that encourages slow, precise movements, setting aside the fast-paced sports theme for a more creative and meditative puzzle experience. First, I adressed ball movement. By adding high drag, balls felt lighter and balloon-like, encouraging gentler touches that wouldn't run into the framerate issue.
        </p>
        <p>Once ball interactions felt as fun and reliable as possible, I turned to gameplay to match the now light, floaty balls. In this early prototype, players sort balls according to their color. Balls in the wrong goal return again in spiky form, and spiky balls in the wrong goal damage the player.</p>
        <div class="imageContainer">
          <video autoplay preload loop muted>
            <source :src="require('@/assets/img/ball/rain_collector.mp4')" type="video/mp4" />
          </video>
       </div>
       <p> This mechanic proved confusing to follow and presented accesibility issues for short players or those without full color vision.
       </p>
       <p> Looking to draw from visual languages that visitors would be familiar with, I turned to tile-matching puzzle games for inspiration. Tile-matching games are popular and recognizable, and include both the
            <span class="link">
              <a href="https://en.wikipedia.org/wiki/Tetris_(Electronic_Arts)">best selling</a>
            </span>
            and the
            <span class="link">
              <a href="https://en.wikipedia.org/wiki/List_of_most-played_mobile_games_by_player_count">most played mobile game of all time</a>
            </span>.
        Importantly, the audience of this genre extends well beyond traditional "gamers," meaning that even visitors with little videogame experience cn recognize familiar mechanics. By grounding a novel interaction mechanism in broadly understood gameplay patterns, Cactris is accesibile to players of many ages and experiences.
       </p>
        <p> To improve accesibility to players without full color vision, I introduced distinct shapes inside of the balls. Final touches include bonus points for combos, harmonic sound effects on ball interactions, and a subtle perspective background suggesting depth.
        </p>
        <p><i>Cactris</i> can be played at
            <span class="link">
            <a href="https://electricplayhouse.com/play">Electric Playhouse</a>.
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
