<template>
  <form class="form" >
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <!-- <v-text-field
      v-validate="'required|max:10'"
      v-model="name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field> -->
    <v-text-field
      v-validate="'required'"
      v-model="password"
      :error-messages="errors.collect('password')"
      label="Contraseña"
      data-vv-name="password"
      required
    >
    </v-text-field>
    <!-- <v-btn flat @click="submit">Registrarse</v-btn> -->
    <v-btn class="teal" @click="clear">{{textSubmit}}</v-btn>
    <div class="actions">
      <nuxt-link to="/login/registro"  class="pa-3">Registrarse</nuxt-link>
      <nuxt-link to="/" class="pa-3">Recuperar contraseña</nuxt-link>
    </div>
  </form>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  Vue.use(VeeValidate)
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      password: '',
      email: '',
      textSubmit: 'Siguiente',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
      dictionary: {
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>
<style>
.actions{
  margin-top: 20px;
  text-align: center;
}
</style>
