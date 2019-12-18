<template>
    <div class="container">
        <div>
            <i class="icon-service"></i>
            客服
        </div>
        <div >
            <i class="icon-shop"></i>
            店铺
        </div>
        <div>
            <i class="icon-star"></i>
            收藏
        </div>
        <div class="entry" @click="joincart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
</template>

<script>
    export default {
        name: "DetailColumn",
        methods:{
            joincart(){
                this.$emit('joincart')
            }
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 49px;
        background: #ffffff;
        position:absolute;
        /*bottom: 49px;*/
        /*z-index:9;*/
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-top: 1px #f6f6f6 solid;
        /*margin-top: -20px;*/
    }
    .container div{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 12px;
    }
    .container .entry{
        flex: 2;
        background: #e1e113;
        color: #ffffff;
        line-height: 40px;
        border-radius:  1.5rem  0  0 1.5rem

    }
    .container .buy{
        line-height: 40px;
        color: #f6f6f6;
        background: #42b983;
        border-radius: 0 1.5rem 1.5rem 0
    }
    i{
        width: 22px;
        height: 22px;
        display: block;
        margin: 0 auto;
    }
    .icon-service{

        background: url("../../../assets/image/客服.png");
        background-size: cover;
    }
    .icon-shop{
        background: url("../../../assets/image/店铺.png");
        background-size: cover;
    }
    .icon-star{
        background: url("../../../assets/image/收 藏.png");
        background-size: cover;
    }
</style>