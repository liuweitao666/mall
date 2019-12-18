<template>
    <div class="goods-item" @click="detail">
        <img :src="GoodsItem.show.img" alt="" @load="refresh">
        <div>
            <p>{{GoodsItem.title}}</p>
            <p class="Price">{{GoodsItem.orgPrice}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
            GoodsItem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            refresh(){
                this.$bus.$emit('imageload')
            },
            detail(){
                // console.log(this.GoodsItem);
                this.$router.push('/detail/'+this.GoodsItem.iid)
                // console.log(123);
            }
        }
    }
</script>

<style scoped>
    .goods-item{
        width: 48%;
        line-height: 20px;
    }
    .goods-item img{
        width: 100%;
        height: 225px;
    }
    .goods-item p{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        width: 80%;
        margin: 0 auto;
    }
    .goods-item .Price{
        color: #42b983;
    }
</style>