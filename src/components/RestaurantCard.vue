<template>
   <div class="restaurant--card">
        <div class="restaurant--image" :style="changeBackgroundImage"></div>

        <div class="restaurant--information">
            <p class="time">{{info_restaurant.drive_time}}</p>
            <div class="top">
                <p class="name">{{info_restaurant.name}}</p>
                <p class="note">
                    <span>{{info_restaurant.note}}</span>
                </p>
            </div>
        </div>
   </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: "RestaurantCard",
    props:{
        info_restaurant: Object
    },

    setup(props){
        
        const changeBackgroundImage = computed(() =>{
            return {
                backgroundImage: `url(${props.info_restaurant.image})`
            }
        });

        return {
            changeBackgroundImage
        }
    }
}
</script>

<style lang="scss">
.restaurant--card{
    height: 215px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover{
        transform: scale(1.035, 1.035);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    p{
        margin: 0px;
    }

    

    .restaurant--image{
        position: absolute;
        top: 0;
        height: 110%;
        width: 100%;
        z-index: -1;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .restaurant--information{
        position: absolute;
        bottom: 0;
        width: 100%;
        .top{
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 10px;
            padding-right: 10px;

            .note{
                background-color: #eeeeee;
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.8rem;
                border-radius: 50%;
                
            }

            .name{
                font-size: 20px;
            }
        }

        .time{
            font-size: 20px;
            padding-left: 10px;

        }
    }
}
</style>