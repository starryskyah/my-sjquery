(function(window,undefined){

    var sjQuery=function(){
        return new sjQuery.prototype.init();
    }
    sjQuery.prototype={
        constructor:sjQuery,
        init:function(){

        }
    }
    sjQuery.prototype.init.prototype=sjQuery.prototype;

    window.sjQuery=window.$=sjQuery;
})(window)