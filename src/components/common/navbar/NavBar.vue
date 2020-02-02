<template>
    <div class="nav">
        <NavBarItem  class="home-nav">
            <div slot="item-center">{{title}}</div>
        </NavBarItem>
        
    </div>
</template>

<script>
    import NavBarItem from "./NavBarItem";
    export default {
        name: "NavBar",
        components:{
            NavBarItem
        },
        data(){
            return{
                title:''
            }
        },
        created(){
            if(this.$route.path==='/Catalog'){
                this.title='商品分类'
            }else{
                this.title='购物街'
            }
        }
    }
</script>

<style scoped>
    .home-nav{
        position: relative;
        z-index: 3;
        width: 100%;
    }
</style>