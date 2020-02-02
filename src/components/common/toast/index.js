const obj = {}
import Toast from "./Toast";

obj.install =function (Vue) {
    const toastcontrstor=Vue.extend(Toast)
    const toast =new toastcontrstor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    // console.log(Toast.$el)
    // document.body.appendChild(Toast.$el)
    Vue.prototype.$Toast = toast
}

export default obj