<template>
	<div class="project">
		<h1>Prism Escape</h1>
		<div class="imageContainer">
			<video autoplay preload loop muted>
					<source :src="require('@/assets/img/runner/runner.mp4')" type="video/mp4" />
			 </video>
		</div>
		<div class="info">
			<p><i>Prism Escape</i>, formerly known as <i>Space Runner</i>, is an endless racing game played with physical motion. The player stands in a three-walled room and moves side to side to dodge virtual obstacles as the walls depict the player racing forward through the game world.
			</p>
			<p>
			As the player follows the pathway of boosts, they gain speed; hitting a rectangular prism slows them down. The goal is to make it as far as possible before time runs out, gaining bonus time by collecting clock pickups. Difficulty increases as the player gets further, resulting in an easy-to-play but hard-to-master game that appeals to competetive players vying for the high score.
			</p>
			<p>This was the first game at Electric Playhouse to depict an apparently 3D environment. The existing graphics pipeline supported only 2D, so I created the game's Trompe-l'œil effect by implementing the math to render perspective in both HTML canvas and GLSL shaders.
			</p>
			<p>At Electric Playhouse, it is important for games to be accessible to all ages and abilities. As one of the facility's most physically demanding games, Prism Escape provided a unique challenge in game design. In my first draft of the game, speed increased at a constant rate. This created a constant difficulty that was easy for some players, but insurmountably challenging for others. Through experimentation and close observation, I discovered that adjusting the game's speed in response with the player's skill level&mdash;represented by how many boosts they collect&mdash;allows first-time players to easily learn the game's mechanics without sacrificing the fun of competetive showoffs. 
			</p>
			<p> Likewise, a "limited lives" mechanic in early drafts proved frustruating. Unlike in traditional videogames, where a player's character has a clear location and boundaries, the character in Prism Escape is an area of any possible shape that the human body&mdash;or bodies&mdash; can form, and it is hard to meaningfully judge its location as it rapidly transforms. Grazing an arm or foot against a prism often triggered a loss, which felt understandably unfair. Given the soft nature of position data, my solution was to replace the hard penalty with a soft penalty. A direct hit now slows the player down significantly, while a graze only slightly, and the lives are replaced with a clock. Losing is percieved as predictable and fair, while the clock also heightens suspense. The slowdown mechanic combines with sound effects to add an illusion of tactile weight to the prisms.
			</p>
			<p> The need to tell the difference between large impacts and grazes introduced a technical challenge: How could I accurately judge the degree of collision without sacrificing the game's performance? Individually checking pixels for collision introduced far too much latency, so I developed a custom shader algorithm to perform this calculation more efficiently on the GPU. Sensor data is rendered to a texture at the location of a collision, which is repeatedly downsampled onto smaller textures. GPU optimization makes this a highly efficient operation with no loss of precision. Once the data has been written on to a texture with dimensions of one by one, the CPU reads the texture, returning the degree of collision across the total rectangle from the value of a single pixel. This allows the game to operate with minimal latency and a framerate of 60 fps.
			</p>
			<p>Early iterations of the game had only procedurally generated graphics. Once gameplay was complete, I worked with artist Thomas Herrara to create a desert scene in the background.
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
