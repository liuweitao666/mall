<template>
    <div>
        <tab-bar>
            <TabBarItem path="/home">
                <img slot="item-icon" src="@/assets/image/index.svg" alt="">
                <img slot="item-icon-active"  src="@/assets/image/index-select.svg" alt="">
                <div slot="item-text">首页</div>
            </TabBarItem>
            <TabBarItem path = '/Catalog'>
                <img slot="item-icon" src="@/assets/image/index.svg" alt="">
                <img slot="item-icon-active"  src="@/assets/image/index-select.svg" alt="">
                <div slot="item-text">分类</div>
            </TabBarItem>
            <TabBarItem path="/Cargo">
                <img slot="item-icon" src="@/assets/image/index.svg" alt="">
                <img slot="item-icon-active" src="@/assets/image/index-select.svg" alt="">
                <div slot="item-text">购物车</div>
            </TabBarItem>
            <TabBarItem path="/Mine">
                <img slot="item-icon" src="@/assets/image/index.svg" alt="">
                <img slot="item-icon-active"  src="@/assets/image/index-select.svg" alt="">
                <div slot="item-text">我的</div>
            </TabBarItem>

        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>