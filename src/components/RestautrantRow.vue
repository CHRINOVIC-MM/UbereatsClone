<template>
  <div class="restaurant--row">
    <div class="wrapper--card">
        <RestautrantCard v-for="(card, index) in three_restaurant" :key="index" :info_restaurant="card"/>
    </div>
  </div>
</template>

<script>

import RestautrantCard from "./RestaurantCard.vue";
    export default {
            name: "RestaurantRow",
            components:{
                RestautrantCard,
            },
            props:{
                three_restaurant: Array
            }
}
</script>

<style lang="scss">
    .restaurant--row{
        margin-top: 20px;
        .wrapper--card{
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-gap: 2rem;
            margin: 2rem;
        }
    }

</style>