<template>
  <section >
    <div>
      <logo/>
      <h1 class="t1 text__secundary">
        Titulo 1
      </h1>
      <h2 class="t2">
        Titulo2
      </h2>
      <h3 class="t3">
        Titulo3
      </h3>
      <h4 class="t4">
        Titulo4
      </h4>
      <h5 class="t5">
        Titulo5
      </h5>
      <h6 class="t6">
        Titulo6
      </h6>
      <div class="caption">
        caption
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sint quo culpa architecto sed autem numquam aperiam harum ab tenetur debitis a qui porro, ducimus praesentium tempore quaerat iusto. Reiciendis.
      </p>
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
      <div class="links">
        <button target="_blank" class="btn" rel="noopener">documentation</button>
        <button target="_blank" class="btn-accent" rel="noopener">documentation</button>
        <button target="_blank" class="btn-flat" rel="noopener">documentation</button>
        <button target="_blank" class="btn-circle" rel="noopener">documentation</button>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey" rel="noopener">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  export default {
    components: {Logo},
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
