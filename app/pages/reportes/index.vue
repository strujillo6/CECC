<template>
  <section>
    <cecc-menu v-on:show="showMenu" :icon="iconMenu"/>
    <cecc-map :locale="location"/> 
    <aside class="menu__report" :class="{ showMenu: active }">
      <cecc-filter/>
      {{error}}
      <cecc-list/>
    </aside>
    <div class="form__report">
      <div class="form__report__content">
      </div> 
    </div>
    <v-btn
      flat
      dark
      absolute
      right
      class="btn__report "
      :class="{ btn__reportCenter: formActive }"
    >
      <v-icon>add </v-icon> 
      <span>Guardar</span>      
    </v-btn>
  </section>
</template>
<script>
import Menu from '~/components/report/menu-report'
import Map from '~/components/report/map-report'
import List from '~/components/report/list-report'
import Filter from '~/components/report/filter-report'
import { mapState } from 'vuex'
export default {
  components: {
    'cecc-map': Map,
    'cecc-menu': Menu,
    'cecc-list': List,
    'cecc-filter': Filter
  },
  data: ()=> ({
    active: true,
    formActive: false,
    iconMenu: 'menu'
  }),
  computed:
  {
    // location: function () {
    //   return this.$store.state.location.location
    //   // return this.$store.getters['location/location']
    // },
    // error: function () {
    //   return this.$store.getters['location/error']
    // },
    ...mapState({
      location: state => state.location.location,
      error: state => state.location.error
    })
  },
  methods: {
    showMenu: function (){
       if(this.active == true){
         this.active =false;
         this.iconMenu = 'close'
       }else{
         this.active =true;
         this.iconMenu = 'menu'
       }
    }
  },
  fetch ({store}) {
    if (navigator.geolocation) {
      // navigator.geolocation.watchPosition(showPosition, showError)
      return navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
      error.msg = 'la geolocalización NO está disponible en su Dispositivo'
      error.active = false
      console.log(error)
      store.commit('location/error', error)
    }
    function showPosition(position) {
      location.latitude=position.coords.latitude
      location.longitude= position.coords.longitude
      store.commit('location/updateLocation', location)
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          error.msg = "No hay permiso para Geolocalización."
          break;
        case error.POSITION_UNAVAILABLE:
          error.msg = "La información para tu localización actual, no está disponible."
          break;
        case error.TIMEOUT:
          error.msg = "Se ha tardado mucho en conocer la ubicación actual."
          break;
        case error.UNKNOWN_ERROR:
          error.msg = "A ocurrido un error inesperado."
          break;
      }
      error.active = false
      console.log(error)
      store.commit('location/error', error)
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.showMenu{
  transform: translateX(100%);
}
.menu__report{
  width: 100%;
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 1;
  overflow-y: auto;
  top: 0;
  padding-top: 64px;
  bottom: 0;
  background: white;
  transition: all .25s ease-in-out;
  @include breakpoint(phablet){
    padding-top: 0;
    width: 320px;
  }
}
.form__report{
  position: absolute;
  height: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &__content{
    display: flex;
    justify-content: center;
    align-items: center;
    height:80%;
    width: 800px;
    background-color: white;
    border-radius: 50%;
    transform: scale(1);
  }
}
.btn__report{
  transition: all .85s ease-in-out;
  border-radius: 28px;
  height: 56px;
  width: auto;
  min-width: 56px;
  bottom: 16px;
  margin-right: 16px;
  background-color: teal;
  z-index: 10;
  & span{
    width: 0;
    overflow: hidden;
    transition: all .85s ease-in-out;
  }
  &Center{
    transform: translateX( calc(-50vw + 87px));
    & span{
      width: 70px;
    }
  }
}
</style>
