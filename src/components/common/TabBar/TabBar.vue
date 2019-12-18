<template>
    <div class="TabBar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "TabBar",
        components:{

        }
    }
</script>

<style scoped>
    .TabBar {
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        background: #f6f6f6;
    }

</style>