<template>
  <div class="Header">
    <div id="nav" class="d-flex justify-content-center align-items-center p-4">
      <router-link class="mx-3" to="/">Gallery</router-link> 
      <router-link class="mx-3" to="/about">About</router-link> 
      <h2 class="mx-4">The Fake Store</h2>
      <router-link class="mx-3" to="/cart">Cart</router-link> 
      <router-link class="mx-3" to="/playground">Playground</router-link>
    </div>
  </div>
</template>

 
<style scoped>
    .Header{
        background-color: #eee;
    }
</style>