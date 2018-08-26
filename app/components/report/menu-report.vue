<template>
    <v-toolbar
      dense
      floating
      class="search__map"
    >
      <!-- <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        label="No. de radicado"
      ></v-text-field> -->

    <v-autocomplete
      single-line
      v-model="model"
      :items="states"
      prepend-icon="search"
      class="autocomplete__search__report"
    >
        
    </v-autocomplete>


      <v-btn icon @click="geolocation">
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon @click="show">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-toolbar> 
</template>
<script>
export default {
    props:{
        icon:{
            type: String
        }
    },
    methods: {
        show () {
          this.$emit('show')
        },
        geolocation () {
          this.$emit('geolocation')
        }
    },
    data: () => ({
      model: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    })
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.search__map{
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  @media (min-width: 335px) {
    top: 8px;
  }
  @include breakpoint(phablet){
    left: 8px;
  }
}
.autocomplete__search__report{
  padding-top: 16px;
}
.v-autocomplete__content.v-menu__content{
  width: 210px!important;
}
</style>
