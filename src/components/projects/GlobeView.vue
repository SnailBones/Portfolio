<template>
  <div class="project">
    <h1>Mapbox Globe View</h1>
    <div class="info">
      <p>
        I started work at <i>Mapbox</i> in 2021, as an engineer on the Maps
        team. I worked on both Mapbox GL JS and Mapbox Native.
      </p>
      <p>
        One major project was implementing a 3D Globe view. I served as one of
        the two primary engineers leading implementation on Globe view.
      </p>
      <div class="imageContainer">
        <img src="@/assets/img/globe/native.png" />
      </div>
      <p>This project also came with interesting design challenges.</p>
      <p>
        I added support for HTML markers in globe, including a custom alignment
        to the horizon.
      </p>
      <div class="imageContainer">
        <div id="mapContainer" class="map"></div>
      </div>
      <p>In addition to adding support for markers on globe, I designed and implemented a new marker alignment option.</p>
      <p> On a flat map, aligning markers to either the viewport or map is straightforward. On globe, both of these options were necessary to support consistent behavior, but neither provided the intuitively 3d behavior that a user might expect from a globe. Therefore, I set about designing and building a new marker alignment option.</p>
      

      <p> 'horizon' marker alignment enables markers to elegantly fit into the 3d globe and enhance. As of my tenure at Mapbox, no other map suppliers offered a similar feature.</p>
      <!-- <div class="imageContainer">
        <video autoplay preload loop muted>
          <source :src="require('@/assets/img/globe/markerzoom.mov')" />
        </video>
      </div> -->

      <p>
        <span class="link">
          <a
            href="https://github.com/mapbox/mapbox-gl-js/pulls?q=is%3Apr+is%3Amerged+author%3ASnailBones"
            >Full list of my PRs to Mapbox GL JS</a
          >.
        </span>
      </p>
      <p>
        <span class="link">
          <a href="https://www.mapbox.com/blog/globe-view"
            >Official Globe view announcement</a
          >.
        </span>
      </p>
    </div>
    <h2 class="link">
      <router-link to="/">Home</router-link>
    </h2>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic25haWxib25lcyIsImEiOiJjamJvdGlueG41bzB5MzRxZnlsbTM4OGNpIn0.g4DLrr29EfW3otLvTfzt9Q";
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Everest",
        height: 8849,
      },
      geometry: {
        type: "Point",
        coordinates: [86.925278, 27.988056],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Denali",
        height: 6194,
      },
      geometry: {
        type: "Point",
        coordinates: [-151.0074, 63.0695],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Aconcagua",
        height: 6961,
      },
      geometry: {
        type: "Point",
        coordinates: [-70.0112, -32.653197],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Vinson Massif",
        height: 4892,
      },
      geometry: {
        type: "Point",
        coordinates: [-85.617147, -78.525483],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kilimanjaro",
        height: 5895,
      },
      geometry: {
        type: "Point",
        coordinates: [37.353333, -3.075833],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Elbrus",
        height: 5642,
      },
      geometry: {
        type: "Point",
        coordinates: [42.439167, 43.355],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Puncak Jaya",
        height: 4884,
      },
      geometry: {
        type: "Point",
        coordinates: [137.158333, -4.078889],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Mauna Kea",
        height: 4205,
      },
      geometry: {
        type: "Point",
        coordinates: [-155.468056, 19.820667],
      },
    },
  ],
};
export default {
  // data () {
  // 	return {}
  // },
  // ready () {
  // 	this.createMap()
  // },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap: function () {
      console.log("created map!");

      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/light-v11",
        center: [130, 35],
        zoom: 0.75,
      });

      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });

      for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.className = "marker";
        const size = marker.properties.height / 100;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        // Add a popup displayed on click for each marker
        const popup = new mapboxgl.Popup({ offset: 25 });
        popup.setHTML(
          `<h2>${marker.properties.name}</h2>${marker.properties.height}m<br/>`
        );

        // Add markers to the map.
        new mapboxgl.Marker({
          element: el,
          // Point markers toward the nearest horizon
          rotationAlignment: "horizon",
          offset: [0, -size / 2],
        })
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map);
      }

      // At low zooms, complete a revolution every two minutes.
      const secondsPerRevolution = 30;
      // Above zoom level 5, do not rotate.
      const maxSpinZoom = 5;
      // Rotate at intermediate speeds between zoom levels 3 and 5.
      const slowSpinZoom = 3;

      let userInteracting = false;
      let spinEnabled = true;

      function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.getCenter();
          center.lng -= distancePerSecond;
          // Smoothly animate the map over one second.
          // When this animation is complete, it calls a 'moveend' event.
          map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }
      // Pause spinning on interaction
      map.on("mousedown", () => {
        userInteracting = true;
      });

      // Restart spinning the globe when interaction is complete
      map.on("mouseup", () => {
        userInteracting = false;
        spinGlobe();
      });

      // These events account for cases where the mouse has moved
      // off the map, so 'mouseup' will not be fired.
      map.on("dragend", () => {
        userInteracting = false;
        spinGlobe();
      });
      map.on("pitchend", () => {
        userInteracting = false;
        spinGlobe();
      });
      map.on("rotateend", () => {
        userInteracting = false;
        spinGlobe();
      });

      // When animation is complete, start spinning if there is no ongoing interaction
      map.on("moveend", () => {
        spinGlobe();
      });
    },
  },
};
</script>
<style lang="scss">
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
.map {
  width: 100%;
  height: 80vh;
}
.marker {
  background-image: url("https://docs.mapbox.com/mapbox-gl-js/assets/pin.svg");
  background-size: cover;
  cursor: pointer;
}
</style>
