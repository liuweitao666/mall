<template>
    <div class="comment"  v-if="commentInfo.user">
        <div class="comment-content"><span>用户评论</span> <span>更多</span></div>
        <div class="user">
            <img :src="commentInfo.user.avatar" alt=""> <div>{{commentInfo.user.uname}}</div>
        </div>
        <div class="conmentdetail">
            {{commentInfo.content}}
            <div class="conmentdetail-bottom">
                <span>{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
        </div>
        <div class="info-images">
            <img :src="item" alt="" v-for="(item,i) in commentInfo.images" :key="i">
        </div>
    </div>
</template>

<script>
    import {timestampToTime} from "../../../../common/until"

    export default {
        name: "Detailcomment",
        props:{
            commentInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
          return {

          }
        },
        created() {

        },
        methods:{

        },
        filters:{
            showDate(value){
                return timestampToTime(value)
            }
        }
    }
</script>

<style scoped>
    .comment-content{
        display: flex;
        justify-content: space-between;
        padding: 15px 5px;
        border-top: 4px #f6f6f6 solid;
        border-bottom: 1px solid #f6f6f6;
        box-shadow: 0 -1px 1px rgba(0,0,0,.1);
    }
    .user{
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding-top: 10px;
    }
    .user img{
        width: 40px;
        height: 40px;
        display: block;
        float: left;
        margin: 0 10px;
        border-radius:50% ;
    }
    .user div{
        float: left;
    }
    .conmentdetail{
        text-align: left;
        padding: 5px;
        line-height: 20px;
        font-size: 13px;
    }
    .conmentdetail span{
        padding: 10px 20px 10px 0 ;
    }
    .conmentdetail-bottom{
        padding-top: 5px;
        color: gray;
    }
    .info-images{
        text-align: left;
        padding:0 5px;
    }
    .info-images img{
        width: 50px;
        height: 50px;
        padding-right:5px;
    }
</style>