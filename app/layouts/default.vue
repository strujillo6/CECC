<template>
  <v-app class="indigo darken-2">
    <div >
      <top-toolbar class="z__index-10 menu-top"/>
    </div>
    <div class="content">
      <nuxt class="main__container"/>
    </div>
    <div>
       <bottom-toolbar class="z__index-10"/> 
    </div>
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
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.main__container{
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  width: 100%;
  height: 100%;
}

.application--wrap{
  display: flex;
  min-height: 100vh;
  height: 100vh;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}
.z__index-10{
  z-index: 10;
}
.content{
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
   width: 100%;
  padding-bottom: 56px;
  @include breakpoint(tablet){
    padding-bottom: 0;
  }
}
</style>
