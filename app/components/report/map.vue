<template>
  <div class="container__map">
    <l-map  :zoom=16 :center="[5.0377142, -73.9976215]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[5.0377142, -73.9976215]">
        <l-popup>
          Contenido
          <v-list-tile-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-list-tile-avatar>
        </l-popup>
      </l-marker>
      <l-control-scale position="bottomleft"></l-control-scale>
    </l-map>
  </div>
</template>
<script>
export default {
}
</script>

<style>
.container__map{
  z-index: 1;
  height: 300px;
  width: 300px;
}
</style>
