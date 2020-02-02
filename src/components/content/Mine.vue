<template>
    <div class="container">
        <NavBarItem class="mine">
            <div slot="item-center">我的档案</div>
        </NavBarItem>
        <div class="first-column">
            <div class="column-img">
                <img src="http://i2.hdslb.com/bfs/face/f30cd2b2effbf0ad1c863b821c3eec484c0ca60b.jpg" alt="">
            </div>
            <div>
                <span class="login">
                    登录/注册
                </span>
                <span class="login">
                    暂未绑定手机
                </span>
            </div>
        </div>
        <div class="assets">
            <div class="assets-row">
                <span class="span-top">0.00</span>
                <span class="span-bottom">店铺金额</span>
            </div>
            <div class="assets-row">
                <span class="span-top">0个</span>
                <span class="span-bottom">我的优惠</span>
            </div>
            <div class="assets-row">
                <span class="span-top">0分</span>
                <span class="span-bottom">我的积分</span>
            </div>
        </div>
        <div class="column" @click="changeclass">
            <div class="img">
                <transition>
                    <img src="@/assets/image/收藏.png" alt="" v-show="!show">
                    <img src="@/assets/image/ablumselect.png" alt="" v-show="show">
                </transition>
            </div>
            <div class="font" :class="{color:show}">
                我的收藏
            </div>
        </div>
        <div class="column">
            <div class="img">
                <img src="@/assets/image/积分.png" alt="">
            </div>
            <div class="font">
                积分商城
            </div>
        </div>
        <div class="column">
            <div class="img">
                <img src="@/assets/image/店铺.png" alt="">
            </div>
            <div class="font">
                店铺
            </div>
        </div>
        <div class="upset"></div>
        <div class="column">
            <div class="img">
                <img src="@/assets/image/购物车.png" alt="">
            </div>
            <div class="font">
                购物车
            </div>
        </div>
        <div class="column">
            <div class="img">
                <img src="@/assets/image/设置.png" alt="">
            </div>
            <div class="font">
                设置
            </div>
        </div>
    </div>
</template>

<script>
    import NavBarItem from "../common/navbar/NavBarItem";
    export default {
        name: "Mine",
        data(){
            return {
                show:false
            }
        },
        methods:{
            changeclass(){
                this.show=!this.show
            }
        },
        components:{
            NavBarItem
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
    .column-img {
        width: 70px;
        height: 70px;
    }
    .mine{
        background: #42b983;
        color: #ffffff;
    }
    .first-column {
        height: 100px;
        background: #f6f6f6;
        display: flex;
        align-items: center;
        line-height: 25px;
    }

    .first-column span {
        margin-left: 10px;
        display: inline-block;
        width: 100%;
    }

    .first-column img {
        vertical-align: middle;
        border-radius: 50%;
        margin-left: 10px;
    }

    .img {
        width: 20px;
        height: 20px;
    }
    .font{
        margin-left: 5px;
        transition: all 0.5s ease;
    }
    .login {
        padding: 0 10px;
        font-size: 14px;
    }
    .assets{
        display: flex;
        border-bottom: 8px solid #f8f8f8;
        text-align: center;
    }
    .assets-row{
        flex: 1;
    }
    .assets span{
        display: block;
        line-height: 30px;
    }
    .assets span b{
        font-size: 20px;
    }
    .span-top{
        font-size: 20px;
        color: #4caf50;
    }
    .span-bottom{
        font-size: 13px;
        color: grey;
    }
    .column {
        border-bottom: 1px solid #f8f8f8;
        height: 40px;
        padding-left: 25px;
        font-size: 13px;
        display: flex;
        align-items: center;
    }
    .upset{
        height:8px;
        background: #f8f8f8;
    }
    .color{
        color: #4caf50;
    }
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }
</style>