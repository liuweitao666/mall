<template>
    <div class="container">
        <div class="shop-title"><img :src="shops.shopLogo" alt=""><span class="title">{{shops.name}}</span></div>
        <div class="shop-detail">
            <div class="shop-detail-item">
                <div>
                    {{shops.cSells}}
                    <div>总销量</div>
                </div>
            </div>
            <div class="shop-detail-item">
                <div>
                    {{shops.cGoods}}
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="scores">
                <div v-for="(item,index) in shops.score" :key="index">
                    <span>{{item.name}}</span>
                    <span>{{item.score}} </span>
                    <span class="span" :class="{'spanRed':item.isBetter}"> {{item.isBetter?'高':'低'}}</span>
                </div>
            </div>
        </div>
        <div class="entry">
            进店逛逛
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shops",
        props: {
            shops: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        created() {
        }
    }
</script>

<style scoped>
    .container {
        text-align: left;
        border-top: 3px solid #f6f6f6;
    }

    .shop-detail {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }

    .shop-detail-item {
        text-align: center;
        flex: 1;
        font-size: 15px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .scores {
        display: flex;
        flex-direction: column;
        border-left: 1px solid #f6f6f6;
        padding-left: 15px;
    }

    .scores div {
        display: flex;
    }

    .scores div span {
        font-size: 13px;
    }

    .scores div:nth-child(2) {
        margin: 10px 0;

    }

    .scores div span:nth-child(2) {
        padding: 0 10px;
        width: 30px;
    }

    .scores div span:nth-child(3) {
        width: 20px;
        border-radius: 5px;
        font-size: 12px;
        padding: 1px;
        text-align: center;
    }

    .span {
        display: inline-block;
        background: green;
        color: #ffffff;
    }

    .scores .spanRed {
        background: red;
    }

    .shop-title {
        height: 50px;
        line-height: 50px;
        padding: 10px;
    }

    .shop-title img {
        display: block;
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 2px #f6f6f6;
    }

    .title {
        display: block;
        float: left;
        padding-left: 10px;
    }
    .entry{
        background: #42b983;
        color: #f6f6f6;
        border: solid 1px #f6f6f6;
        margin: 5px auto;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
    }
</style>