<template>
  <div id="app">
    <!-- <Home id="content" /> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
// import TreeCanvas from "./components/TreeCanvas.vue";

export default {
  name: "app",
  components: {
    // Components here will ALWAYS be there.
    // Home,
    // TreeCanvas
  }
};

// TODO: bad place for CSS
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
