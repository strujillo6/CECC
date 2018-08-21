<template>
  <nav class="container__menu">
    <v-btn
      v-for="(item, index) in items" :key="index"
      flat
      value="recent"
      :color=color
      :to=item.link
    >
      <span>{{item.title}} </span>
      <v-icon class="pl-1 pr-1">{{item.icon}}</v-icon>
    </v-btn>
  </nav>
</template>
<script>
export default {
  data: ()=>({
    items:[
      {
        title: 'Actividades',
        link: 'actividades',
        icon:'directions_bike'
      },
      {
        title: 'Reportes',
        link: 'reportes',
        icon: 'report'
      },
      {
        title: 'Juegos',
        link: 'juegos',
        icon: 'games'
      }
    ]
  }),
  props:{
    color:{
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.container__menu{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
</style>
