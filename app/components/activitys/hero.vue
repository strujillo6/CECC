<template>
    <header class="hero" :style="{backgroundImage:'url('+img+')'}">
        <div class="hero__container">
            <h1 class="hero__title display-2 font-weight-thin ">{{title}}</h1>
            <h2 class="hero__ subtitle subheading">{{subtitle}}</h2>
        </div>        
    </header>
</template>
<script>
export default {
    data:()=>({
        title: 'Actividades Culturales',
        subtitle:'Animate a compartir, socializar, aprender y divertirte.'
    }),
    props:{
        // subTitle,
        img:{
            type:String
        }
    }
}
</script>
<style lang="scss">
.hero{
    width: 100%;
    height: 40vh;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    &__container{
        width: 100%;
        height: 100%;
        background-color: rgba( #3F51B5, .65 );
        color: white;
        padding: 5%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }
}
</style>
