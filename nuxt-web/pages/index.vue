<template>
  <v-container
    grid-list-md
    tag="section"
  >
    <v-layout
      row
      wrap
      align-center
      justify-space-around
      fill-height
    >
      <v-flex xs11 sm7 >
        <img src="~/assets/img/team.svg" alt="team">
      </v-flex>
      <v-flex xs11 sm5 d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex tag="div">
            <v-card flat tag="article" class="transparent" dark>
              <v-card-title primary-title>
                <div>
                  <h1 class="display-1 mb-0">Seguridad</h1>
                </div>
              </v-card-title>
              <v-card-text >
                Sabias que, comprar o tener en tu poder un celular de
                dudosa procedencia puede afectar tu propia
                seguridad y la de las personas que amas.
              </v-card-text>
              <v-card-actions tag="footer">
                <v-btn color="deep-orange ">Saber Mas</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>

</style>
