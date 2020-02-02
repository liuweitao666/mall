<template>
  <div class="Category">
    <!-- 导航栏 -->
    <NavBar></NavBar>
    <!-- 内容区域 -->
    <div class="container">
      <BScrolls class="cate-sroll-left">
        <div class="content-left">
          <div
            :class="['catelist',index ===currentindex ?'activecolor':'']"
            v-for="(item,index) in catelist"
            :key="index"
            @click="changeclass(index)"
          >
          <span>{{item.title}}</span>
          </div>
        </div>
      </BScrolls>
      <BScrolls class="cate-sroll-right">
        <div class="content-right">
            <div class="">
                <img src="" alt="">
                <span>你好</span>
            </div>
        </div>
      </BScrolls>
    </div>
  </div>
</template>

<script>
import BScrolls from "../common/BatterScroll/BScrolls";
import NavBar from "../common/navbar/NavBar";
import { getcategory } from "./../../network/cate";
export default {
  name: "Catalog",
  components: {
    BScrolls,
    NavBar
  },
  data() {
    return {
    //   左侧分类栏目数据
      catelist: [],
      currentindex: 0,
    //   右侧展示数据
      catecontent:[]
    };
  },
  created() {
    this.getcate();
    this.getcatecontent("10062603")
  },
  methods: {
    async getcate() {
      const cate = await getcategory();
      this.catelist = cate.data.data.category.list;
    //   console.log(this.catelist);
    },
    changeclass(index){
        this.currentindex = index
    },
    async getcatecontent(iid){
        console.log(iid)
        const content = await getcategory(iid);
        console.log(content)
    }
  }
};
</script>

<style scoped>
.Category{
    height: 100vh
}
.container {
  display: flex;
   height: calc(100% - 94px);
}
.content-left {
  width: 80px;
  text-align: center;
  background: #f6f6f6;
  height: 100%;
  font-size:13px
}

.cate-sroll-right {
  background: grey;
}
.catelist {
  padding:10px 5px;
  border-left: solid 3px #f6f6f6;
}
.activecolor {
  color: #42b983;
  border-left-color: #42b983;
  background: #ffffff
}
</style>