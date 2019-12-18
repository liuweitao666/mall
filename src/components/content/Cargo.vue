<template>
    <div>
        <NavBarItem class="Cart-bar">
            <div slot="item-center" >购物车({{list.length}})</div>
        </NavBarItem>

        <div v-for="(item,index) in list" :key="index" class="container">


            <div class="image">
                <div class="choose">
                </div>
                <img :src="item.image" alt="">
            </div>
            <div class="title">
                <div>{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="price"><span>{{item.realPrice}}</span>X{{item.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBarItem from "../common/navbar/NavBarItem";
    export default {
        name: "Cargo",
        components:{
            NavBarItem
        },
        data(){
            return {

            }
        },
        computed:{
            list(){
               return this.$store.state.pushCart
            }
        },
        created(){
            console.log(this.list);
        }
    }
</script>

<style scoped>
    .Cart-bar{
        color: #ffffff;
        background: #42b983;
    }

    .container{
        display: flex;
        padding: 10px 0;
        font-size: 13px;
        border-bottom: 1px solid rgba(180, 180, 180, 0.7);
    }
    .container .image{
        display: flex;
        align-items: center;
    }
    .container .choose{
        width: 20px;
        height: 20px;
        background: #42b983;
        border-radius: 50%;
    }
    .container .title{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .container .title div{
        flex: 1;
        line-height: 100%;
    }
    .container .title div:nth-child(1){
        font-size: 14px;
    }
    .container .desc{
        color: gray;
        font-size: 13px;
        margin:25px 0 35PX;
    }
    .container img{
        width: 80px;
        height: 100px;
        border-radius: 6px;
        margin-right:10px;
    }
    .price{
        display: flex;
        justify-content: space-between;
    }
    .price span:nth-child(1){
        color: #42b983;
    }
</style>