<template>
    <div class="nav">
        <NavBarItem  class="home-nav">
            <div slot="item-center">购物乐</div>
        </NavBarItem>
    </div>
</template>

<script>
    import NavBarItem from "./NavBarItem";
    export default {
        name: "NavBar",
        components:{
            NavBarItem
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