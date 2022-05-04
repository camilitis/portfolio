<template>
<div class="page">
  <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/work">Work</router-link>
  <router-link to="/contact">Contact</router-link>
</nav>

<h2>Work</h2>
<section class="project">
  <img style="width:600px"  class="img" src="@/assets/todolist.png">

  <span>
    <h4>To Do List</h4>
      <p>A task manager to organize work and life.</p>
      <h5>HTML, CSS & Vue.js - Firebase Authentication - Firebase realtime database</h5>
      <p><a href="https://firebase-project-alpha.vercel.app/">View it</a> | <a href="https://github.com/camilitis/firebase-project">View Github repo</a></p>
  </span>
</section>

<hr>

<section class="project">
  <img class="img" src="@/assets/wordle.gif">

  <span>
    <h4>Argentinian Wordle</h4>
      <p>Wordle clone based on argentinian culture.</p>
      <h5>HTML, CSS & Vue.js | LocalStorage</h5>
      <p><a href="https://wordleargento.vercel.app/">View it</a> | <a href="https://github.com/camilitis/wordle-argentino">View Github repo</a></p>
  </span>
</section>

<hr>

<section class="project">
  <img class="img" src="@/assets/deaca.gif">

  <span>
    <h4>De Acá Juego - DemoVersion</h4>
      <p>A really fun game to know your friends.</p>
      <h5>HTML, CSS & Vue.js</h5>
      <p><a href="https://juego-portfolio-a5j7mh1cb-camilitis.vercel.app/">View it</a> | <a href="https://github.com/camilitis/juego-portfolio">View Github repo</a></p>
  </span>
</section>
</div>
</template>
<style scoped lang="scss">
.project{
  display: grid;
  grid-template-areas:
    "gif about";
  align-self: center;
}
.img{
  grid-area: gif;
}
span{grid-area: about;}
</style>