<template>
  <v-toolbar
    fixed
    dark
    class="transparent"
    flat
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat to="actividades">Actividades</v-btn>
      <v-btn flat to="reportes">Reportes</v-btn>
      <v-btn flat to="juegos">Juegos</v-btn>
    </v-toolbar-items>
    <caruser/>
  </v-toolbar>
</template>
<script>
import Caruser from './card-user'
export default {
  components: {Caruser},
  data: () =>({
    title: "CECC"
  }),
  props: {

  }
}
</script>
