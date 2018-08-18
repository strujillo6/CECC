<template>
  <v-app class="indigo">
    <toolbar
      title="CECC"
    />
    <nuxt/>
    <div class="hidden-sm-and-up">
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      style="z-index:1;"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        to="actividades"
      >
        <span>Actvidades</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
        to="reportes"
      >
        <span>Reporte</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
        to="juegos"
      >
        <span>Juegos</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
    </div>
  </v-app>
</template>
<script>
import Toolbar from '~/components/header/toolbar.vue'
export default {
  components: {Toolbar},
  data () {
      return {
        bottomNav: 'recent'
      }
    }
}
</script>
