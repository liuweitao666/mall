<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
<!--        <slot name="content"></slot>-->
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "BScrolls",
        props:{
            pullUp:{
                type:Boolean,
                default:false
            },
        },
        data(){
            return{
                scroll:null,
                fixed:false
            }
        },
        mounted() {

            this.scroll = new BScroll('.wrapper',{
                probeType:3,
                click:true,
                pullUpLoad:this.pullUp
            })
            this.scroll.on('scroll',(position)=>{
                // console.log(position)
                this.$emit('onscroll',position)
            })
            this.scroll.on('pullingUp',()=>{
                // console.log('123')
                this.$emit('pullingUp')
            })
            // console.log(this.scroll)
        },
        methods:{
            scrollto(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>
    .fixed{
        position: fixed;
    }
</style>