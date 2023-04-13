<template>

    <main>
        <router-link to="/">
            <div id="return">Retour à la home</div>
        </router-link>
        <div class="wrapper-image">
            <img :src="restaurant.image" alt="">
        </div>
        <p>Nom du restaurant : {{ restaurant.name }}</p>
        <p>Note du restaurant : {{ restaurant.note }}</p>
        <p>Temps de livraison : {{ restaurant.drive_time }}</p>
    </main>
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

    main{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        .wrapper-image{
            width: 100%;
            height: 50vh;
        }
    }
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