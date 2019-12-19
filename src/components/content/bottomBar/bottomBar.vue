<template>
    <div class="bottombar">
        <div class="bottombar-left">
            <div></div>
            <span>全选 {{parseInt(count)}}</span>
        </div>
        <div class="counter">
            结算
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottomBar",
        methods:{

        },
        props:{
            count:{
                type:'',
                default(){
                    return 1
                }
            }
        }
    }
</script>

<style scoped>
    .bottombar{
        position: fixed;
        bottom: 50px;
        border-top: 1px solid #f6f6f6;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .bottombar-left{
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .bottombar-left div{
        width: 14px;
        height: 14px;
        background: #42b983;
        border-radius: 50%;
        margin-right: 5px;
    }
    .counter{
        background: #42b983;
        color: #fff;
        padding: 10px 15px;
    }
    .checked{
        background: #42b983;

    }
</style>