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
        iconUrl: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFk%0D%0Ab2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246%0D%0AIDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9%0D%0AImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5v%0D%0AcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDM4IDk0IiBzdHls%0D%0AZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOCA5NDsiIHhtbDpzcGFjZT0icHJlc2VydmUi%0D%0APgo8cGF0aCBmaWxsPSIjRUJCQTE2IiA+CiAgPGFuaW1hdGUgCiAgICAgICAgICAgYXR0cmlidXRl%0D%0ATmFtZT0iZCIKICAgICAgICAgICBmcm9tPSJNMTksNzRDOC41LDc0LDAsNzguNSwwLDg0YzAsNS41%0D%0ALDguNSwxMCwxOSwxMHMxOS00LjUsMTktMTBDMzgsNzguNSwyOS41LDc0LDE5LDc0eiBNMTksOTAK%0D%0ACWMtNi44LDAtMTIuMy0yLjktMTIuMy02LjVTMTIuMiw3NywxOSw3N3MxMi4zLDIuOSwxMi4zLDYu%0D%0ANVMyNS44LDkwLDE5LDkwIgogICAgICAgICAgIHRvPSJNMTksNzcuN2MtNi42LDAtMTIsMi44LTEy%0D%0ALDYuM2MwLDMuNSw1LjQsNi4zLDEyLDYuM3MxMi0yLjgsMTItNi4zQzMxLDgwLjUsMjUuNiw3Ny43%0D%0ALDE5LDc3Ljd6IE0xOSw4Ny44CgljLTQuMywwLTcuOC0xLjgtNy44LTQuMWMwLTIuMywzLjUtNC4x%0D%0ALDcuOC00LjFzNy44LDEuOCw3LjgsNC4xQzI2LjgsODYsMjMuMyw4Ny44LDE5LDg3Ljh6IiAKICAg%0D%0AICAgICAgICBkdXI9Ii45cyIKICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKICAg%0D%0AICAgICAgICAvPgogIDwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUJCQTE2Ij4KICAgIDxhbmltYXRl%0D%0AIAogICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9ImQiCiAgICAgICAgICAgZnJvbT0iTTMyLjQsNi44%0D%0AYy03LjQtOS0xOS40LTktMjYuOSwwYy02LjcsOC4xLTcuNCwyMy40LTEuOCwzMi42TDE5LDY2bDE1%0D%0ALjItMjYuN0MzOS45LDMwLjIsMzkuMSwxNC45LDMyLjQsNi44egoJIE0xOSwzNWMtNi42LDAtMTIt%0D%0ANS40LTEyLTEyYzAtNi42LDUuNC0xMiwxMi0xMnMxMiw1LjQsMTIsMTJDMzEsMjkuNiwyNS42LDM1%0D%0ALDE5LDM1eiIKICAgICAgICAgICB0bz0iTTMxLjgsMjEuNGMtNy4xLTguNi0xOC42LTguNi0yNS42%0D%0ALDBjLTYuNCw3LjctNy4xLDIyLjMtMS43LDMxLjFMMTksNzhsMTQuNS0yNS40CglDMzguOSw0My44%0D%0ALDM4LjIsMjkuMiwzMS44LDIxLjR6IE0xOSw0OC40Yy00LjUsMC04LjItMy43LTguMi04LjJjMC00%0D%0ALjUsMy43LTguMiw4LjItOC4yczguMiwzLjcsOC4yLDguMgoJQzI3LjIsNDQuNywyMy41LDQ4LjQs%0D%0AMTksNDguNHoiIAogICAgICAgICAgIGR1cj0iLjZzIgogICAgICAgICAgIHJlcGVhdENvdW50PSJp%0D%0AbmRlZmluaXRlIgogICAgICAgICAgIC8+CiAgPC9wYXRoPgo8L3N2Zz4K",
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