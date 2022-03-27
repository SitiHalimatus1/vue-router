<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>



<template>
  <router-Link to="/dashboard">Dashboard</router-Link> -
  <router-Link to="/about">About</router-Link>
  <router-view />
  <input v-model="HOME" name="HOME">
    <button>Search</button>
</template>


<style>

button{
  display: inline;
  text-align: right;
  font-size: 0.5em;
  background-color: rgb(120, 141, 187);
  margin-top : 1em;
 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #0a0a0a;
  margin-top: 5px;
}
</style>
