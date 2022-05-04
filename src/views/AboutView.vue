<template>
<div class="page">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/work">Work</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>

<h2>About</h2>
  <h4>Spark Ar</h4>
    I've been designing and developing Instagram/Facebook filter for 2 years now. I have filters with more than 1.5 billion of impressions.
  <h4>Web develpment</h4>
    In the beginning of the pandemic I was pretty much lost, in all senses, but like work of magic I discovered web development and fell in love instantly. It saved me in away so every project I work in I do it with passion and with my mind set on "always learning".
  <h4>Photography</h4>
    I studied film direction and production, and I take photos since I was young. I love to take film photos.

  <section>
    <h4>Skills</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Vanilla JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>SASS</li>
        <li>Vue.js</li>
        <li>Firebase</li>
      </ul>
      <ul>
        <li>Git</li>
        <li>Github</li>
        <li>Responsive Websites</li>
        <li>Web Accessibility</li>
      </ul>
      <ul>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Spark Ar</li>
      </ul>
  </section>
</div>
</template>
<style lang="scss" scoped>
*{
  ul{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 50vw;
    li{
    list-style: none;
    margin: 7px;
    &:before{
      display: inline-block;
      content: '';
      border-radius: 50%;
      height: .5rem;
      width: .55rem;
      margin-right: .4rem;
      background-color: var(--green);
      }
    }
  }
}
</style>