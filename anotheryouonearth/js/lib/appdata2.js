/**
 * Created by hongjac on 2017/1/24.
 */
(function () {
    var AppData = {};
    window.AppData = AppData;
    AppData.isIOS=false;
    AppData.version = '';
    AppData.TB = 1;
    AppData.WX = 2;
    AppData.WEIBO = 3;
    AppData.OTHER = 4;
    AppData.ctx = null;
    AppData.percent = 0;
    AppData.windowWidth = 0;
    AppData.windowHeight = 0;
    AppData.endingClip = [];
    AppData.clipMotion = [
        {"height":960,"data":[{"position":[0,962],"img":0},{"position":[1084,962],"img":0},{"position":[0,962],"img":1},{"position":[1084,0],"img":1},{"position":[542,0],"img":0},{"position":[1084,0],"img":0},{"position":[542,962],"img":0},{"position":[0,0],"img":1},{"position":[542,0],"img":1},{"position":[1084,962],"img":1},{"position":[542,962],"img":1},{"position":[0,0],"img":0}],"width":540},
        {"height":960,"data":[{"position":[1084,962],"img":0},{"position":[542,0],"img":1},{"position":[542,962],"img":1},{"position":[542,0],"img":0},{"position":[0,962],"img":1},{"position":[0,962],"img":0},{"position":[0,0],"img":1},{"position":[1084,962],"img":1},{"position":[1084,0],"img":1},{"position":[542,962],"img":0},{"position":[0,0],"img":0},{"position":[1084,0],"img":0}],"width":540},
        {"height":960,"data":[{"position":[1084,0],"img":1},{"position":[0,0],"img":1},{"position":[542,0],"img":1},{"position":[542,962],"img":1},{"position":[1084,0],"img":0},{"position":[0,0],"img":0},{"position":[542,962],"img":0},{"position":[1084,962],"img":1},{"position":[1084,962],"img":0},{"position":[542,0],"img":0},{"position":[0,962],"img":0},{"position":[0,962],"img":1}],"width":540},
        {"height":960,"data":[{"position":[1084,0],"img":1},{"position":[542,962],"img":1},{"position":[542,962],"img":0},{"position":[542,0],"img":1},{"position":[0,962],"img":1},{"position":[1084,0],"img":0},{"position":[0,962],"img":0},{"position":[542,0],"img":0},{"position":[0,0],"img":1},{"position":[0,0],"img":0},{"position":[1084,962],"img":1},{"position":[1084,962],"img":0}],"width":540},
        {"height":960,"data":[{"position":[1084,962],"img":1},{"position":[1084,0],"img":0},{"position":[542,0],"img":0},{"position":[0,962],"img":0},{"position":[0,0],"img":0},{"position":[542,962],"img":0},{"position":[1084,962],"img":0},{"position":[542,0],"img":1},{"position":[542,962],"img":1},{"position":[0,0],"img":1},{"position":[0,962],"img":1},{"position":[1084,0],"img":1}],"width":540}
    ];
    AppData.videoClip = [];
    AppData.showVideo = false;
    AppData.videoInfo = {frameRate:18, isFull:false, state:0, realFrame:0, totalFrames:0, currentFrame:0, showPercent:0, loadPercent:0};
    AppData.fullVideo = false;
    AppData.workID = -1;
    AppData.workData = null;
    AppData.userName = "";
        //获取url中的参数
    AppData.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    };
    AppData.getNumberString = function(n, len){
        var str = n.toString();
        var oCount = len - str.length;
        var res = "";
        for(var i = 0; i < oCount; i++){
            res += "0";
        }
        return res + str;
    }
    AppData.tracking = function (category, action, label, id) {
        if(_czc){
            _czc.push(["_trackEvent",
                category?category:"",
                action?action:"",
                label?label:"",
                AppData.version,
                id?id:""]);
        }
    }
}).call(this);
