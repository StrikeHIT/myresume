<template>
  <div id="app">
    <Header/>
    <Home/>
    <!-- <router-view/> -->
    <Footer/>
    <div id="wave">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
      <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:#668eff;"></path>
      </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
