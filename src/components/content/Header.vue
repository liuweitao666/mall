<template>
    <div class="header">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in banner" :key="i">
                <img :src="item.image" alt="" title="焕新女装节" @load="imageload">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    // import {getHomemultidata} from "../../network/home";

    export default {
        name: "Header",
        data(){
            return{
                isLoad:false
            }
        },
        props:{
          banner:{
              type:Array,
              default(){
                  return [];
              }
          }
        },
        created(){

        },
        methods:{
            imageload(){
                   if (!this.isLoad){
                       this.$emit('swiperimageload')
                       this.isLoad= true
                   }
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 160px;
    }
    .header img{
        width: 100%;
        height: 200px;
    }
</style>