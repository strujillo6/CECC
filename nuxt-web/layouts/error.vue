<template>
  <v-container fluid>
    <v-layout flex justify-center>
    <h1  v-if="error.statusCode === 404">Pagina no Encontrada</h1>
    <h1  v-else>An error occurred</h1>
    <nuxt-link to="/">Inicio</nuxt-link>
  </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['error']
}
</script>
