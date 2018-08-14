<template>
  <div class="error">
    <h1  v-if="error.statusCode === 404">Pagina no Encontrada</h1>
    <h1  v-else>An error occurred</h1>
    <nuxt-link to="/">Inicio</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
  // layout: 'blog' 
}
</script>
<style >
.error{
  background: lightgreen;
}
</style>
