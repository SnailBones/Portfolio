<template>
	<div class="project">
		<h1>Prism Escape</h1>
		<div class="imageContainer">
			<video autoplay preload loop muted>
					<source :src="require('@/assets/img/runner/runner.mp4')" type="video/mp4" />
			 </video>
		</div>
		<div class="info">
			<p><i>Prism Escape</i>, formerly known as <i>Space Runner</i>, is an endless racing game in played with real running. The player stands in a three-walled room and moves side to side to dodge virtual obstacles as the walls depict the player racing forward through the game world.
			</p>
			<p>
			As the player follows the pathway of boosts, they gain speed, while hitting a rectangular prism slows them down. The goal is to make it as far as possible before time runs out by collecting clock pickups. Difficulty increases as the player gets further, resulting in an hard-to-master game that appeals to competetive players vying for the high score.
			</p>
			<p>This was the first game at Electric Playhouse to depict an apparently 3D environment in Trompe-l'œil style. Given the existing graphics pipeline supported only 2D, I implemented the math to render perspective in both HTML canvas and WebGL shaders.
			</p>
			<p>At Electric Playhouse, it is important for games to be accessible to all ages and abilities. As one of the most physically demanding games at Electric Playhouse, Prism Escape provided a unique challenge in game design. In the first iteration, speed increased at a constant rate, and gameplay proceed until a fixed number of "lives" were lost in collisions. This proved easy for some players, but insurmountably difficult for others. Through experimentation and close observation, I discovered that adjusting the game's speed in response with the player's skill level&mdash;represented by how many boosts they collect&mdash;allows first-time players to easilly learn the game's mechanics without sacrificing the fun of the competetive showoffs. 
			</p>
			<p> Likewise, a "limited lives" mechanic proved frustruating. Unlike in traditional videogames, where a player's character has a clear location and bondaries, the choracter in Prism Escape is an area of any possible shape that the human body can form, and it is hard to meaningfully judge its location as it rapidly transforms. Grazing an arm or foot against a prism often triggered a loss, which felt understandably unfair. Given the soft nature of position, my solution was to replace the hard penalty with a soft penalty, a direct hit now slows the player down significantly, while a graze only slightly, and the lives are replaced with a clock. Losing, once sudden and frustruating, is now predictable and suspenseful. The slowdown mechanic, combined with sound effects, adds an illusion of tactile weight to the prisms.
			</p>
			<p>Early iterations of the game had only procedurally generated graphics. I worked with an artist to create a desert scene in the background.
			</p>
			<p><i>King of The Worms</i> can be played at
					<span class="link">
					<a href="https://electricplayhouse.com/play">Electric Playhouse</a>.
					</span>
			</p>
		</div>
		<h2 class="link">
			<router-link to="/">Back</router-link>
		</h2>
	</div>
</template>
<script>
export default {
	name: "ProjectMuseum",
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
