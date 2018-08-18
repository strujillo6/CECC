<template>
  <v-container
    tag="section"
    class="container__report  pa-0"
    fluid
    row
  >
    <v-flex tag="section" id="map-wrap" class="map pa-0">

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
    </v-flex>

    <v-flex tag="aside" class="list__report">

      <v-expansion-panel>
    <v-expansion-panel-content

    >
      <div slot="header">Filtrar por tipo</div>
      <v-card>
        <v-list two-line>
          <v-list-tile
          >

            <v-list-tile-content>
              <v-list-tile-title>Peticiones</v-list-tile-title>

            </v-list-tile-content>

            <v-list-tile-action>
              <v-checkbox
              ></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
          >

            <v-list-tile-content>
              <v-list-tile-title>Quejas</v-list-tile-title>

            </v-list-tile-content>

            <v-list-tile-action>
              <v-checkbox
              ></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
          >

            <v-list-tile-content>
              <v-list-tile-title>Reclamos</v-list-tile-title>

            </v-list-tile-content>

            <v-list-tile-action>
              <v-checkbox
              ></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
          </v-list>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>




       <v-list two-line>
         <v-divider></v-divider>
          <v-card v-for="(item, index) in items" :key="index">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card>
        </v-list>
    </v-flex>
    <v-btn
              absolute
              dark
              fab
              right
              color="pink"
              style=" z-index: 1000;"
              class="btn__report"
            >
              <v-icon>add</v-icon>
            </v-btn>
  </v-container>

</template>
<script>
export default {
  data: () => ({
    items: [
        { header: 'Ultimos Reportes' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },

      ]
  })
}

</script>
<style>
.container__report{
  position: relative;
  z-index: 1;
}
.map{
  height: 100%;
}
.list__report{
  background-color: white;
  width: 320px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 1000;
}
@media (min-width: 1025px) {
  .map{
    width: calc(100% - 320px);
  }
}
.btn__report{
  bottom: 68px;
  right: 26px;
}
@media (min-width: 601px) {
  .btn__report{
    bottom: 8px;
  }
}
#create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>
