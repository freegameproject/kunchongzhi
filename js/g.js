/* g tools
/*
 */
var g = {
    //添加css到header
    addCSS: function (cssUrl) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.getElementsByTagName("head")[0].appendChild(link);
    },
    //得到css属性
    getCSS: function (obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];//IE下获取非行间样式
        } else {
            return getComputedStyle(obj, false)[name];//FF、Chorme下获取费行间样式
        }
    }
}

