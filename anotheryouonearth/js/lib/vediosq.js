/**
 * Created by hongjac on 2017/6/3.
 */
(function () {
    var videoSequence = {};
    window.videoSequence = videoSequence;
    var sequenceLoader = new createjs.LoadQueue(false);
    var buffer = [];
    var files = [];
    var currentFrame = 0;
    var totalFrames = 0;
    var bufferFrames = 0;
    videoSequence.inBuffer = true;
    videoSequence.progress = 0;
    videoSequence.enableGC = true;
    var loadCount = 0;

    videoSequence.setup = function (num) {
        bufferFrames = num;
        sequenceLoader.addEventListener("fileload", this.sequenceFileLoad);
        sequenceLoader.addEventListener("complete", this.sequenceFileComplete);
        sequenceLoader.addEventListener("progress", this.sequenceFileProgress);
    };
    videoSequence.addSequence = function (arr) {
        files = files.concat(arr);
        totalFrames += arr.length;
    };
    videoSequence.startLoad = function () {
        sequenceLoader.loadManifest(files);
    };
    videoSequence.stopLoad = function () {
        sequenceLoader.close();
    };
    videoSequence.sequenceFileLoad = function(evt){
        loadCount++;
        var bufferLen = loadCount - currentFrame;
        buffer[evt.item.id] = evt.result;
        if(bufferLen >= bufferFrames || loadCount == totalFrames){
            if(videoSequence.inBuffer){
                E.fireEvent('bufferred');
                videoSequence.inBuffer = false;
            }
        }
        else if(bufferLen < bufferFrames / 10){
            videoSequence.inBuffer = true;
        }
    };
    videoSequence.sequenceFileProgress = function (evt) {
        videoSequence.progress = Math.floor(evt.progress * 100);
        E.fireEvent("UpdateVideoPercent");
    };
    videoSequence.sequenceFileComplete = function (evt) {
        E.fireEvent("VideoLoaded");
    }
    videoSequence.goto = function(num){
        var dFrame = loadCount - (num+1);
        if(dFrame < bufferFrames / 2 && loadCount < totalFrames){
            return null;
        }
        if(videoSequence.enableGC && num > bufferFrames){
            videoSequence.clearTo(num-10);
        }
        currentFrame = num;
        return buffer[num];
    }
    videoSequence.clearTo = function (num) {
            buffer[Math.max(0, Math.min(totalFrames-1, num))] = null;
    }
}).call(this);