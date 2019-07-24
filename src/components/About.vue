<template>
  <div class="home">
    <div class="underbar d-flex p-5 flex-wrap justify-content-around">
      <div id="main">
        <!-- <h1 class="signature"> -->
        I'm a creative developer based in Albuquerque, NM.
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
        <p>
          I write
          <router-link to="https://github.com/SnailBones">code</router-link>. I write
          <a href="https://medium.com/@snailbones">words</a>. I make
          <router-link to="/">other stuff</router-link>.
        </p>
        <p>
          I also really like
          <a href="https://www.inaturalist.org/people/ailanthis">plants</a>.
        </p>
        <p>
          <a href="mailto:aidhendrickson@gmail.com">Let's make something together!</a>
          <!-- </h1> -->
        </p>
        <p></p>
      </div>
      <!-- <ul>
      <li class = "smallfade"><a>projects</a></li>
      <li class = "smallfade"><a>about</a></li>
      </ul>-->
      <div class="container">
        <div class="d-flex justify-content-around">
          <div>
            <a class="smallfade img-container" href="https://github.com/SnailBones">
              <img src="@/assets/link-icons/GitHub-Mark-Light-64px.png" />
            </a>
          </div>
          <div>
            <a class="smallfade img-container" href="https://codepen.io/snailbones">
              <img src="@/assets/link-icons/codepenlogo.png" />
            </a>
          </div>
          <!-- <div>
            <a
              class="smallfade img-container"
              href="https://www.linkedin.com/in/a-hendrickson"
            >
              <img width="64px" src="@/assets/link-icons/linkedin.png" />
            </a>
          </div>-->
          <div>
            <a class="smallfade img-container" href="https://medium.com/@snailbones">
              <img width="64px" src="@/assets/link-icons/medium.png" />
            </a>
          </div>
          <div>
            <a class="smallfade img-container" href="https://ailanthus.itch.io/">
              <img width="64px" src="@/assets/link-icons/itch.png" />
            </a>
          </div>
          <!-- <div class="col">
          itch
        </div>
        <div class="col-sm">
          inaturalist
          </div>-->
        </div>
      </div>
    </div>
  </div>
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
