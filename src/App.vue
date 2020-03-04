<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import tool from './tools'
export default {
  name: 'App',
  data(){
    return{
      r:{
        id:'1',
        title:'好地方'
      }
    }
  },
  methods:{

  },
  mounted(){
    console.log('这是什么？',tool.encode_version)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
