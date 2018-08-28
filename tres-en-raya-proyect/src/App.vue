<template>
  <div id="app">
    <div class="headerGrid">
      <div>
        <a href="https://vuejs.org" target="_blank"><img src="./assets/logo.png" class="logo"></a>  
      </div>
      <div>
        <h1>Juego del tres en raya</h1>
      </div>
      <div>
        <a href="https://mantecorso.github.io/LuisJuradoQ/" target="_blank"><img src="./assets/L.png" class="logo" alt=""></a>
      </div>
    </div>  
     
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>Tonto el que lo lea</h3>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'        
      }
    }

  }

</script>

<style>
  #app {
   
    font-family: 'Griffy', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

.red {
  background-color: palevioletred;
  border-radius: 8px;
}

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #2f9c6b;
  }

  .headerGrid {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 2fr 5fr 2fr;
    text-align: center;
  }

  .logo {
    height: 80px;
    width: 80px;
  }

</style>
