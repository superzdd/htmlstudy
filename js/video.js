var makeVideoPlayableInline = function() {
	"use strict";

	function e(e) {
		var r = void 0;
		var n = void 0;

		function i(t) {
			r = requestAnimationFrame(i);
			e(t - (n || t));
			n = t
		}
		this.start = function() {
			if(!r) {
				i(Date.now())
			}
		};
		this.stop = function() {
			cancelAnimationFrame(r);
			r = null
		}
	}

	function r(e, r, n, i) {
		function t(r) {
			if(Boolean(e[n]) === Boolean(i)) {
				r.stopImmediatePropagation()
			}
			delete e[n]
		}
		e.addEventListener(r, t, false);
		return t
	}

	function n(e, r, n, i) {
		function t() {
			return n[r]
		}

		function u(e) {
			n[r] = e
		}
		if(i) {
			u(e[r])
		}
		Object.defineProperty(e, r, {
			get: t,
			set: u
		})
	}
	var i = typeof Symbol === "undefined" ? function(e) {
		return "@" + (e || "@") + Math.random().toString(26)
	} : Symbol;
	var t = /iPhone|iPod/i.test(navigator.userAgent);
	var u = i();
	var a = i();
	var d = i("nativeplay");
	var o = i("nativepause");

	function v(e) {
		var r = new Audio;
		r.src = e.currentSrc || e.src;
		return r
	}
	var f = [];
	f.i = 0;

	function c(e, r) {
		if((f.tue || 0) + 200 < Date.now()) {
			e[a] = true;
			f.tue = Date.now()
		}
		e.currentTime = r;
		f[++f.i % 3] = r * 100 | 0 / 100
	}

	function s(e) {
		return e.driver.currentTime >= e.video.duration
	}

	function l(e) {
		var r = this;
		if(!r.hasAudio) {
			r.driver.currentTime = r.video.currentTime + e * r.video.playbackRate / 1e3;
			if(r.video.loop && s(r)) {
				r.driver.currentTime = 0
			}
		}
		c(r.video, r.driver.currentTime);
		if(r.video.ended) {
			r.video.pause(true);
			return false
		}
	}

	function p() {
		var e = this;
		var r = e[u];
		if(e.webkitDisplayingFullscreen) {
			e[d]();
			return
		}
		if(!e.paused) {
			return
		}
		if(!e.buffered.length) {
			e.load()
		}
		r.driver.play();
		r.updater.start();
		e.dispatchEvent(new Event("play"));
		e.dispatchEvent(new Event("playing"))
	}

	function m(e) {
		var r = this;
		var n = r[u];
		n.driver.pause();
		n.updater.stop();
		if(r.webkitDisplayingFullscreen) {
			r[o]()
		}
		if(r.paused && !e) {
			return
		}
		r.dispatchEvent(new Event("pause"));
		if(r.ended) {
			r[a] = true;
			r.dispatchEvent(new Event("ended"))
		}
	}

	function y(r, n) {
		var i = r[u] = {};
		i.hasAudio = n;
		i.video = r;
		i.updater = new e(l.bind(i));
		if(n) {
			i.driver = v(r)
		} else {
			i.driver = {
				muted: true,
				paused: true,
				pause: function t() {
					i.driver.paused = true
				},
				play: function a() {
					i.driver.paused = false;
					if(s(i)) {
						c(r, 0)
					}
				},
				get ended() {
					return s(i)
				}
			}
		}
		r.addEventListener("emptied", function() {
			if(i.driver.src && i.driver.src !== r.currentSrc) {
				c(r, 0);
				r.pause();
				i.driver.src = r.currentSrc
			}
		}, false);
		r.addEventListener("webkitbeginfullscreen", function() {
			if(!r.paused) {
				r.pause();
				r[d]()
			} else if(n && !i.driver.buffered.length) {
				i.driver.load()
			}
		});
		if(n) {
			r.addEventListener("webkitendfullscreen", function() {
				i.driver.currentTime = r.currentTime
			});
			r.addEventListener("seeking", function() {
				if(f.indexOf(r.currentTime * 100 | 0 / 100) < 0) {
					i.driver.currentTime = r.currentTime
				}
			})
		}
	}

	function h(e) {
		var i = e[u];
		e[d] = e.play;
		e[o] = e.pause;
		e.play = p;
		e.pause = m;
		n(e, "paused", i.driver);
		n(e, "muted", i.driver, true);
		n(e, "playbackRate", i.driver, true);
		n(e, "ended", i.driver);
		n(e, "loop", i.driver, true);
		r(e, "seeking");
		r(e, "seeked");
		r(e, "timeupdate", a, false);
		r(e, "ended", a, false)
	}

	function b(e) {
		var r = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
		var n = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
		if(n && !t || e[u]) {
			return
		}
		y(e, r);
		h(e);
		if(!r && e.autoplay) {
			e.play()
		}
	}
	return b
}();

var h5v = new function() {
	// 视频尺寸 1712 * 963
	this.video = {
		video: "",
		img: "",
		width: 640,
		height: 1038
	};
	this.videoobj = false;

	/**
	 * 播放视频
	 */
	this.play = function() {
		$('#iframe').show();
		h5v.videoobj.show();
		h5v.videoobj[0].play();
		h5v.OnPlay();
	};

	/**
	 * 开始播放事件
	 */
	this.OnPlay = function() {};
	/**
	 * 打开视频
	 */
	this.open = function(videosrc, imgsrc) {
		h5v.video.video = videosrc;
		h5v.video.img = imgsrc;
		h5v.init();
	};

	this.OnVideoEnd = function() {
		console.log("h5v.OnVideoEnd()");
		// getMain().gotoEnd();
		$("#ldwrapper").remove();
	};
	

	/**
	 * 播放完后调用
	 */
	this._OnVideoEnd = function() {
		if(h5v.isAndroid()) {
			$('.h5video').hide();
			h5v.videoobj.hide();
			h5v.OnVideoEnd();
			return;
		}

		// h5v.videoobj.animate({
		// 	opacity: 0
		// }, 100, 'ease-out', function() {
		// 	$('.h5video').hide();
		// 	h5v.videoobj.hide();
		// });

		// h5v.videoobj.animate({
		// 	opacity: 0
		// }, 100, 'ease-out', function() {
		// 	$('.h5video').hide();
		// 	h5v.videoobj.hide();
		// });
		h5v.videoobj.hide();

		console.log("h5v.OnVideoEnd()");
		console.log("about to reveal tempvideo");
		$("#tempvideo").css("display", "block");
		$("#tempvideo").bind("click", function() {
			console.debug("about to play");
			$(this).get(0).play();
		});
		h5v.OnVideoEnd();
	};

	this.pause = function() {
		$('#iframe').show();
		h5v.videoobj.show();
		h5v.videoobj[0].pause();
	};

	/**
	 * 创建iPhone版本的
	 * */
	this.ciphone = function() {
		var _width = h5v.video.width;
		var _height = h5v.video.height;
		var nav = navigator.userAgent.toLowerCase();
		var isOS8 = false;
		if(nav.indexOf('iphone os 8') >= 0 || nav.indexOf('iphone os 7') >= 0 || nav.indexOf('iphone os 4') >= 0 || nav.indexOf('iphone os 5') >= 0 || nav.indexOf('iphone os 6') >= 0) {
			_width = $(window).width();
			_height = $(window).height();
			isOS8 = true;
		}

		var html = '<video id="openvideo"' +
			'x-webkit-airplay="true"' +
			'style=" width:' + _width + 'px;height:' + _height + 'px;transform-origin: 0% 0% 0px;"' + ///
			'src="' + h5v.video.video + '"' +
			'webkit-playsinline="true"' +
			'preload="auto" poster="' + h5v.video.img + '" ' +
			'></video>';

		$('body').prepend(html);
		/// alert(navigator.userAgent);
		// alert($(window).width()+','+$(window).height());
		h5v.videoobj = $('#openvideo');

		//  h5v.videoobj.css('transform','matrix('+$(window).width()/h5v.video.width+', 0, 0,'+$(window).height()/h5v.video.height+', 0, 0)');
		h5v.OnPlay = function() {
			/*    if(isOS8){
			         h5v.videoobj.css('position','initial');  
			           $('#indexwrapper').hide();$('#ldwrapper').hide();
			    }*/

			if(!isOS8) {
				h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.width + ', 0, 0,' + $(window).height() / h5v.video.height + ', 0, 0)');
			}
			var time_matrix = setInterval(function() {
				if(!isOS8) {
					// if($(window).width()>$(window).height()){
					// 	h5v.videoobj.css('width',_width);
					// 	h5v.videoobj.css('height',_height);
					// 	h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.width + ', 0, 0,' + $(window).height() / h5v.video.height + ', 0, 0)');
					// }else{
					// 	h5v.videoobj.css('width',_height);
					// 	h5v.videoobj.css('height',_width);
					// 	h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.height + ', 0, 0,' + $(window).height() / h5v.video.width + ', 0, 0)');
					// }
					
					h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.width + ', 0, 0,' + $(window).height() / h5v.video.height + ', 0, 0)');
					// console.log("h5v.videoobj.css:"+h5v.videoobj.css('transform'));
				}
			}, 1000);

			var hvideo = h5v.videoobj[0];
			var curTime = setInterval(function() {
				if(!curTime) {
					return;
				}

				if(hvideo.paused || hvideo.duration == 0) {
					console.log('hvideo.paused');
					return;
				}
				if(hvideo.duration > 10 && (hvideo.duration - hvideo.currentTime) < 1) {
					/*
					if(isOS8){
					  
					  $('#indexwrapper').show();$('#ldwrapper').show();
					}
					*/
					hvideo.pause();
					clearInterval(time_matrix);
					clearInterval(curTime);
					h5v._OnVideoEnd();
					curTime = false;
					console.log(hvideo.duration - hvideo.currentTime);
				}

			}, 100);
		};
		/*
		h5v.videoobj.on('ended',function(){
		    return;
		    if(sys.isclick('videoended')){
		        return;
		    }
		    console.log("videoobj.ended");
		    h5v._OnVideoEnd();
		});
		*/

		window.makeVideoPlayableInline(h5v.videoobj[0]);
		console.log('window.makeVideoPlayableInline(h5v.videoobj[0]);');

	};

	this.candroid = function() {
		var htmliframe = '<iframe  frameborder="no" id="iframe" class="iframe"  width="0" height="0" ></iframe>';
		$('body').prepend(htmliframe);
		var iframe = $('#iframe');
		var ifr = iframe[0].contentWindow.document;
		var qj = $(ifr).find('body');

		var html = '<style>' +
			' html{width:100%;}  body{margin: 0; width: 100%;' +
			'padding: 0;}         ' +
			'#openvideo{' +
			'position: absolute;' +
			'top: 0px;' +
			'left: 0px;' +
			'overflow: hidden;' +
			' width:' + h5v.video.width + 'px;' +
			'height:' + h5v.video.height + 'px;' +
			'border: 0;' +
			' background-color: black;' +
			' margin: 0 auto;' +
			' font-size: 100%;' +
			' line-height: 0;' +
			' vertical-align: baseline;' +
			'-webkit-user-select: none;' +
			'-moz-user-select: none;' +
			'-ms-user-select: none;' +
			' user-select: none;' +
			' outline: none;' +
			' text-align: center; ' +
			'  z-index:9;transform-origin: 0% 0% 0px;' +
			'}</style><video id="openvideo"' +
			'x-webkit-airplay="true"' +
			'src="' + h5v.video.video + '"' +
			'webkit-playsinline="true"' +
			'preload="auto" poster="' + h5v.video.img + '" ' +
			'width="100%" height="' + h5v.video.height + '" ' +
			'></video>';
		qj.append(html);
		h5v.videoobj = qj.find('#openvideo');
		var time_matrix; ///定时器，用于控制视频的宽高
		h5v.OnPlay = function() {

			h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.width + ', 0, 0,' + $(window).height() / h5v.video.height + ', 0, 0)');
			time_matrix = setInterval(function() {
				h5v.videoobj.css('transform', 'matrix(' + $(window).width() / h5v.video.width + ', 0, 0,' + $(window).height() / h5v.video.height + ', 0, 0)');

			}, 1000);

			/*
			 var hvideo=h5v.videoobj[0];
			  var curTime= setInterval(function(){
			   if(!curTime){
			       return;
			   }
			   if(hvideo.paused||hvideo.duration==0){
			       console.log('hvideo.paused');
			       return;
			   }
			   if(hvideo.duration>10&&(hvideo.duration-hvideo.currentTime)<=0.3){
			     ///  alert(hvideo.duration); alert(hvideo.currentTime);
			       hvideo.pause();
			       clearInterval(time_matrix);
			       clearInterval(curTime);
			       h5v._OnVideoEnd();
			       curTime=false;
			       console.log(hvideo.duration-hvideo.currentTime);
			       iframe.remove(); 
			   }
			    
			},100);
			*/

		}

		h5v.videoobj.on('ended', function() {
			/* if(sys.isclick('videoended')){
			     return;
			 }*/
			h5v._OnVideoEnd();
			iframe.remove();
			$("#tempvideo").css("display", "block");
			$("#tempvideo").bind("click", function() {
				console.debug("about to play");
				$(this).get(0).play();
			});
			clearInterval(time_matrix);
			console.log("videoobj.ended");
		});

	};

	this.init = function() {
		if(h5v.videoobj) {
			return;
		}
		
		if(h5v.isiPhone()) {
			h5v.ciphone();
		} else {
			h5v.candroid();
		}
	};

	/**
	 * 是否为Android
	 */
	this.isAndroid = function() {
		var nav = navigator.userAgent.toLowerCase();
		if(nav.indexOf('android') >= 0) {
			return true;
		} else {
			return false;
		}
	};
	/**
	 * 是否为iPhone环境
	 */
	this.isiPhone = function() {
		//   return true;/////////////test
		var nav = navigator.userAgent.toLowerCase();
		if(nav.indexOf('iphone') >= 0) {
			return true;
		} else {
			return false;
		}
	};

	$(function() {
		// h5v.open('resource/clubmed/clubmedwc.mp4', 'resource/clubmed/video_cover.jpg');
		// h5v.open('resource/clubmed/1.mp4', 'resource/clubmed/video_cover.jpg');
		h5v.open('img/video.mp4', 'img/video_cover.jpg');
	});
};