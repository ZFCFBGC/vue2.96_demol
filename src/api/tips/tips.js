import vue from "vue";
import tip from "./tips.vue"
const toast = vue.extend(tip)
const ToastInfo = function() {};
var instance = new toast({
    el:document.createElement("div")
});
//显示
    ToastInfo.show = options =>{
        console.log('轻提示',options)
        document.body.appendChild(instance.$el)
        instance.show = true
        if(options != undefined){
            if(options.title != undefined){
                instance.title = options.title
            }else{
                instance.title = ''
            }
            if(options.text != undefined){
                instance.text = options.text
            }else{
                instance.text = ''
            }
            if(options.type != undefined){
                instance.type = options.type
            }else{
                instance.type = ''
            }
            if(options.color != undefined){
                instance.textcolor = options.color
            }else{
                instance.textcolor = "#fff"
            }
            if(options.center != undefined){
                instance.center = options.center
            }else{
                instance.center = false
            }
        }
    }
    //隐藏
    ToastInfo.hide = () => {
        instance.show = false;
      };





export default  ToastInfo