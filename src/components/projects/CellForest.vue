<template>
	<div class="project">
		<h1>A Tree Falls: The Musical</h1>
		<h3>Interactive ecology sim with a data-driven soundtrack</h3>
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
					:style="{ backgroundImage: 'url(' + image.href + ')' }"
				/>
				<!-- </div> -->
			</div>
		</div>
		<!-- <img src="@/assets/img/painless/poster.png" width=400px /> -->
		<!-- <div class="imageContainer">
		<img src="@/assets/img/museum/models/labtop.jpg" />
		</div>-->
		<!-- <div class="imageContainer">
		<img src="@/assets/img/museum/models/labside.jpg" />
	</div>
	<div class="imageContainer">
		<img src="@/assets/img/museum/models/mini.jpg" />
	</div>
	<div class="imageContainer">
		<img src="@/assets/img/museum/models/big.jpg" />
	</div>
	<div class="imageContainer">
		<img src="@/assets/img/museum/models/close.jpg" />
		</div>-->
		<div class="info">
			<div class="imageContainer">
				<!-- <img src="@/assets/img/ocean/bullets.mp4" /> -->
				<video autoplay preload loop muted>
					<source :src="require('@/assets/img/forest/forest.webm')" type="video/mp4" />
				</video>
			</div>
			<p>Inspired by John Conway's Game of Life and the writings of Bruno Latour, <i>A Tree Falls</i> is an exploratory game that offers the experience of direct interaction with an ecosystem, compressing space, time, and power. The ecosystem is a northern forest dominated by two species of trees. In undisturbed stands, spruce dominates, but when trees are destroyed by fire (created with the mouse in this simulation), birch quickly colonizes the disturbed area. Too much or too little disturbance and one species is extirpated, but in moderation they coexist.</p>
			<p>Tree survival, growth, and reproduction depend on available water in the tree's cell. Water travels between cells through convection, simulating competition between the trees' roots, and giving a competetive advantage to the more drought-tolerant spruce. Water flows downhill, creating microclimates at different elevations and reshaping the terrain through erosion and deposition.</p>
			<p>
				The game also serves as an experiment in conveying information through sound.
				Continuously playing sounds represent trees in different processes (growing, dying, burning, and sprouting). Pitch and timbre are determined by the number of each species in each process. Quantized to different scales to sound pleasant to the human ear, the sounds of the forest produce a symphony of ever-changing states. Repeating patterns in the music correspond to cycles in the simulation.
			</p>
			<!-- <p>As an experimental feature, a settlement can be created with a click. Settlements consume water for agriculture, but they also require trees for construction in order to spread. As a result, they tend to create farm-like cells where birch trees live out an expediated lifecycle.</p> -->
			<p>
				The interface is in the open source
				<span class="link">
					<a href="https://godotengine.org/">Godot Engine</a>
				</span>
				and the simulation in C++.
			</p>
			<p>
				<i>A Tree Falls</i> began as a project for a course in Computational Ecology at UNM. 
			</p>
			<p>
				<span class="link">
					<a href="https://ailanthus.itch.io/forest">Download game</a>
				</span>
			</p>
			<p></p>
			<p>
				<span class="link">
					<a href="https://github.com/SnailBones/CellForest">Source code</a>
				</span>
			</p>
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
