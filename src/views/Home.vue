<template>
    <div class="home" >
        <NavBar></NavBar>
        <TabContent :titles="['流行','潮流','爆款']"
                    ref="child2" @getGoods="getGoods"
                    class="fixeds"
                    v-show="showtabcontent"
                    @ChangeClass="ChangeClass"></TabContent>
        <BScrolls class="wrapper" ref="Scroll" @pullingUp="pullingUp" :pull-up="true" :SwiperTop="SwiperTop" @onscroll="onscroll">
        <Header :banner="banner" @swiperimageload="swiperimageload"></Header>
        <Recommend :recommend="recommend"></Recommend>
        <TabContent :titles="['流行','潮流','爆款']" ref="child" @getGoods="getGoods" :class="{fixed:showtabcontent}" @ChangeClass="ChangeClass"></TabContent>
        <Goods :Goods = "goods[types].list"></Goods>
        </BScrolls>
        <BackTop @click.native="BackTop" ></BackTop>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from "../components/content/Header";
    import Recommend from "../components/content/Recommend";
    import NavBar from "../components/common/navbar/NavBar";
    import BScrolls from "../components/common/BatterScroll/BScrolls";

    import TabContent from "../components/common/TabContent/TabContent";
    import {getHomemultidata,getGoods} from "../network/home";
    import Goods from "../components/content/goods/Goods";
    import {debounce} from "../common/until";
    import backtopMixin from "../common/mixin";

    export default {
        name: 'home',
        data() {
            return {
                banner: null,
                recommend: null,
                goods:{
                    'sell':{page:0,list:[]},
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]}
                },
                type:'pop',
                scroll:null,
                SwiperTop:0,
            }
        },
        mixins:[backtopMixin],
        components: {
            Header,
            Recommend,
            NavBar,
            BScrolls,

            TabContent,
            Goods
        },
        computed:{
           types(){
               return this.$store.state.type
           }
        },
        created() {
            this.getHomemultidata()
            this.getGoods('pop')
            this.getGoods('sell')
            this.getGoods('new')

        },
        mounted(){
            const refresh= debounce(this.$refs.Scroll.refresh,500)
            this.$bus.$on('imageload',()=>{
                refresh()
            })

        },
        methods: {
            debounce(func,delay){
              let timer=null;
              return function(...args){
                  if(timer){
                      clearTimeout(timer)
                  }
                  timer=setTimeout(()=>{
                      func.apply(this,args)
                  },delay)
              }
            },
            getHomemultidata() {
                getHomemultidata().then(res => {
                    // console.log(res);
                    this.banner = res.data.data.banner.list
                    this.recommend = res.data.data.recommend.list
                }).catch(err => {
                    console.log(err)
                })
            },
            getGoods(type){
                // console.log('hello')
                // console.log(this.type);
                const page = this.goods[type].page + 1
                getGoods(type,page).then(res => {
                    const list = res.data.data.list
                    this.goods[type].list.push(...list)
                    this.goods[type].page+=1
                    this.$refs.Scroll.finishPullUp()
                    // console.log(this.goods[type].list);
                    // this.banner = res.data.data.banner.list
                    // this.recommend = res.data.data.recommend.list
                }).catch(err => {
                    console.log(err)
                })

            },

            pullingUp(){
                this.getGoods(this.types)
            },
            swiperimageload(){

                this.SwiperTop = this.$refs.child.$el.offsetTop;
                // console.log(this.SwiperTop);
            },
            onscroll(position){
                // console.log(position);
                if (position.y<-668){
                    this.$store.commit('changeposition',true)
                }else if (position.y>-668){
                    this.$store.commit('changeposition',false)
                }
                this.showtabcontent = this.SwiperTop-40<(-position.y)
            },
            ChangeClass(index){

                this.$refs.child2.currentindex = index
                this.$refs.child1.currentindex = index
                // this.$refs.child2.currentindex = this.$refs.child1.currentindex =index
            }
        }
    }
</script>
<style scoped>
    .home{
        height: 100vh;
    }
    .wrapper{
        height: calc(100% - 94px);
    }
    .fixed{
        display: none;
    }
    .fixeds{
        position: relative;
        z-index: 3;
    }
</style>
