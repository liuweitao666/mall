<template>
    <div v-if="DetailInfo">
        <div class="info-title">{{desc}}</div>
        <div v-for="(item,index) in this.DetailInfo.detailImage" :key="index" class="image">
            <div class="list-key">{{item.key}}</div>
            <img :src="image" alt="" v-for="image in item.list" @load="imageload">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props:{
            DetailInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{
                counter:0,

            }
        },
        computed:{
            desc(){
               return  this.DetailInfo.desc
            },
            imagecounter(){
                 return  this.DetailInfo.detailImage[0].list.length
            }
        },
        created() {

        },
        methods:{
            imageload(){
                this.$emit('imageLoad')
                // if(++this.counter === this.imagecounter){
                    
                // }
            }
        }
    }
</script>

<style scoped>
    .info-title{
        text-align: left;
        font-size: 14px;
        margin-top: 25px;
        border-top: 3px solid #f6f6f6;
        padding: 10px;
    }
    .image img{
        width: 100%;
    }
    .list-key{
        padding: 5px;
        text-align: left;
        font-size: 13px;
    }
</style>