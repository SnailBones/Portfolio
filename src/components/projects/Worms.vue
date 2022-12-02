<template>
	<div class="project">
		<h1>King of the Worms</h1>
		<!-- <h3>A</h3> -->


		<!-- <div class="imageContainer">
				<img src="@/assets/img/worms/worms_1.jpg" />
		</div> -->


		<div class="imageContainer">
			<video autoplay preload loop muted>
					<source :src="require('@/assets/img/worms/worms.mp4')" type="video/mp4" />
			</video>
		</div>
		<!-- <iframe width="1111" height="625" src="https://www.youtube.com/embed/7wngKZOYYDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

		<div class="info">
			<!-- <div class="imageContainer">
				<video autoplay preload loop muted>
					<source :src="require('@/assets/img/forest/forest.webm')" type="video/mp4" />
				</video>
			</div> -->
				<p><i>King of The Worms</i> combines a classic videogame theme with physical, active play supported by a network of sensors and projectors. A worm follows each player as they walk across the floor of a gym-like room. Players dodge other worms while collecting food to grow a worm of their own. Players may aim to defeat their rival worms and remain king, or to cooperate for mutual survival and growth, a playstyle popular among younger players. 
				</p>
				<p>Play requires no controller or equipment. The only input is depth data from a series of sensors on the ceiling, and the movement of the worms is determined through shader calculations. This was the first game at Electric Playhouse that assigned players to moveable characters, and ensuring reliability proved a considerable challenge.
				</p>
				<p>
				The worms following the behavior is implemented in much the same way as the balls in
				<span class="link">
					<router-link to="/project/cactris">Cactris</router-link>
				</span>
				. While balls move away from bodies, worms move toward them. In both cases, depth data is blurred, the derivative is taken, the resulting texture acts as a "force" accelerating worms and balls. This texture is visualized as a subtle ring of color surrounding players as they walk across the game. A gaussian blur can be likened to the force of gravity in 2D space or as if players were standing on a trampoline. The membrane bends down where a player stands. The derivative operation converts the fabric's elevation into direction, and the worms roll downhill until they settle in a "pit" where a player is standing. In the classic snake game, a collision kills the player. In <i>King of The Worms</i>,  this mechanic discourages two players from getting too close together and ensures that each remains in control of their own worm while simultaneously providing for challenging and competetive play.
				</p>
				<p>
				Early tests of my tracking algorithm proved conceptually promising, but marginal in pratice due to limited sensor framerate and GPU-heavy texture operations with the large blur introducing the lion's share of delay. I wrote an optimized blur algorithm which, running on Electric Playhouse's GPUs, allowing the game to keep up with up to ten players. Under ideal conditions, worms sucessfully chase down players running at a full sprint.
				</p>
				
				<p><i>King of The Worms</i> can be played at
						<span class="link">
						<a href="https://electricplayhouse.com/play">Electric Playhouse</a>.
						</span>
				</p>
		</div>

		<!-- <div class="imageContainer">
				<img src="@/assets/img/worms/worms_2.jpg" />
		</div> -->

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
