/**
 * Created by hongjac on 2017/6/2.
 */
//授权地址后的回调地址
var returnUrl = location.origin + '/index.html?utm_source=Weibo';
//授权地址
var authUrl = location.origin + "/background/index.php?s=user/getAuthUrl&type=2&returnUrl=";
var shareCompleteURL = location.origin + "/index_share.html";
//如果授权回来，去url查询下是否有flag参数，
//如果有flag就调用doSaveWork，获得workId，然后拼接自定义url参数，传给doShareToSNSWithPic分享接口
//如果授权过，默认应该是没有flag参数的，这个就走普通流程，用户会主动出发doSaveWork和doShareToSNSWithPic
var saveWork = false;


//获得用户信息
var doGetUserinfo = function () {
    $.ajax({
        url: "/background/index.php?s=user/doGetUserInfo",
        type: "post",
        dataType: 'json',
        cache: false,
        success: function (json) {
            if (json.errorcode != 0) {
                location.href = authUrl + encodeURIComponent(returnUrl + "&save=1");
            } else {
                //alert(JSON.stringify(json));
                AppData.userName = json.data.account;
                doSaveWork();
            }
        }
    });
}

//保存作品
var doSaveWork = function () {
    $.ajax({
        url: "/background/index.php?s=user/doSaveWork",
        type: "post",
        dataType: 'json',
        data: {
            content: AppData.userName
        },
        cache: false,
        success: function (json) {
            if (json.errorcode != 0) {
                location.href = authUrl + encodeURIComponent(returnUrl + "&save=1");
            } else {
                //alert(JSON.stringify(json));
                AppData.workID = json.data.workId;
                doShareToSNSWithPic();
            }
        }
    });
}

//通过workId获得作品信息
var doGetWorkById = function () {
    $.ajax({
        url: "/background/index.php?s=user/doGetWorkById",
        type: "post",
        dataType: 'json',
        data: {
            workId: AppData.workID
        },
        cache: false,
        success: function (json) {
            if (json.errorcode != 0) {
                location.href = authUrl + encodeURIComponent(returnUrl);
            } else {
                //alert(JSON.stringify(json));
                AppData.workData = json.data.content;
            }
        }
    });
}


//分享到微博
var doShareToSNSWithPic = function () {
    $.ajax({
        url: "/background/index.php?s=user/doShareToSNSWithPic",
        type: "post",
        dataType: 'json',
        data: {
            //分享内容
            title:'地球上的另一个你，会在哪里？',
            content: '奇妙! 我在#地球上的另一个你#发现了新的自己，原来生活还可以过的这样赞！理想生活是什么？点击查看【地球上的另一个你】，看看我们人生的AB面！618天猫#理想生活狂欢节#。' + returnUrl + '&workId=' + AppData.workID
        },
        cache: false,
        success: function (json) {
            if (json.errorcode != 0) {
                location.href = shareCompleteURL;
            } else {
                //alert(JSON.stringify(json));
                location.href = shareCompleteURL;
            }
        }
    });
}
if(ua.weibo){
    if(AppData.getUrlParam("workID")){
        AppData.workID = AppData.getUrlParam("workID");
        AppData.tracking('pageview', 'Weibo-Return');
        doGetWorkById();
    }
    if(AppData.getUrlParam("save") == 1 || AppData.getUrlParam("save") == "1"){
        doGetUserinfo();
    }
}
