<template>
  <div class="home--component">
    <div class="header">
        <img src="../imgs/1.jpg" alt="">
        <input v-model="user_search_restaurant" type="text" placeholder="A quel restaurant voulez-vous manger ?">
    </div>

    <div class="banner">

    </div>
    <h2 class="title">
        Nos resaturants
    </h2>
    <RestaurantRow v-for="(data, i) in dataRestaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
//Importation de la BDD
import db from '../db.js'
import { onMounted, ref, watch } from "vue";

import RestaurantRow from "../components/RestautrantRow.vue";

    export default {
        name:"HomeComponent",
        components:{
            RestaurantRow
        },

        setup(){
            class Restaurant{
                constructor (name, note, image, drive_time){
                    this.name = name;
                    this.note = note;
                    this.image = image;
                    this.drive_time = drive_time;
                }
            }

            let dataRestaurant = ref([]);
            let all_restaurant = [];

           let makeDataRestaurant = ()=>{
               
               let threeRestaurant = [];
            for(const restaurant of db){
                let new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);
                //make all restaurant array
                all_restaurant.push(new_restaurant)

                if (threeRestaurant.length === 2) {
                    threeRestaurant.push(new_restaurant);
                    dataRestaurant.value.push(threeRestaurant);
                    threeRestaurant = [];
                    
                }else{
                    threeRestaurant.push(new_restaurant);
                }
            }
            
           }

           //User search restaurant
           let user_search_restaurant = ref(''); 

           watch(user_search_restaurant, newValue=>{
            //console.log(newValue, all_restaurant);

            let regex = RegExp(newValue);

            let searchRestaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name));

            console.log(searchRestaurant);
            
           })
           onMounted(makeDataRestaurant);

           return{
            dataRestaurant,
            user_search_restaurant
           }
        }
}
</script>

<style lang="scss">
.home--component{
    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 200px;
        }

        input{
            background: #f6f6f6;
            border: none;
            outline: none;
            height: 60px;
            width: 400px;
            padding-left: 20px;
        }
    }

    .banner{
        height: 200px;
        width: 100%;
        background-image: url('../imgs/2.jpg');
        background-size: cover;
        background-position: center center;

    }
    .title{
            font-size: 2rem;
        }
}

</style>