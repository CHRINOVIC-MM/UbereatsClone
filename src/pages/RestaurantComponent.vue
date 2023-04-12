<template>

    <router-link to="/">
        <div id="return">Retour à la home</div>
    </router-link>
    <img :src="restaurant.image" alt="">
    <p>Nom du restaurant : {{ restaurant.name }}</p>
    <p>Note du restaurant : {{ restaurant.note }}</p>
    <p>Temps de livraison : {{ restaurant.drive_time }}</p>
</template>

<script>
//import { onMounted } from 'vue'
import db from '../db.js'
import { useRoute } from 'vue-router'

export default {
    name: 'RestaurantComponent',
    setup(){

        const route = useRoute()

        const restaurant = db.find((restaurant)=> restaurant.name === route.params.name);


        return {
            restaurant
        }
    }
}
</script>

<style scoped lang="scss">
    a{
        text-decoration: none;
    }
    #return{
        margin-bottom: 25px 45px;
        font-weight: 400;
        color: gray;
        cursor: pointer;
        transition: all ease-in-out .3s;

        &:hover{
            font-weight: 900;
        }
    }
</style>