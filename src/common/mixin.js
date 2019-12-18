import BackTop from "../components/content/backtop/BackTop";

 const backtopMixin = {
    components:{
        BackTop,
    },
    data(){
        return {
            showtabcontent:false,
        }
    },
     methods:{
         BackTop(){
             this.$refs.Scroll.scrollto(0,0)
             // console.log(123)
         },
     }
}

export default backtopMixin