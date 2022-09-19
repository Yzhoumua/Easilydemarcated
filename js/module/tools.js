// 防抖
export default{
    debounce(handler, delay) {
        var timer = null;
        return function () {
            var _self = this, _arg = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                handler.apply(_self, _arg);
            }, 500)
        }
    }
} 