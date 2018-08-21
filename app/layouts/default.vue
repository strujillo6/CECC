<template>
  <v-app class="indigo darken-2">
    <top-toolbar/>
     <nuxt/>
    <bottom-toolbar/>
  </v-app>
</template>
<script>
import Toolbar from '~/components/menu/toolbar.vue'
import Btoolbar from '~/components/menu/menu-bottom.vue'
export default {
  components: {
    'top-toolbar':    Toolbar, 
    'bottom-toolbar': Btoolbar
    }
}
</script>
