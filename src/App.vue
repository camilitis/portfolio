<template>
  <div class="grain">
    <section id="controls">
      <div id="theme__toggle" class="toggle">
        <input type="checkbox" name="theme" id="theme">
        <label for="theme"></label>
      </div>
    </section>
    <router-view/>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: 'Eu Alonira';
  src: local("Eu Alonira"), url('fonts/EuAlonira.ttf')
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

//themes
:root {
    --background: #EEE7E1;
    --font_color: #1A1919;
    --green: #a5a58d;
}
[data-theme="light"]{
    --background: #EEE7E1;
    --font_color: #1A1919;
}
[data-theme="dark"]{
    --background: #111111;
    --font_color: #EEE7E1;
}

*{
  background-color: var(--background);
  color: var(--font_color);
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: var(--background);
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--green);
    border:2px solid var(--background);
  }
}

a{
  text-decoration: none;
  color: var(--green);
  border-bottom: 2px solid transparent;
  transition: all 300ms;
  &:hover{
    color:var(--font_color);
    border-bottom: 2px solid var(--font_color);
  }
  &.router-link-active{
  opacity: .5;
  border-bottom: 1px solid var(--green);
  &:hover{
    color:var(--green);
    }
  }
}

//toggle
#controls{
  position: fixed;
  top: 2em;
  right: 3em;
}
.toggle{
  input[type="checkbox"]{
    width:0;
    height:0;
    visibility:hidden;
  }
  label{
    display:block;
    width:50px;
    height:25px;
    background-color: var(--background);
    border-radius:100px;
    position:relative;
    cursor:pointer;
    box-shadow:0 0 10px #8a8a8a;
    transition:.5s;
  }
  label::after{
    content:'';
    width:20px;
    height:20px;
    border-radius:70px;
    background-color: var(--green);
    position:absolute;
    top:2.5px;
    left:2.5px;
    transition:.5s;
  }
  input:checked+label:after{
    left:calc(100% - 5px);
    transform:translateX(-100%);
  }
  input:checked+label{
    background-color: var(--background);
  }
  label:active:after{
    width:60px;
  }
}

.page{
  margin: 0 10rem;
  font-size: 1.1rem;
  h2{
    font-family: "Eu Alonira";
    font-size: 6.5rem;
    margin-left: -6rem;
    }
    hr{
        margin: 30px;
    }
}

.grain {
  position: absolute;
  top: 0;
  left: 0;
  width: 99vw;
  z-index: 300;
  user-select: none;
  transition: all .5s ease-in-out;
  &:before {
    content: "";
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: 9999;
    position: fixed;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png);
    opacity: 0.10;
    pointer-events: none;
    -webkit-animation: noise 1s steps(2) infinite;
    animation: noise 1s steps(2) infinite;
  }
  @-webkit-keyframes noise {
    to { transform: translate3d(-7rem,0,0) }
  }
  @keyframes noise {
    0% { transform: translate3d(0,9rem,0) }
    10% { transform: translate3d(-1rem,-4rem,0) }
    20% { transform: translate3d(-8rem,2rem,0) }
    30% { transform: translate3d(9rem,-9rem,0) }
    40% { transform: translate3d(-2rem,7rem,0) }
    50% { transform: translate3d(-9rem,-4rem,0) }
    60% { transform: translate3d(2rem,6rem,0) }
    70% { transform: translate3d(7rem,-8rem,0) }
    80% { transform: translate3d(-9rem,1rem,0) }
    90% { transform: translate3d(6rem,-5rem,0) }
    to { transform: translate3d(-7rem,0,0) }
  }
}
</style>
