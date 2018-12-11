//1、jquery 本质是一个函数闭包
//2\ 为什么使用闭包
//      为了避免多个框架的冲突
// 3、jquery如何让外界使用内部定义的局部变量
//     window.xxx=xxx;

// 4\ 为什么传入 window实参
//     便于后期压缩代码
//     提升查找变量的效率
// 5、为什么要给自己传入一个undefined参数
//     便于后期压缩代码
//     IE9以下浏览器undefined值可以被修改，为了防止内部使用的
//     undefined值不被修改，所以需要接收一个正确的undefined
(function(window,undefined){

    var SjQuery=function(){
        return new SjQuery.prototype.init();
    }
    SjQuery.prototype={
        constructor:SjQuery,
        init:function(){

        }
    }
    SjQuery.prototype.init.prototype=SjQuery.prototype;

    window.SjQuery=window.$=SjQuery;
})(window)