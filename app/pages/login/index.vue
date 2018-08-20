<template>
  <div class="login__container">
    <div class="form__container">
      <gform/>
    </div>
  </div>
</template>
<script>
import Gform from '~/components/forms/login'
export default {
    layout: 'login',
    components: {Gform}
}
</script>
<style>
.login__container{
  position: absolute;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form__container{
  min-width: 300px;
  max-width: 450px;
}
</style>
