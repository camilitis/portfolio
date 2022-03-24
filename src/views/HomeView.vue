<template >
  <section>
    <span class="header">
      <h1>Camila Guerra</h1>
      <p>Web developer - Spark Ar filter creator</p>
      <h4>Based in Buenos Aires, Argentina</h4>
    </span>

    <nav class="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </section>
</template>
<style lang="scss" scoped>
section{
  height: 100vh;
  display: grid;
  grid-template-columns: 40vw 40vw;
  align-items: center;
  text-align: center;
  grid-template-rows: 1fr;
  grid-template-areas: 
    "header nav";
  overflow: hidden;
}

.nav{
  grid-area: nav;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 80px;
  a{
    font-family: "Eu Alonira";
    display: inline-block;
    color:var(--font_color);
    text-decoration: none;
    font-size: 8.5rem;
    line-height: 2em;
    border-bottom: none;

    transition: transform 400ms;
    transition: color 400ms;
    transition: padding 1.2s;
    &:hover{
      transform: skewX(-10deg);
      color: var(--green);
      padding-left: 2rem;
    }
  }
}
.header{
  grid-area: header;
  text-align: left;
  margin: auto;
  padding: 0;
  font-weight: 300;
  font-size: 1.2rem;
  h1{
    color: var(--green);
  }
}
</style>