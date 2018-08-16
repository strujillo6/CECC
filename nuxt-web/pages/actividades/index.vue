<template>
   <v-container
    grid-list-md
    tag="section"
    class="ma-0 pa-0"
    fluid
  >
    <v-layout
      column
      fill-height
      class=" ma-0 pa-0"
    >
      <v-flex xl12
      class="pa-0"
      >
        <v-parallax
          dark
          src="https://picsum.photos/450/700/?random"
          class="hero"
        >
          <v-layout
            class=" ma-0 pa-0 hero__content"
          >
            <v-layout
              justify-center
              column
              class="ml-5 mb-5"
            >
              <h1 class="display-2 font-weight-thin mb-3">Actividades Culturales</h1>
              <h4 class="subheading">Comparte con otros lo que tu Localidad tiene para ti</h4>
            </v-layout>
          </v-layout>
        </v-parallax>
      </v-flex>

      <v-flex xl12
        fill-height
        class="pa-0"
      >

        <v-container

          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              xs12 sm6 md4 xl3
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="255px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>




      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Cardactivity from '~/components/cards/card-activity'
export default {
  components:{
    Cardactivity
  },
   data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex:4 },
        { title: 'Best airlines 2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Pre-fab homes 2', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex:4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 }
      ]
    })

}
</script>

<style>
.hero{
  position: relative;
  min-height: 40vh;
}
.hero__content{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(48, 63, 159, 0.5);
}
</style>

