<template>
  <v-app class="teal">
    <toolbar
      title="CECC"
    />
    <nuxt/>
  </v-app>
</template>
<script>
import Toolbar from '~/components/header/toolbar.vue'
export default {
  components: {Toolbar}
}
</script>
