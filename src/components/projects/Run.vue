<template>
	<div class="project">
		<h1>Prism Escape</h1>
		<div class="imageContainer">
			<video autoplay preload loop muted>
					<source :src="require('@/assets/img/runner/runner.mp4')" type="video/mp4" />
			 </video>
		</div>
		<div class="info">
			<p>In September 2019, I started work at <i>Electric Playhouse</i>, an entertainment company building games that merge the digital and physical world, powered by sensors and projectors. One of my first tasks was expanding the company’s selection of games for two and three-walled “pods.” <i>Prism Escape</i>&mdash;also known as Space Runner&mdash;was the result, my first released game and the first game at Electric Playhouse displaying a virtual 3D environment.
			</p>
			<p>
			Accessibility is critical at Electric Playhouse, which seeks to create games for everyone, not just traditional "gamers." Smartphone games and classic video games are the most broadly recognized games, and I drew from their tropes to build a design language that could be broadly recognized, giving players familiar cues to navigate a novel interface. In the case of Prism Escape, I adapted the popular endless runner and racing genres.
			</p>
			<p>
			In endless runner and racing games, the players guides a character around obstacles as far or as fast as they can, using a joystick, arrow keys or swipes. In a game with sensor data as input, there is no character as such. The closest that we have is a depth mask, a texture created from sensor data representing the player’s body.This isn’t one discrete position, it’s a large array of positions where each one is either a 1--something here--or a 0--empty. To detect a collision with a shape, we need to count the pixels where the depth mask intersects the shape. Unfortunately, individually counting pixels is far too slow in practice.
			</p>
			<p>
			The game logic runs in JavaScript on the CPU, and depth is manipulated in GLSL shaders--harnessing GPU parallelization to perform intense image processing operations that would otherwise bring the computer to a halt. Despite the essential performance improvements of shaders, reading data from the GPU to the CPU is a slow operation and critical bottleneck. Previous games at Electric Playhouse featured circular “colliders”, implemented through a Euclidean distance transform and sampling at a single point. But for Prism Escape, I needed rectangular colliders of different sizes. And for direct hits to have a larger effect than grazers, the colliders required unprecedented precision. <i>How can I accurately judge the degree of collision without sacrificing the game's performance?</i>
			</p>
			<p>
				Likewise, a "limited lives" mechanic in early drafts proved frustrating. Unlike traditional video games where a player's character has a clear location and boundaries, the character in Prism Escape is an area of any possible shape that the human body&mdash;or bodies&mdash; can form, and it is hard to meaningfully judge its location as it rapidly transforms. Grazing an arm or foot against a prism often triggered a loss, which felt understandably unfair. Given the soft nature of position data, my solution was to replace the hard penalty with a soft penalty. A direct hit now slows the player down significantly, while a graze only slightly, and the lives are replaced with a clock. Losing is percedved as predictable and fair, while the clock also heightens suspense. The slowdown mechanic combines with sound effects to add an illusion of tactile weight to the prisms.
			</p>
			<p>
				I developed a custom shader solution to this problem, taking advantage of the fact that GPU hardware is optimized for resampling textures. My algorithm cuts out the depth mask in the area of the prism, then repeatedly resamples this texture onto smaller textures. Hardware optimization makes this a fast operation with no loss of precision. Once the data has been written on to a texture containing only a single pixel, the CPU reads this pixel, its value representing the average degree of collision across the entire rectangle. This optimization allows for extremely accurate collision detection with minimal latency and a framerate of 60 fps.

			</p>
			<p>
				An interesting technical challenge was creating the game’s Trompe-l'œil 3D effect in both HTML canvas and GLSL shaders. The company’s framework at the time did not support external libraries such as Three.js, so I had to code one-point perspective from scratch. Particularly challenging was the cast shadow seen at the base of the player’s depth. I later rewrote my 3D framework and collision system as modules within a reusable library, allowing for quick implementation by my team to build performant and feature-rich games.    
			</p>
			<div class="imageContainer">
        		<img src="@/assets/img/runner/goodsmallest.jpg" />
      		</div>
			<p>
				This project also came with interesting design challenges.
			</p>
			<p>
				At Electric Playhousel, it is critical for games to be accessible to all ages and abilities. As one of the most physically demanding games, Prism Escape provided a unique challenge in game design, so I implemented several equalizing features through experimentation and close observation. I broke away from a constantly increasing speed in initial drafts to have speed respond to the number of boosts the player collects, which correlates to skill. Overhead prisms provide a greater challenge to otherwise advantaged taller players. In effect, <i>the game matches difficulty to the player’s skill level</i> , creating a fun experience for first-time players and competitive “pinball wizards” alike.
			</p>
			<p>
				Likewise, a "limited lives" mechanic in early drafts proved frustrating. Given the soft nature of the player’s position, my solution was to replace the hard penalty with a soft penalty. A direct hit now slows the player down significantly, while a graze only slightly, and a ticking down clock determines the end of the game, heightening suspense and adding a sense of predictability--and perceived fairness--to the end of the game.. The slowdown mechanic combines with shader effects and sound effects by sound designer Chris Alires to add an illusion of tactile weight to the prisms.
			</p>
			<p> While best played by one player at a time, Prism Escape has proven to be something of a spectator sport, drawing crowds and cameras. The physical agility encouraged, the suspense, flashy effects, and the parallax New Mexico-inspired scenery by artist Thomas Herrara make it almost as fun to watch as it is to play. Besides, you'll need to catch your breath after giving it a go!
			</p>
			<p><i>Prism Escape</i> can be played at
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
