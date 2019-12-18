<template>
    <div class="goods">

        <goods-item v-for="item in Goods" :GoodsItem="item"></goods-item>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";
    export default {
        name: "Goods",
        components:{
            GoodsItem
        },
        data(){
          return{

          }
        },
        props:{
            Goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        font-size: 12px;
        overflow: hidden;
        margin-top:5px;
        justify-content: space-around;
        padding: 2px;
    }

</style>