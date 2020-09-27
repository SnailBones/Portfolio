<template>
  <!-- <div class="main"> -->
  <div class="bottom">
    <!-- <h1 class="signature"> -->
    <p class = "greeting">Hi there! I'm Aidan.</p>
    <p>
      I'm a creative developer based in Albuquerque, NM.
    </p>
    <!-- I believe in interactive design as a tool for experience and understanding. -->
    <!-- In other words, I make things that inspire wonder and inform. -->
    <!-- I like to make things. What sort of things? These sorts: -->
    <!-- <ul>
            <li>
              <router-link to="/code">Interactive</router-link>things
            </li>
            <li>
              <router-link to="/pictures">Beautiful</router-link>things
            </li>
            <li>
              Things that tell a
              <router-link to="/words">story</router-link>
            </li>
    </ul>-->
    <p>I like to make things that help people learn while they're having fun.</p>
    <p>
      These things are often
      <span class="link">
        <a href="https://github.com/SnailBones">code</a>
      </span>, sometimes
      <span class="link">
        <a href="https://medium.com/@snailbones">words</a>
      </span>, and occasionally some
      <span class="link">
        <router-link to="/" v-scroll-to="'.gallery'">other stuff</router-link>
      </span>.
    </p>
    <p>
      I'm a big fan of
      <span class="link">
        <a href="https://www.inaturalist.org/observations/29496000">plants</a>
      </span>.
    </p>
    <br />
    <p class="mail">
      Want to
      <a href="mailto:aidhendrickson@gmail.com">make something together?</a>
      <!-- </h1> -->
    </p>
    <p></p>
  </div>
  <!-- <ul>
      <li class = "smallfade"><a>projects</a></li>
      <li class = "smallfade"><a>about</a></li>
  </ul>-->
  <!-- </div> -->
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
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

.main {
  position: relative;
  font-size: 4px;
}

/* .bottom {
  width: 100%;
  /* height: 100%; */
/* position: absolute; */
/* bottom: 0; */
/* bottom: 20%; */
/* overflow-y: scroll; */
/* }  */
.bottom {
  font-size: 36px;
}
.greeting {
  font-size: 60px;
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
