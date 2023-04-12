<template>
  <p>{{ $route.params.name }}</p>
</template>

<script>
import { onMounted } from 'vue'
import db from '../db.js'

export default {
    name: 'RestaurantComponent',
    setup(){
        onMounted(()=>{
            console.log(db);
        })
    }
}
</script>

<style>

</style>