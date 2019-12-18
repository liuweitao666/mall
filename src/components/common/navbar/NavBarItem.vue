<template>
    <div class="nav-item">
        <div class="item-left"><slot name="item-left"></slot></div>
        <div class="item-center"><slot name="item-center"></slot></div>
        <div class="item-right"><slot name="item-right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem"
    }
</script>

<style scoped>
    .nav-item{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }
    .home-nav{
        background: #42b983;
        color: #fff;
    }
    .nav-item .item-left{
        flex: 1;
        /*background: blue;*/

    }
    .nav-item .item-center{
        flex: 2;
        /*background: red;*/
    }
    .nav-item .item-right{
        flex: 1;
        /*background: blue;*/
    }

</style>