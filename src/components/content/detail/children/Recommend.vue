<template>
    <div v-show="recommends.length>0" class="container">
        <div v-for="(item,index) in recommends" :key="index" class="recommend">
            <img :src="item.image" alt="">
            <div class="recommend-title">{{item.title}}</div>
            <span class="span">{{item.price}}</span>
            <span>{{item.itemLikes}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        created() {
            // console.log(this.recommends);
            if(this.recommends.length>0){
                console.log(this.recommends);
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding:0 3px;
    }
    .recommend{
        font-size: 13px;
        width: 48%;
        line-height: 20px;
        padding-top: 10px;
    }
    .recommend img{
        width: 100%;
        height: 230px;
    }
    .recommend .span{
        padding-right: 10px;
        color: #42b983;
    }
    .recommend-title{
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>