/**
 * Created by hongjac on 2017/6/5.
 */
if(ua.weixin){
    $.ajax({
        url: "https://wx.jeejoy.com/auth.php",
        dataType: "script"
    });

    wx.error(function (res) {
        console.log(JSON.stringify(res));
    });


    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: "地球上的另一个你，会在哪里？",
            link: location.href,
            imgUrl: location.origin + '/im' + 'public/asset/share.jpg',
            success: function () {
                AppData.tracking('event', 'Share', 'Wechat-Share_Friends');
            },
            cancel: function () {
            }
        });

        wx.onMenuShareAppMessage({
            title: "地球上的另一个你，会在哪里？",
            desc: "地球上的另一个你，会在哪里？",
            link: location.href,
            imgUrl: location.origin + '/im' + 'public/asset/share.jpg',
            success: function () {
                AppData.tracking('event', 'Share', 'Wechat-Share_Moments');
            },
            cancel: function () {
            }
        });

        wx.onMenuShareQQ({
            title: document.title,
            desc: "更多精彩敬请期待",
            link: location.href,
            imgUrl: location.origin + '/im' + 'public/asset/share.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });

        wx.onMenuShareQZone({
            title: document.title,
            desc: "分享",
            link: location.href,
            imgUrl: location.origin + '/im' + 'public/asset/share.jpg',
            success: function () {
            },
            cancel: function () {
            }
        });
    });
}