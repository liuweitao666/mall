<template>
    <div class="detail">

        <NavBarItem class="navbar">
            <div slot="item-left" @click="back">返回</div>
            <div slot="item-center" class="detail-center">
                <div v-for="(item,index) in detailtop" @click="Change(index)" :class="{active:index==CurrentIndex}" ref="navbar">
                    {{item}}
                </div>
            </div>
        </NavBarItem>
        <BScrolls class="detail-scroll" ref="Scroll" @onscroll="onscroll">
<!--            {{$store.state.pushCart}}-->
            <div class="detail-swipe">
                <mt-swipe :auto="4000" :show-indicators="false">
                    <mt-swipe-item v-for="item in topImages">
                        <img :src="item" title="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <ShopItem :goods="goods"></ShopItem>
            <Shops :shops="shops"></Shops>
            <DetailGoodsInfo :DetailInfo="DetailGoodsInfo" @imageLoad="imageLoad" ref="detail"></DetailGoodsInfo>
            <parasInfo :itemParams="itemParams" ref="params"></parasInfo>
            <Detailcomment :commentInfo=comments ref="comment"></Detailcomment>
            <Recommend :recommends="recommend" ref="recommend"></Recommend>
        </BScrolls>
        <BackTop @click.native="BackTop"></BackTop>
        <DetailColumn @joincart="joincart"></DetailColumn>
    </div>

</template>

<script>
    import NavBarItem from "../../common/navbar/NavBarItem";
    import {getdetail, Goods, Shop, itemParam, getRecommend} from "../../../network/detail";
    import ShopItem from "./ShopItem";
    import Shops from "./Shops";
    import BScrolls from "../../common/BatterScroll/BScrolls";
    import DetailGoodsInfo from "./children/DetailGoodsInfo";
    import parasInfo from "./children/parasInfo";
    import Detailcomment from "./children/Detailcomment";
    import Recommend from "./children/Recommend";
    import DetailColumn from "./DetailColumn";
    import backtopMixin from "../../../common/mixin";

    export default {
        name: "detail",
        data() {
            return {
                Iid: null,
                detailtop: ['商品', '详情', '参数', '推荐'],
                CurrentIndex: 0,
                topImages: [],
                goods: {},
                shops: {},
                DetailGoodsInfo: {},
                itemParams: {},
                comments: {},
                recommend: [],
                themeTopYs: [],
            }
        },
        mixins: [backtopMixin],
        created() {
            this.Iid = this.$route.params.Iid;

            getdetail(this.Iid).then(res => {
                const data = res.data.result;
                console.log(data);
                //1.取出轮播图
                this.topImages = data.itemInfo.topImages;
                //2.取出商品信息
                this.goods = new Goods(data.itemInfo, data.shopInfo.services, data.columns);
                //3.取出商家信息
                this.shops = new Shop(data.shopInfo);
                //4.取出商品详情信息
                this.DetailGoodsInfo = data.detailInfo;
                //5.取出商品参数的信息
                this.itemParams = new itemParam(data.itemParams.info, data.itemParams.rule)
                //6.取出用户评论信息
                this.comments = data.rate.list[0]
                // console.log(this.comments)
                this.$nextTick(() => {
                        this.themeTopYs.push(0)
                        this.themeTopYs.push(this.$refs.detail.$el.offsetTop)
                        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                        // console.log(this.themeTopYs)
                    }
                )

                // console.log(this.itemParams);
            }).catch(err => {
                console.log(err)
            })
            getRecommend().then(res => {
                const data = res.data.data
                this.recommend = data.list
                // console.log(this.recommend);


            }).catch(err => {
                console.log(err)
            })
        },
        components: {
            NavBarItem,
            ShopItem,
            Shops,
            BScrolls,
            DetailGoodsInfo,
            parasInfo,
            Detailcomment,
            Recommend,
            DetailColumn
        },
        methods: {
            Change(index) {
                this.CurrentIndex = index

                console.log(-this.themeTopYs[index]);
                this.$refs.Scroll.scrollto(0, -this.themeTopYs[index])

            },
            back() {
                this.$router.back(-1)
            },
            imageLoad() {

                this.$refs.Scroll.refresh()
            },
            onscroll(position) {
                let flag = 0
                // console.log(position);
                if (position.y < -1000) {
                    this.$store.commit('changeposition', true)
                } else if (position.y > -1000) {
                    this.$store.commit('changeposition', false)
                }
                let length = this.themeTopYs.length
                for (let i=0;i<length;i++){
                    if ( -position.y >this.themeTopYs[i] &&
                         -position.y <this.themeTopYs[i+1] || -position.y>this.themeTopYs[length-1]) {
                        this.CurrentIndex = i
                    }
                }
            },
            joincart(){
                const pushCart={}
                pushCart.image= this.topImages[0]
                pushCart.title= this.goods.title
                pushCart.desc = this.goods.desc
                pushCart.realPrice = this.goods.realPrice
                pushCart.lowNowPrice = this.goods.lowNowPrice
                pushCart.Iid = this.Iid
                pushCart.count = 1
                pushCart.flag = true
                console.log(pushCart);
                this.$store.dispatch('pushCart',pushCart)
            }
        },

    }
</script>

<style scoped>
    .detail {
        position: relative;
        z-index: 3;
        text-align: center;
        background: #ffffff;
        height: 100vh;
    }

    .navbar {
        position: relative;
        z-index: 3;
        background: #ffffff;
    }

    .detail-center {
        display: flex;
        font-size: 13px;
    }

    .detail-center div {
        flex: 1;
    }

    .active {
        color: #42b983;
    }

    .detail-swipe {
        height: 300px;
    }

    .detail-swipe img {
        width: 100%;
    }

    .detail-scroll {
        height: calc(100% - 44px - 49px);
    }
</style>