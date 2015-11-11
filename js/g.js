/* g tools
 /*
 */
var g = {
    //get ua
    getUa: function () {
        return navigator.userAgent;
    },
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
    },
    //得到text
    getTxt: function (obj) {
        return obj.innerText;
    },
    //设置text
    setText: function (obj, text) {
        obj.innerText = text;
    },
    //得到html
    getTxt: function (obj) {
        return obj.innerHTML;
    },
    //设置html
    setText: function (obj, html) {
        obj.innerHTML = html;
    }
}

var _select = function (s) {
    var arr = [];

    function push(){
        for (i = 0; i < elements.length; i++) {
            arr.push(elements[i]);
        }
    }
    if(s.indexOf('#')!=-1){
        //id
        var id=s.replace('#','');
        var element=document.getElementById(id);
        arr.push(element);

    }else if(s.indexOf('.')!=-1){
        //class
        var className=s.replace('.','');
        var elements=document.getElementsByClassName(className);
        push();
    }else{
        //tag
        tagName=s;
        var elements=document.getElementsByTagName(tagName);
        push();
    }


    return arr;
    /*
    var objs = document.querySelectorAll(s);

    for (i = 0; i < objs.length; i++) {
        arr.push(objs[i]);
    }
    return arr;
    */
}


var G = function (objs) {
    this.objs = objs;
}
G.prototype = {
    setget:function(v,set,get){
        if (v === undefined) {
            return get(this);
        }else{
            return set(this);
        }
    },
    html:function(v){
      return this.setget(v,function(f){
          f.objs.map(function (obj) {
              obj.innerHTML = v;
          });
          return f;
      },function(f){
          var arr = [];
          f.objs.map(function (obj) {
              arr.push(obj.innerHTML);
          });
          if(arr.length===1){
              return arr[0];
          }else{
              return arr;
          }
      });
    },
    text:function(v){
      return this.setget(v,function(f){
          f.objs.map(function (obj) {
              obj.innerText = v;
          });
          return f;
      },function(f){
          var arr = [];
          f.objs.map(function (obj) {
              arr.push(obj.innerText);
          });
          if(arr.length===1){
              return arr[0];
          }else{
              return arr;
          }
      });
    },
    o: function (s) {
        if (s === undefined) {
            var arr = [];
            this.objs.map(function (obj) {
                arr.push(obj.innerText);
            });
            if(arr.length===1){
                return arr[0];
            }else{
                return arr;
            }
        } else {
            this.objs.map(function (obj) {
                obj.innerText = s;
            });
            return this;
        }
    }
}

var _ = function (s) {
    return new G(_select(s));
}
