<template>
    <div class="shopitem">
        <div class="title">{{goods.title}}</div>
        <div class="price">
            <span>{{goods.realPrice}}</span>
            <span>{{goods.oldPrice}}</span>
            <span v-show="goods.discountDesc">{{goods.discountDesc}}</span>
        </div>
        <div class="columns">
            <div v-for="item in goods.columns">{{item}}</div>
        </div>
        <div class="services">
            <div v-for="(item,index) in goods.services" :key="index">
                <img :src="item.icon" alt="">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopItem",
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        created() {
            // console.log(this.goods);
        }
    }
</script>

<style scoped>
    .shopitem{
        text-align: left;
        margin-top: 10px;
        padding: 0px 5px;
    }
    .title{
        font-size: 15px;
        line-height: 20px;
    }
    .price{
        height: 38px;
    }
    .price span{
        display: block;
        float: left;
    }
    .price span:nth-child(1){
        color: #42b983;
        font-size: 18px;
        line-height: 38px;
        font-weight: 500;
    }
    .price span:nth-child(2){
        font-size: 10px;
        padding: 0 5px;
        line-height: 38px;
    }
    .price span:nth-child(3){
        background: #42b983;
        color: #ffffff;
        font-size: 11px;
        border-radius: 8px;
        padding: 2px;
        line-height: 12px;
        margin-top: 5px;
    }
    .columns{
        display: flex;
        text-align: left;
        font-size: 13px;
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #f6f6f6;
        margin-top: 10px;
    }
    .columns div{
        flex: 1;
        color: gray;
        line-height: 15px;
    }
    .services{
        display: flex;
        text-align: left;
        font-size: 10px;
        padding: 20px 0;
    }
    .services div{
        flex: 1;
    }
    .services img{
        height: 12px;
        width: 12px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>