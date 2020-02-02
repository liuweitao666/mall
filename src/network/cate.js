import {request2} from './requset'


export function getcategory(iid){
   if(iid){
       console.log(123)
       return request2('category',{
           params:iid
       })
   }
   return request2('category')
}