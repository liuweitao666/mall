<template>
    <div class="container">
        <div class="recommend" v-for="(item,i) in recommend">
            <img :src="item.image" alt="" >
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        padding: 10px 0 30px;
        border-bottom: 8px solid #f6f6f6;
        font-size: 13px;
        line-height: 20px;
    }
    .recommend{
        flex: 1;
    }
    .recommend img{
        width: 60px;
        height: 60px;
    }
</style>