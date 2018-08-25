<template>
    <v-toolbar
      dense
      floating
      class="search__map"
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon v-on:click="show">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-toolbar> 
</template>
<script>
export default {
    props:{
        icon:{
            type: String
        }
    },
    methods: {
        show: function () {
            this.$emit('show')
        }
    }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.search__map{
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  @media (min-width: 335px) {
    top: 8px;
  }
  @include breakpoint(phablet){
    left: 8px;
  }
}
</style>
