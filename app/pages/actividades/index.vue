<template>
  <section>
    <cecc-hero img='https://picsum.photos/450/700/?random'/>
    <section class="card__container">
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
      <cecc-event/>
    </section>
  </section>
</template>
<script>
import Hero from '~/components/activitys/hero'
import Card from '~/components/activitys/card-event'
export default {
  components: {
    'cecc-hero': Hero,
    'cecc-event': Card
  }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.card__container{
  width: 100%;
  max-width: em(1120);
  height: auto;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(290px, 1fr));
  grid-gap: 1em;
  padding-bottom: em(74);
  @include breakpoint(tablet){
    padding-bottom: em(30);
  }
}
</style>

