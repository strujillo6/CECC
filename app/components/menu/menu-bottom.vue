<template>
  <v-bottom-nav
    :value="true"
    absolute
    class="menu__bottom--hidden"
  >
    <cmenu color="teal"/>
  </v-bottom-nav>
</template>
<script>
import Cmenu from './menu-links'
export default {
  components: {Cmenu}
}
</script>

<style lang="scss">
@import '@/assets/css/main.scss';
.menu__bottom--hidden{
  @include breakpoint(tablet){
    display: none;
  }
}
</style>
