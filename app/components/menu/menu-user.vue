<template>
  <v-menu
    bottom
    left
    class="mx-2"
  >
        <v-avatar
          size="36px"
          slot="activator"

        >
          <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="avatar">
        </v-avatar>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{name}}</v-list-tile-title>
              <v-list-tile-sub-title>Trujillo del Valle</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
              >
                <v-icon>edit</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile >
            <v-list-tile-title>Configuración</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-icon >settings</v-icon>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-title>Ayuda</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-icon >help</v-icon>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
</template>
<script>
export default {
  data: () => ({
    name:"sergio"
  })
}
</script>
