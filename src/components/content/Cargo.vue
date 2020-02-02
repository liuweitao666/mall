<template>
    <div class="Cargo">
        <NavBarItem class="Cart-bar">
            <div slot="item-center">购物车({{list.length}})</div>
        </NavBarItem>
        <BScrolls class="cart-scroll">
        <div v-for="(item,index) in list" :key="index" class="container" @click="Skip(item)">
            <div class="image">
                <div class="choose" @click="option(index)" :class="{chooseaction:item.flag}">
                </div>
                <img :src="item.image" alt="">
            </div>
            <div class="title">
                <div>{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="price"><span>{{item.realPrice}}</span>X{{item.count}}</div>
            </div>
        </div>
        </BScrolls>
        <bottom-bar :count="count" @Allcheck="Allcheck" :Allchk="Allchk" :sum='sum'/>
    </div>
</template>

<script>
    import NavBarItem from "../common/navbar/NavBarItem"
    import bottomBar from "./bottomBar/bottomBar"
    import BScrolls from "../common/BatterScroll/BScrolls";

    export default {
        name: "Cargo",
        components: {
            NavBarItem,
            bottomBar,
            BScrolls
        },
        created(){
            // console.log(this.list);
            console.log(this.sum);
        },
        data() {
            return {
                currentindex: false,
                flags: false,

            }
        },
        computed: {
            list() {
                return this.$store.state.pushCart
            },
            /**
             * @return {boolean}
             */
            count() {
                let length = this.list.length
                let num = 0
                for (let i = 0; i < length; i++) {
                    if (this.list[i].flag) {
                        num += this.list[i].count
                    }
                }
                return num
            },
            Allchk() {
                return !this.list.find(item => !item.flag)
            },
            sum() {
                return this.list.filter(item => {
                    return item.flag
                }).reduce((price, item) => {
                    return price+Math.round(item.count*item.lowNowPrice)
                },0)
            }
        },
        methods: {
            option(index) {
                this.list[index].flag = !this.list[index].flag
                // console.log(this.count)
                // console.log(this.Allchk)
            },
            Allcheck() {
                // console.log(123)

                if (this.Allchk) {
                    this.list.forEach(item => item.flag = false)
                } else {
                    this.list.forEach(item => item.flag = true)
                }

            },
            Skip(item) {
               this.$router.push('/detail/'+item.Iid)
            }
        }
    }
</script>

<style scoped>
    .Cart-bar {
        color: #ffffff;
        background: #42b983;
        position: relative;
        z-index: 3;
    }
    .Cargo{
        height: 100vh;
    }
    .cart-scroll{
        height: calc(100% - 50px - 39px - 44px);
    }
    .container {
        display: flex;
        padding: 10px 0;
        font-size: 13px;
        border-bottom: 1px solid rgba(180, 180, 180, 0.7);
    }

    .container .image {
        display: flex;
        align-items: center;
    }

    .container .choose {
        width: 20px;
        height: 20px;
        background: #42b983;
        border-radius: 50%;
    }

    .container .chooseaction {
        background: peachpuff;
    }

    .container .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .container .title div {
        flex: 1;
        line-height: 100%;
    }

    .container .title div:nth-child(1) {
        font-size: 14px;
    }

    .container .desc {
        color: gray;
        font-size: 13px;
        margin: 25px 0 35PX;
    }

    .container img {
        width: 80px;
        height: 100px;
        border-radius: 6px;
        margin-right: 10px;
    }

    .price {
        display: flex;
        justify-content: space-between;
    }

    .price span:nth-child(1) {
        color: #42b983;
    }
</style>