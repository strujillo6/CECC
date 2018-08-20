<template>
  <nav class="container__menu">
    <v-btn
      v-for="(item, index) in items" :key="index"
      :color=color
      flat
      value="recent"
      :to=item.link
    >
      <span>{{item.title}}</span>
      <v-icon class="pl-1 pr-1">{{item.icon}}</v-icon>
    </v-btn>
  </nav>
</template>
<script>
export default {
  data: ()=>({
    color:'',
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
  })
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
