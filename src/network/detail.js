import {request2} from "./requset";
import it from "element-ui/src/locale/lang/it";

export function getdetail(iid) {
   const detail = request2({
        url:'/detail',
        params:{
            iid
        }
    })
    return detail
}
export function getRecommend() {
    return request2({
        url: '/recommend'
    })
}


export class Goods {
    constructor(itemInfo,services,columns){
        this.title = itemInfo.title;
        this.columns = columns;
        this.services = services;
        this.desc = itemInfo.desc;
        this.oldPrice =itemInfo.oldPrice;
        this.lowNowPrice =itemInfo.lowNowPrice;
        this.realPrice =itemInfo.price;
        this.discountDesc = itemInfo.discountDesc
  }
}
export class Shop {
    constructor(shopInfo){
        this.shopLogo = shopInfo.shopLogo
        this.score = shopInfo.score
        this.name = shopInfo.name
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
    }
}
export class itemParam {
    constructor(info,rule){
        this.key=info.key
        this.set=info.set
        this.disclaimer =rule.disclaimer
        this.tables = rule.tables
    }
}

