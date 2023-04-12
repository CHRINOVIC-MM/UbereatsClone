<template>
  <div class="home--component">
    <div class="header">
        <img src="../imgs/1.jpg" alt="">
        <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text" placeholder="A quel restaurant voulez-vous manger ?">
            <div class="search">
                <router-link v-for="(restaurant, i) in search_restaurant" :key="i" :to="{name: 'Restaurant', params: {name: restaurant.name}}">
                    <div  class="container--restaurant--search">
                        <div class="wrapper--img">
                            <img :src="restaurant.image" alt="">
                        </div>

                        <h2>{{ restaurant.name }}</h2>
                    </div>
                </router-link>
            </div>
        </div>
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

           let search_restaurant = ref([]);

           watch(user_search_restaurant, newValue=>{
            //console.log(newValue, all_restaurant);

            let regex = RegExp(newValue.toLowerCase());

            let newsearchRestaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()));


            newValue == 0 ? search_restaurant.value = [] : search_restaurant.value = newsearchRestaurant; 
            //console.log(searchRestaurant);
            
           })
           onMounted(makeDataRestaurant);

           return{
            dataRestaurant,
            user_search_restaurant,
            search_restaurant
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

        .wrapper--input{
            position: relative;
            input{
                background: #f6f6f6;
                border: none;
                outline: none;
                height: 60px;
                width: 400px;
                padding-left: 20px;
            }

            .search{
                position: absolute;
                top: 100%;
                width: 100%;
                background: #ffffff;

                .container--restaurant--search{
                    display: flex;
                    align-items: center;


                    &:hover{
                        cursor: pointer;
                        background: #f6f6f6;
                    }
                    .wrapper--img{
                        height: 60px;
                        width: 60px;
                        margin-right: 25px;
                        border-radius: 50%;
                        overflow: hidden;

                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
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