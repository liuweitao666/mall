<template>
    <transition>
    <div class="toast" v-show="Asshow">
            <div class="message">{{message}}</div>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return{
                message:'',
                Asshow:false
            }
        },
        methods:{
            show(message,duration){
                console.log(message)
                this.Asshow = true
                this.message = message
                setTimeout(()=>{
                    this.Asshow = false

                },duration)
            }
        }
    }
</script>

<style scoped>
    .toast{
        position: fixed;
        z-index:3;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,.6);
        padding: 8px 10px;
        color: #ffffff;
        font-size: 13px;
    }
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.5s ease;
    }
</style>