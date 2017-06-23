(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.num0 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.num1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.num2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.num3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.num4 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.num5 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.num6 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.num7 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.num8 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.num9 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.xg = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.元件13 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件12 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件11 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件10 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件7xxx = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// 图层 1
	this.instance = new lib.num0();

	this.instance_1 = new lib.num1();
	this.instance_1.setTransform(3.5,0.5);

	this.instance_2 = new lib.num2();
	this.instance_2.setTransform(1,0.5);

	this.instance_3 = new lib.num3();
	this.instance_3.setTransform(0.5,0);

	this.instance_4 = new lib.num4();
	this.instance_4.setTransform(0,0.5);

	this.instance_5 = new lib.num5();
	this.instance_5.setTransform(0.5,0);

	this.instance_6 = new lib.num6();

	this.instance_7 = new lib.num7();
	this.instance_7.setTransform(0.5,0.5);

	this.instance_8 = new lib.num8();

	this.instance_9 = new lib.num9();
	this.instance_9.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,19);


(lib.元件6xxx = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisObj = this;
        thisObj.n3.visible = false;
		E.addEvent("UpdatePercent", onUpdatePercent);
		
		function onUpdatePercent(e){
			var n1 = AppData.percent % 10;
			var n2 = Math.floor(AppData.percent / 10) % 10;
			var n3 = Math.floor(AppData.percent / 100);
			thisObj.n1.gotoAndStop(n1);
			thisObj.n2.gotoAndStop(n2);
			thisObj.n3.gotoAndStop(n3);
			thisObj.n3.visible = n3==1;
			console.log("percent:" , AppData.percent);
			if(AppData.percent == 100){
				E.removeEvent("UpdatePercent", onUpdatePercent);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.n3 = new lib.元件7();
	this.n3.setTransform(-2.5,11.5,1,1,0,0,0,6.5,9.5);

	this.n2 = new lib.元件7();
	this.n2.setTransform(12.5,11.5,1,1,0,0,0,6.5,9.5);

	this.n1 = new lib.元件7();
	this.n1.setTransform(27.5,11.5,1,1,0,0,0,6.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n1},{t:this.n2},{t:this.n3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,2,43,19);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(61));

	// 图层 6
	this.instance = new lib.xg();
	this.instance.setTransform(323.3,794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Bitmap 10
	this.instance_1 = new lib.元件13();
	this.instance_1.setTransform(412.1,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(71));

	// Bitmap 9
	this.instance_2 = new lib.元件12();
	this.instance_2.setTransform(387.5,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(73));

	// Bitmap 8
	this.instance_3 = new lib.元件11();
	this.instance_3.setTransform(363.1,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(75));

	// Bitmap 7
	this.instance_4 = new lib.元件10();
	this.instance_4.setTransform(338.9,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(77));

	// Bitmap 6
	this.instance_5 = new lib.元件9();
	this.instance_5.setTransform(314.1,772.8,1,1,0,0,0,8.5,8.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:755.3,alpha:1},6,cjs.Ease.get(1)).to({y:757.5},5,cjs.Ease.get(1)).wait(79));

	// Bitmap 5
	this.instance_6 = new lib.元件8();
	this.instance_6.setTransform(289.7,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(81));

	// Bitmap 4
	this.instance_7 = new lib.元件7xxx();
	this.instance_7.setTransform(265.1,772.5,1,1,0,0,0,8.5,8.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({y:755,alpha:1},6,cjs.Ease.get(1)).to({y:757.3},5,cjs.Ease.get(1)).wait(83));

	// Bitmap 3
	this.instance_8 = new lib.元件6xxx();
	this.instance_8.setTransform(240.8,772.8,1,1,0,0,0,8.5,8.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({y:755.3,alpha:1},6,cjs.Ease.get(1)).to({y:757.5},5,cjs.Ease.get(1)).wait(85));

	// Bitmap 2
	this.instance_9 = new lib.元件5();
	this.instance_9.setTransform(339.2,740,1,1,0,0,0,8.5,8.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({y:722.5,alpha:1},6,cjs.Ease.get(1)).to({y:724.7},5,cjs.Ease.get(1)).wait(87));

	// Bitmap 1
	this.instance_10 = new lib.元件4();
	this.instance_10.setTransform(314.8,740.2,1,1,0,0,0,8.5,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:722.7,alpha:1},6,cjs.Ease.get(1)).to({y:725},5,cjs.Ease.get(1)).wait(89));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BY5MAAAixyMBj+AAAMAAACxyg");
	this.shape.setTransform(320,569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1138);


// stage content:
(lib.loading = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.元件6();
	this.instance.setTransform(382.5,980.4,1,1,0,0,0,18.5,26);

	// 图层 2
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(0,0,1.172,1.172);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(375,667,750,1333.5);

})(LoadingLib = LoadingLib||{}, LoadingImages = LoadingImages||{}, createjs = createjs||{}, ss = ss||{});
var LoadingLib, LoadingImages, createjs, ss;