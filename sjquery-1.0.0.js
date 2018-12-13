(function(window,undefined){

    var sjQuery=function(selecter){
        return new sjQuery.prototype.init(selecter);
    }
    sjQuery.prototype={
        constructor:sjQuery,
        init:function(selecter){

            selecter=sjQuery.trim(selecter);
            if(!selecter){
                return this;
            }
            else if(sjQuery.isString(selecter)){
                if(sjQuery.isHTML(selecter)){
                    var temp=document.createElement('div');
                    temp.innerHTML=selecter;
                    /*
                    for(var i=0;i<temp.children.length;i++){
                        this[0]=temp.children[0];
                    }
                    this.length=temp.children.length;*/
                    [].push.apply(this,temp.children);//apply函数第二个参数接收===数组===
                    return this;
                }
            }
        }
    }

    sjQuery.isString=function (str) {
        return typeof str==="string";
      }

      sjQuery.isHTML=function(str){
          return (str.charAt(0)=='<'&&str.charAt(str.length-1)==">"&&str.length>=3);
      }

    sjQuery.trim=function(str){
        if(str.trim){//IE9以下版本不支持该方法
            return str.trim();
        }
        else{
            return str.replace('/^s+|s+$/g',"");
        }
    }
    sjQuery.prototype.init.prototype=sjQuery.prototype;

    window.sjQuery=window.$=sjQuery;
})(window)