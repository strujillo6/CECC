<template>
  <v-app class="indigo darken-2">
    <toolbar/>
    <nuxt/>
  </v-app>
</template>
<script>
import Toolbar from '~/components/header/toolbar.vue'
export default {
  components: {Toolbar}
}
</script>

