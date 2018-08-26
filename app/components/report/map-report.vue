<template>
  <div class="container__map">
    <l-map  :zoom=16 :center="[locale.latitude, locale.longitude]">
      <!-- <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer> -->
      <l-tile-layer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}" 
                    token='pk.eyJ1Ijoic3RydWppbGxvNiIsImEiOiJjamw0MXhtZnEwMmI3M3Jxa2hvNzl1ZnZyIn0.dXbn4cof6WclKi4oC94mcw'
                    :options="{
                      id: 'mapbox.streets', 
                      attribution:'Imagery © <a href=´https://www.mapbox.com/´>Mapbox</a>'
                      }"                                      
                    />
      <l-marker :lat-lng="[locale.latitude, locale.longitude]" :icon="icon">
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

import { 
  LMap, 
  LTileLayer, 
  LMarker, 
  LPopup, 
  LControlScale
  } from 'vue2-leaflet';

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  components:{
    LMap, 
    LTileLayer, 
    LMarker,
    LPopup,
    LControlScale
  },
  
  computed:{
    icon () {
      return L.icon({
        // iconUrl: "https://image.flaticon.com/icons/svg/143/143960.svg",
        iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
      })
    }
  },
  props:{
    locale:{
      type:Object
    },
    marker:{
      type: Object
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
.leaflet-touch .leaflet-bar a{
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
  border: none!important;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);
}
</style>