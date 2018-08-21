<template>
  <v-app class="indigo darken-2">
    <toolbar/>
     <nuxt/>
    <btoolbar/>
  </v-app>
</template>
<script>
import Toolbar from '~/components/menu/toolbar.vue'
import Btoolbar from '~/components/menu/menu-bottom.vue'
export default {
  components: {Toolbar, Btoolbar}
}
</script>
