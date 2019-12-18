<template>
    <div>
        <transition>
        <div class="up" v-if="$store.state.position"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
    .up{
        position: fixed;
        bottom: 55px;
        right: 5px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #42b983;
        z-index: 9;
    }
    .v-enter,.v-leave-to{
        transform: translateX(40px);
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }
</style>