<template>
  <v-toolbar
    dark
    class="transparent"
    flat
  >
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="menu__toolbar--hidden">
      <cmenu/>
    </v-toolbar-items>
    <carduser/>
  </v-toolbar>
</template>
<script>
import Carduser from './menu-user'
import Cmenu from './menu-links'
export default {
  components: {Carduser, Cmenu},
  data: () =>({
    title: "CECC"
  }),
  props: {

  }
}
</script>
<style lang="scss">
@import '@/assets/css/main.scss';
.menu__toolbar--hidden{
  display: none;
  @include breakpoint(tablet){
    display: inline;
  }
}
</style>
