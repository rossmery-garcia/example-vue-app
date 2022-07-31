<template>
<div class="container">
  <Navbar />
  <div class="page-content">
    <router-view></router-view>
  </div>
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from './components/Navbar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Navbar
    }
  })
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .page-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
