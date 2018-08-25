<template>
  <div class="container__map">
    <l-map  :zoom=16 :center="[locale.latitude, locale.longitude]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[locale.latitude, locale.longitude]">
        <l-popup>
          Contenido
          <v-list-tile-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-list-tile-avatar>
        </l-popup>
      </l-marker>
      <l-geo-json :geojson=bus.geojson ></l-geo-json>
      <l-control-scale position="bottomleft"></l-control-scale>
    </l-map>
  </div>
</template>
<script>
export default {
  data: () => ({
    bus: {
      geojson:{
        "type": "Feature",
        "properties": {
            "name": "Mi casa",
              "amenity": "Baseball Stadium",
              "popupContent": "This is where the Rockies play!"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [4.698112, -74.097459]
      }
    }}
  }),
  props:{
    locale:{
      type:Object
    },
    marker:{
      tupe: Object
    }
  }
}
</script>

<style>
.leaflet-control-zoom{
  top: 60px;
  left: 0;
}
.container__map{
  z-index: 1;
  height: 100%;
  width: 100%;
}
</style>
