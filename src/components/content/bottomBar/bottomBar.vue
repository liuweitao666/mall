<template>
    <div class="bottombar">
        <div class="bottombar-left">
            <div @click="allcheck" :class="{checked:Allchk}" class="allchance"></div>
            <span>全选{{'￥'+sum}}</span>
        </div>
        <div class="counter" @click="toast">
            结算{{'('+count+')'}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottomBar",

        methods:{
            allcheck(){
                // console.log(123);
                this.$emit('Allcheck')
            },
            toast(){
                if(this.count === 0){
                    this.$Toast.show('请添加商品',1000)
                }
            }
        },
        props:{
            count:{
                type:'',
                default(){
                    return 0
                }
            },
            Allchk:{
                type:Boolean,
                default:false
            },
            sum:{
                type:'',
                default:0
            }
        },
        components:{

        },
        created() {
            console.log(this.sum)
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
        background: #ffffff;
    }
    .bottombar-left{
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .bottombar-left .allchance{
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
    .bottombar-left .checked{
        background: peachpuff;
    }

</style>