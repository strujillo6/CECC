<template>
    <v-card  >
        <v-card-media
            src="https://picsum.photos/450/700/?random"
            height="200px"
            class="aling-end"
           
        >
            <v-card-title primary-title class=" title__event">
                    <div class="headline ">Titulo</div>
                    <div>Lugar</div>
            </v-card-title>                
        </v-card-media>
        <v-card-actions>
            <h3 class="pl-2">20-08-2018</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>share</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        type:Object
    }
}
</script>
<style>
.aling-end{
    align-items: flex-end;
}
.title__event{
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 100%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    flex-direction: column;
    align-items: flex-start;
    color: white;
}
</style>
