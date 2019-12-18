<template>
    <div class="TabContent">
        <div class="itemcontent" v-for="(item,index) in titles" @click="CurrentClass(index)" :key="index">
            <span :class="{active:index===currentindex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabContent",
        data(){
          return {
              currentindex:0,
              list:['pop','sell','new']
          }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            CurrentClass(index){
                this.currentindex = index
                const type =this.list[index]
                this.$store.commit('getGoods',type)
                this.$emit('ChangeClass',index)
            }
        }
    }
</script>

<style scoped>
    .TabContent{
        display: flex;
        background: #ffffff;
        text-align: center;
    }
    .itemcontent{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .itemcontent span{
        padding: 3px;
    }
    .active{
        color: #42b983;
        border-bottom: #42b983 solid 1px;
    }

</style>