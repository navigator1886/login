if (typeof _52buff == "undefined") {
    _52buff = { }
}
_52buff.ext = $.extend;
_52buff.ext(_52buff, {
    getCode:function(key,pwd) {
        var t = key.split("_");
        // var f=function(m,k,p){ return m(k)+m(p)}
        var code = f(md5,t[0],pwd);
        return code;
    }
});

