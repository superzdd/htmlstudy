/**
 * Created by hongjac on 2017/5/31.
 */
var video;
var c;
var ctx

var tip = document.getElementById('tip');
var skip = document.getElementById('skip');
var mute = document.getElementById('mute');
var unmute = document.getElementById('unmute');
var mouseY = 0;
var targetY = 0;

var movePercent = 0;
var audioIndex = 1;
var vol = 1;
var playTime = 0;

var whw;
var whh;

var cw = 750;
var ch = 1334;
var vw = 750;
var vh = 1334;

var loadCount = 0;
var changeCount = 0;
var sound1;
var sound2;
var useSound;
var isMute = false;
var isStartPlay = false;
var playEnd = false;

var scale = window.innerWidth / 750;

var tipAlpha = 0;
var targetAlpha = 1;

var containerDiv = $('#container');

/////////////////////////////////////////////////////////////



createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", loadHandler);
createjs.Sound.registerSound("https://ideallife.image.alimmdn.com/impublic/asset/audio/cut1.mp3", "cut1");
createjs.Sound.registerSound("https://ideallife.image.alimmdn.com/impublic/asset/audio/cut2.mp3", "cut2");

document.addEventListener("WeixinJSBridgeReady", function () {
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", loadHandler);
    createjs.Sound.registerSound("https://ideallife.image.alimmdn.com/impublic/asset/audio/cut1.mp3", "cut1");
    createjs.Sound.registerSound("https://ideallife.image.alimmdn.com/impublic/asset/audio/cut2.mp3", "cut2");
});

function loadHandler() {
    loadCount++;
    if(loadCount == 2){
        initSound();
    }
}

function initSound() {
    useSound = createjs.Sound.createInstance("cut1");

    if(!isStartPlay){
        useSound.stop();
    }
    else{
        useSound.play();
        setTimeout(checkAudioTime, 2000);
    }
}

function onVideoEnd() {
    AppData.tracking('event', 'MV_Show', 'MV_End', 'End');
    playEnd = true;
    AppData.videoInfo.state = 2;
    E.fireEvent('VideoComplete');
    mute.style.display = 'none';
    unmute.style.display = 'none';
    skip.style.display = 'none';
    popBtn.style.display = 'block';
    if(tip.style.display == 'block'){
        tip.style.display = 'none';
    }
    if(AppData.isIOS){
        video.removeEventListener('ended', onVideoEnd);
        canvas.style.display = 'block';
        containerDiv.empty();
        createjs.Ticker.addEventListener("tick", stage);
    }

}
/////////////////////////////////////////////////////////////
var orient = new Orienter();
var isInitOri = true;
orient.onOrient = function (obj) {
    var lat = obj.lat;
    if(isInitOri && !obj.lat){
        lat = -70;
        isInitOri = false;
    }
    targetY = Math.floor(clamp((lat + 40) / 40 + .5, 0, 1) * window.innerHeight);
};
orient.init();

/////////////////////////////////////////////////////////////

resize();
window.addEventListener('resize', resize);
window.addEventListener('touchmove', onTouchMove);

skip.addEventListener('touchstart', onSkip);
mute.addEventListener('touchstart', onMute);
unmute.addEventListener('touchstart', onUnmute);


var isBuffer = true;
E.addEvent('ShowVideo', onShowVideo);
//E.addEvent('VideoLoaded', onVideoLoaded);
E.addEvent('PlayVideo', onPlayVideo);
E.addEvent('bufferred', onVideoBufferred);
E.addEvent('PAUSE_ALL', onPauseAll);
E.addEvent('ACTIVE_ALL', onActiveAll);

var isPauseAll = false;
function onPauseAll(e) {
    isPauseAll = true;
    if(AppData.videoInfo.state == 1){
        if(useSound){
            playTime = Math.max(playTime, useSound.position / 1000);
            useSound.stop();
        }

    }
}

function onActiveAll(e) {
    isPauseAll = false;
    if(AppData.videoInfo.state == 1){
        if(!isStartPlay){
            return;
        }
        if(!isMute){
            if(AppData.isIOS || (!AppData.isIOS && !videoSequence.inBuffer)){

                useSound = createjs.Sound.play("cut" + audioIndex);
                useSound.setPosition(playTime * 1000);
            }
        }
        render();
    }
}

function onShowVideo() {
    AppData.showVideo = true;
    if(ua.weixin){
        AppData.tracking('event', 'MV_Loading', 'MV_Loading');
    }
    if(AppData.isIOS){
        c = document.createElement('canvas');
        video = document.createElement('video');

        video.preload = 'auto';
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
        video.setAttribute('x-webkit-airplay', 'true');
        video.setAttribute('x5-video-player-type', 'h5');
        // video.setAttribute('x5-video-player-fullscreen', 'false');
        video.setAttribute('x5-video-orientation', 'landscape');


        containerDiv.append(c);
        ctx = c.getContext('2d');

        c.width = cw = vw = 750;
        c.height = ch = vh = 1334;
        video.src='https://ideallife.image.alimmdn.com/impublic/asset/video/full.mp4';
        video.addEventListener('ended', onVideoEnd);
        video.addEventListener('canplay', function () {
            E.fireEvent("VideoReady");
        });
        video.play();
        AppData.videoInfo.state = 1;
        //render();
    }
    else{
        vw = 360;
        vh = 640;
        cw = 750;
        ch = 1334;
        if(AppData.videoInfo.isFull || !videoSequence.inBuffer){
            E.fireEvent("VideoReady");
        }
    }
}

function onPlayVideo() {
    if(AppData.isIOS){
        //video.currentTime = 0.01;
        //video.play();
    }
    else{
        useSound.setPosition(.001);
    }
    AppData.videoInfo.state = 1;
    videoSequence.inBuffer = false;
    render();
}

function onVideoBufferred() {
    isBuffer = false;
    console.log("buffer over");
    if(isStartPlay){
        E.fireEvent("HideLoading");
        if(!isMute){
            useSound = createjs.Sound.play("cut" + audioIndex);
            useSound.setPosition(playTime * 1000);
        }
        render();
    }
    else{
        AppData.videoInfo.isFull = true;
        if(AppData.showVideo){
            E.fireEvent("VideoReady");
        }
    }

}

function render() {
    if(isPauseAll){
        return;
    }
    if(playEnd){
        return;
    }
    if(tip.style.display != "none"){
        if(targetAlpha == 0 && tipAlpha < .05){
            tip.style.display = "none";
        }
        else{
            tipAlpha += (targetAlpha - tipAlpha) * .1;
            tip.style.opacity = tipAlpha;
        }
    }
    var oldTime = playTime;
    /////////////////////////////////////////////////////////////////////////////////
    mouseY += (targetY - mouseY) * .3;
    checkVideoPercent();
    AppData.videoInfo.showPercent = (movePercent+1)*.5;
    var h1 = vh * (1-AppData.videoInfo.showPercent);
    var h2 = vh * AppData.videoInfo.showPercent;
    var h12 = ch * (1-AppData.videoInfo.showPercent);
    var h22 = ch * AppData.videoInfo.showPercent;

    vol += (clamp(Math.sqrt(Math.abs(Math.abs(movePercent) - .05)) * 3, 0, 1) - vol) * .3;
    if(useSound){
        if(!isMute){
            if(vol >= 0){
                useSound.volume = vol;
            }
        }
        else{
            useSound.volume = 0;
        }
    }
    /////////////////////////////////////////////////////////////////////////////////
    if(!isStartPlay){
        if(playTime > 0){
            AppData.tracking('event', 'MV_Show', 'MV_Start');
            //E.fireEvent('StartVideo');
            tip.style.display = 'block';
            setTimeout(hideTip, 6000);
            tip.addEventListener('touchstart', hideTip);
            if(useSound){
                useSound = createjs.Sound.play("cut" + audioIndex);
                useSound.setPosition(playTime * 1000);
                //if(AppData.isIOS){
                    setTimeout(checkAudioTime, 2000);
                //}

            }
            if(AppData.isIOS){
                canvas.style.display = 'none';
                c.style.display = 'block';
                createjs.Ticker.removeEventListener("tick", stage);
            }
            popBtn.style.display = 'none';
            skip.style.display = 'block';
            unmute.style.display = 'block';
            isStartPlay = true;
        }
    }

    if(AppData.isIOS){
        playTime = video.currentTime;
        if(h1 > 0 && h12 > 0){
            ctx.drawImage(video, vw ,h2, vw, h1, 0, h22, 750, h12);
        }
        if(h2 > 0 && h22 > 0){
            ctx.drawImage(video, 0 ,0, vw, h2, 0, 0, 750, h22);
        }
    }
    else{
        if(playTime  > 68){
            onVideoEnd();
            return;
        }
        if(isBuffer){
            return;
        }
        playTime = AppData.videoInfo.realTime;
        if(!videoSequence.goto(AppData.videoInfo.currentFrame)){
            videoSequence.inBuffer = true;
            isBuffer = true;
            E.fireEvent("ShotLoading");
            useSound.stop();
            return;
        }
    }
    if(Math.floor(playTime) > oldTime){
        AppData.tracking('event', 'MV_Show', 'MV_Show', Math.floor(playTime));
    }
    requestAnimationFrame(render);
}

function checkVideoPercent() {
    if(!isStartPlay){
        return;
    }

    movePercent = clamp((mouseY - whh) / whh, -1, 1);
    var pt = useSound.position;
    var change = false;
    if(movePercent > 0){
        if(audioIndex == 1){
            audioIndex = 2;
            useSound.stop();
            change = true;
        }
    }
    else{
        if(audioIndex == 2){
            audioIndex = 1;
            useSound.stop();
            change = true;
        }
    }
    if(change){
        if(!isMute){
            useSound = createjs.Sound.play("cut" + audioIndex);
            useSound.setPosition(pt);
        }
        changeCount++;
        AppData.tracking('event', 'Click', 'MV-Change', changeCount);
    }
}

function checkAudioTime() {
    if(AppData.videoInfo.state != 1){
        return;
    }
    console.log(useSound.position, playTime);
    if(!(isPauseAll || videoSequence.inBuffer)){
        useSound.setPosition(playTime * 1000);
    }
    setTimeout(checkAudioTime, 3000);
}

function clamp(n, min, max) {
    return Math.max(Math.min(n, max), min)
}

///////////////////////////////////////////////////////
function onSkip(e) {
    e.preventDefault();
    useSound.stop();
    if(!AppData.isIOS && videoSequence.progress < 100){
        videoSequence.stopLoad();
    }
    onVideoEnd();
}
function onMute(e) {
    e.preventDefault();
    isMute = false;
    mute.style.display = 'none';
    unmute.style.display = 'block';
    if(videoSequence.inBuffer && !AppData.isIOS){
        return;
    }
    useSound = createjs.Sound.play("cut" + audioIndex);
    useSound.setPosition(playTime * 1000);
}
function onUnmute(e) {
    e.preventDefault();
    isMute = true;
    useSound.stop();

    mute.style.display = 'block';
    unmute.style.display = 'none';
}

function hideTip() {
    targetAlpha = 0;
}

function onTouchMove(e) {
    e.preventDefault();
}

function resize() {
    AppData.windowWidth = window.innerWidth;
    AppData.windowHeight = window.innerHeight;
    whw = window.innerWidth / 2;
    whh = window.innerHeight / 2;
}