<template>
    <div class="container" v-if="itemParams">
        <table v-for="item in itemParams.tables">
            <tr v-for="tr in item" class="tr" >
                <td v-for="td in tr">{{td}}</td>
            </tr>
        </table>
        <div class="params" v-for="(item,index) in itemParams.set" :key="index">
            <span>{{item.key}}</span>
            <span>{{item.value}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "parasInfo",
        props:{
            itemParams:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        created() {
            // console.log(this.itemParams);
        }
    }
</script>

<style scoped>
    .container{
        font-size: 13px;
        border-top: 3px #f6f6f6 solid;
        padding:10px ;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    tr{
        width: 100%;
        border-bottom: 1px solid #f6f6f6;
    }
    td{
        height: 40px;
        width: 20%;
        text-align: left;
      }
    .params{
        display: flex;
        border-bottom: 1px solid #f6f6f6;
        height: 40px;
        line-height: 40px;
    }
    .params span:nth-child(1){
          width: 20%;
          text-align: left;
      }
    .params span:nth-child(2){
        width: 70%;
        text-align: left;
        color: #42b983;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>