<template>
  <div class="home">
    <TreeCanvas id="tree-background" v-bind:gap="15" :width="10" :height="10" />
    <div class="underbar d-flex p-5 flex-wrap justify-content-around">
      <div id="header-container">
      </div>

    </div>
  </div>
</template>

<script>
import TreeCanvas from "@/components/TreeCanvas.vue";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    // Home,
    TreeCanvas
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  margin: 0;
  padding: 0;
  /* width: 100%; */
  /* height: 100%; */
  /* background: #012; */
  /* background: #000; */
  /* color: #669; */
  /* color: #db5f04; */
  text-align: center;
}

.underbar {
  width: 100%;
  /* height: 100%; */
  position: absolute;
  bottom: 0;
  /* bottom: 20%; */
  /* overflow-y: scroll; */
}

.signature {
  font-style: italic;
  font-weight: lighter;
  font-size: 1rem;
  box-shadow: 0 0 32px 32px #181a20;
  background: #181a20;
  /* display: inline-block; */
  border-radius: 12px;
  word-wrap: break-word;
  margin: 12px;
  display: inline-block;
  /* bottom: 64px; */
  /* position: absolute; */
  /* left: 0; */
}
.smallfade {
  /* box-shadow: 0 0 32px 32px #181a20; */
  background: #181a20;
  display: inline-block;
  z-index: 2;
  margin: 4px;
}

.smallfade:after {
  content: "";
  position: relative;
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  z-index: -1;
  /* box-shadow: -5px 5px 20px 5px #000; */
  box-shadow: 0 0 32px 32px #181a20;
}

.col {
  padding: 0;
}
.img-container {
  width: 32px;
}

.img-container img {
  width: 100%;
}

.container {
  max-width: 160px;
  /* bottom: 64px; */
  /* position: absolute; */
  /* position: relative; */
  /* right: 0; */
  margin-right: 64px;
}
</style>
