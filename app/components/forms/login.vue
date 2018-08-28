<template>
  <form class="form" >
    <div class="logo">
      <img src="../../assets/img/logo.svg" alt="Logo de Cultura Etica y Convivencia Ciudadana">
    </div>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required'"
      v-model="password"
      :error-messages="errors.collect('password')"
      label="Contraseña"
      data-vv-name="password"
      required
      type='password'
    >
    </v-text-field>
    <!-- <v-btn flat @click="submit">Registrarse</v-btn> -->
    <v-btn class="indigo" @click="login()" dark>{{textSubmit}}</v-btn>
    <!-- <v-btn class="indigo" @click="$router.push('/')" dark>{{textSubmit}}</v-btn> -->
    <div class="actions">
      <nuxt-link to=""  class="pa-3">Registrarse</nuxt-link>
      <nuxt-link to="" class="pa-3">Recuperar contraseña</nuxt-link>
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
          email: {
            required: () => 'El campo de E-mail es requerido',
            email: 'Deber ser un E-mail valido como: example@test.co'
            // custom messages
          },
          password: {
            required: () => 'El campo de Contraseña es Obligatorio'
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
      login (redirect){
        this.$router.push('/')
      }
    }
  }
</script>
<style>
.actions{
  margin-top: 20px;
  text-align: center;
}
.logo{
  padding-bottom: 20px;
}
</style>
