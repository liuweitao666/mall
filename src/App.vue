<template>
    <div id="app">
        <keep-alive exclude="detail">
            <router-view/>
        </keep-alive>
        <MainTabBar></MainTabBar>
    </div>
</template>

<script>
    import './assets/css/base.css'
    import MainTabBar from "./components/common/TabBar/MainTabBar";
    // import NavBar from "./components/common/navbar/NavBar";


    export default {
        name: 'App',
        data() {
            return {

            }
        },
        methods: {},

        components: {
            MainTabBar,
        }
    }
</script>
<style>
    @import "./assets/css/base.css";


</style>
