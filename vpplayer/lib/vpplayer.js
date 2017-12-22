
/**
 * https://github.com/rvprasath/vpplayer
 * © COPYRIGHT 2017-2018 Vpplayer v1.0
 * Licensed under the MIT license
 * @author vishnu prasath
 */

(function($) {
	$.fn.vpplayer = function(options) {

		h = $.extend({}, $.fn.vpplayer.defaults, options);

		h.w = function(){
			return window;
		}

		h.ev = function(el, evn, fn){
			return el.addEventListener(evn, fn);
		}

		h.nd = function(){
			return document;
		}

		h.c = function() {
			return Object.prototype;
		}
		
		String.prototype.con = function cn(s){
			var a = this.split("");
			for(var i=0; i<=a.length; i++){
				if(a[i] == s){
					return true;
				}
			}
			return false;
		}
		
		h.d = function(c, s, t, cs) {
			var tx,l;
			var e = document.createElement(c);
			if (s != undefined) {
				if(typeof s == "object" && s.constructor === Object){
					e.setAttribute(s.a,s.v);
				}else{
				s.forEach(function(z){
					e.setAttribute(z.a, z.v);
				});
				}
			}
			if (t != undefined) {
				tx = document.createTextNode(t);
				e.appendChild(tx);
			}
			if(cs != undefined){
				if(typeof cs == "object" && cs.constructor === Object){
					e.setAttribute("style",cs.a+":"+cs.v);
				}else{
				cs.forEach(function(sc, i){
					if(sc != undefined){
					if(i == 0){
						l = sc.a+":"+sc.v+";";
					}else{
						l += sc.a+":"+sc.v+";";
					}
					}
				});
				e.setAttribute("style",l);
			}
			}
			return e;
		}
		h.ct = function(e,t){
			var f;
			f = document.createTextNode(t);
			e.innerHTML = "";
			e.appendChild(f);
		}
		if(h.view != undefined){
			h.vwl = h.view.toLowerCase();
		}

		var p = cP();

		return $(this).each(
				function() {
					$(this).hide().html(p).fadeIn();
					iP();
					var cP = $('.track-name');
					cP
							.each(function() {
								var m = $(this), indent = m.width();
								m.cP = function() {
									indent--;
									m.css('text-indent', indent);
									if (indent < (-1
											* m.children('div#trackName')
													.width() - 20)) {
										indent = m.width();
									}
								};
								m.data('interval', setInterval(m.cP,
										1000 / 60));
							});

					h.ev(h.c.ply,"click",pL);
					h.ev(h.c.pE,"click",kpct);
					h.ev(h.nd(),"click",kpcf);
					h.ev(h.nd(),"keypress",kpk);
					h.ev(h.c.vl, "mouseover", vso);
					h.ev(h.c.vl, "mouseleave", vsl);
					h.ev(h.c.vr, "change", vlcc);
					h.ev(h.c.vr, "input", vlci);
					h.ev(h.c.vF, "click", vlck);
					h.ev(h.c.rwd,"click", r);
					h.ev(h.c.fwd,"click", f);
					h.ev(h.c.rpF, "click", lp);
					h.ev(h.c.rng, "input", ski);
					h.ev(h.c.rng, "change", skc);
				});
	};

	function cP() {
		h.c.pE = h.d("div", {
			a : "id",
			v : "vpplayer"
		},undefined,
		(h.playerColor != undefined)?(
				(h.playerColor.con(","))?(
				[{a:"background",v:"linear-gradient(" + h.playerColor+ ")"},
				  {a:"background",v:"-webkit-linear-gradient(" + h.playerColor+ ")"},
				  {a:"background",v:"-moz-linear-gradient(" + h.playerColor+ ")"},((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined)
				]):[{a:"background",v:h.playerColor},((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined)]
				
		):((h.vwl == "minimal")?{a:"height",v:"70px"}:undefined));

		var pE = h.c.pE;
		
		h.c.pc = h.d("div", {
			a : "class",
			v : "track-picture-container"
		},undefined,
		(h.playerColor != undefined)?(
				(h.playerColor.con(","))?(
					[{a:"box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]},
					 {a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]},
					 {a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.playerColor.split(",")[1]}]
					):([{a:"box-shadow",v:"inset -1px 0px 0px " + h.playerColor},
						{a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.playerColor},
						{a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.playerColor}])
				
		):undefined);

		h.c.pl = h.d("div", {
			a : "class",
			v : "playerName"
		},"vpplayer",undefined);

		h.c.trkcr = h.d("div", {
			a : "class",
			v : "track-container"
		},undefined,(h.vwl == "basic" || h.vwl == "minimal")?{a:"width",v:"100%"}:undefined);
		
		h.c.hF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-music playerHeadPhone"
		},undefined,undefined);
		
		
		h.c.pF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-play"
		},undefined,undefined);

		
		h.c.rF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-backward"
		},undefined,undefined);
		
		h.c.fF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-forward"
		},undefined,undefined);
		
		h.c.vF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-volume-up"
		},undefined,undefined);

		h.c.rpF = h.d("i", {
			a : "class",
			v : "glyphicon glyphicon-repeat"
		},undefined,undefined);
		
		h.c.asl = h.d("source", 
				[{a : "src",v : h.src},(h.type != undefined)?({a:"type",v:h.type}):({a:"type",v:"audio/mpeg"})],
				
				undefined,undefined);
		
		h.c.a = h.d("audio", {
			a : "id",
			v : "audio"
		},undefined,undefined);
	
		h.c.ac = h.d("div",undefined,undefined,undefined);
		
		h.c.a.appendChild(h.c.asl);
		h.c.ac.appendChild(h.c.a);

		h.c.eql = h.d("div", {
			a : "class",
			v : "equalizer"
		},undefined,undefined);
	
		h.c.b = [];
		for(var j=0; j<=32; j++){
			h.c.b[j] = h.d("div", {
				a : "class",
				v : "bar"
			},undefined,(h.equalizerColor != undefined)?
		(!h.equalizerColor.con(","))?({a:"background",v:h.equalizerColor}):undefined
		:undefined);
			h.c.eql.appendChild(h.c.b[j]);
		}

		h.c.tnd = h.d("div", {
			a : "class",
			v : "track-name-details"
		},undefined,
		(h.displayColor != undefined)?(
				(h.displayColor.con(","))?(
					[{a:"box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]},
					 {a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]},
					 {a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.displayColor.split(",")[1]}]
					):([{a:"box-shadow",v:"inset -1px 0px 0px " + h.displayColor},
						{a:"-webkit-box-shadow",v:"inset -1px 0px 0px " + h.displayColor},
						{a:"-moz-box-shadow",v:"inset -1px 0px 0px " + h.displayColor}])
				
		):undefined);
		
		h.c.tnd.appendChild(h.c.eql);
	
		h.c.tn = h.d("div", {
			a : "class",
			v : "track-name"
		},undefined,(h.trackNameColor != undefined)?
		(!h.trackNameColor.con(","))?({a:"color",v:h.trackNameColor}):undefined
		:undefined);

		h.c.trkscrl = h.d("div", {
			a : "id",
			v : "trackName"
		},(h.preloadMessage != undefined)?h.preloadMessage:"LOADING",undefined);
		h.c.tn.appendChild(h.c.trkscrl);
		
		h.c.tcr = h.d("div", {
			a : "class",
			v : "track-data-element-container"
		},undefined,
		(h.displayColor != undefined)?(
				(h.displayColor.con(","))?([
						{a:"background",v:"linear-gradient(" + h.displayColor+ ")"},
						{a:"background",v:"-webkit-linear-gradient(" + h.displayColor+ ")"},
						{a:"background",v:"-moz-linear-gradient(" + h.displayColor+ ")"}
					]):({a:"background",v:h.displayColor})
				
		):undefined);

		h.c.tcc = h.d("div", {
			a : "class",
			v : "track-control-container"
		},undefined,(h.vwl == "minimal")?{a:"height",v:"100%"}:undefined);

		h.c.tsc = h.d("div", {
			a : "class",
			v : "track-seek-container"
		},undefined,undefined);

		h.c.tcec = h.d("div", {
			a : "class",
			v : "track-controlelements-container"
		},undefined,undefined);
		
		h.c.tsh = h.d("div", {
			a : "class",
			v : "track-seekbar-handler"
		},undefined,undefined);

		h.c.tc = h.d("div", {
			a : "class",
			v : "track-completed"
		},undefined,undefined);
		
		h.c.tbr = h.d("div", {
			a : "class",
			v : "track-buffer"
		},undefined,undefined);

		h.c.tm = h.d("div", {
			a : "class",
			v : "time"
		},undefined,undefined);

		h.c.rng = h.d("input", 
				[{a:"type", v:"range"},{a:"class",v:"seeker"},{a:"id",v:"seekBar"},{a:"value",v:0}],undefined,undefined);

		h.c.stt = h.d("div", {
			a : "class",
			v : "startTime"
		},"--:--",undefined);

		h.c.edt = h.d("div", {
			a : "class",
			v : "endTime"
		},"--:--",undefined);

		h.c.tcg = h.d("div", {
			a : "class",
			v : "track-control-group"
		},undefined,undefined);

		h.c.vc = h.d("div", {
			a : "class",
			v : "volume-container"
		},undefined,undefined);
		
		h.c.plnres = h.d("span", {
			a : "class",
			v : "playerNameRes"
		},"vpplayer",undefined);
		
		h.c.rwd = h.d("div", {
			a : "class",
			v : "rewind"
		},undefined,undefined);
		
		h.c.ply = h.d("div", {
			a : "class",
			v : "play"
		},undefined,undefined);
		
		h.c.fwd = h.d("div", {
			a : "class",
			v : "forward"
		},undefined,undefined);

		h.c.rp = h.d("div", {
			a : "class",
			v : "repeat"
		},undefined,undefined);

		h.c.vl = h.d("div", {
			a : "class",
			v : "volume"
		},undefined,undefined);

		h.c.vrc = h.d("div", {
			a : "class",
			v : "volume-range-container"
		},undefined,undefined);

		h.c.vr = h.d("input", 
			[{a : "class",v : "volumeRange"},{a:"type",v:"range"},{a:"min",v:"0"},{a:"max",v:"100"},{a:"value",v:"100"}],
			undefined,undefined);
		
		h.c.vl.appendChild(h.c.vF);
		h.c.vrc.appendChild(h.c.vr);
		h.c.vl.appendChild(h.c.vrc);
		h.c.vc.appendChild(h.c.vl);

		h.c.rwd.appendChild(h.c.rF);
		h.c.ply.appendChild(h.c.pF);
		h.c.fwd.appendChild(h.c.fF);
		h.c.rp.appendChild(h.c.rpF);

		h.c.tcg.appendChild(h.c.rwd);
		h.c.tcg.appendChild(h.c.ply);
		h.c.tcg.appendChild(h.c.fwd);
		h.c.tcg.appendChild(h.c.rp);

		h.c.tcec.appendChild(h.c.tcg);
		h.c.tcec.appendChild(h.c.vc);
		h.c.tcec.appendChild(h.c.plnres);

		h.c.tm.appendChild(h.c.stt);
		h.c.tm.appendChild(h.c.edt);

		h.c.tsh.appendChild(h.c.tm);
		h.c.tsh.appendChild(h.c.rng);

		h.c.tsc.appendChild(h.c.tsh);
		h.c.tsc.appendChild(h.c.tc);
		h.c.tsc.appendChild(h.c.tbr);

		h.c.tcc.appendChild(h.c.tsc);
		h.c.tcc.appendChild(h.c.tcec);

		h.c.tcr.appendChild(h.c.tnd);
		h.c.tcr.appendChild(h.c.tn);

		h.c.trkcr.appendChild(h.c.ac);
		if(h.vwl != "minimal"){
		h.c.trkcr.appendChild(h.c.tcr);
		}
		h.c.trkcr.appendChild(h.c.tcc);

		h.c.pc.appendChild(h.c.hF);
		h.c.pc.appendChild(h.c.pl);
		if(h.vwl != "basic" && h.vwl != "minimal"){
			h.c.pE.appendChild(h.c.pc);
		}
		h.c.pE.appendChild(h.c.trkcr);

		return h.c.pE;
	}

	function iP() {
		var interval = setInterval(
				function() {
					
						if(h.vwl == "basic" || h.vwl == "minimal"){
							h.c.plnres.style.opacity = 1;
						}
						if(!isNaN(h.c.a.duration)){
							h.ct(h.c.stt, sm(h.c.a.currentTime));
							h.ct(h.c.edt, sm(h.c.a.duration));
							h.c.rng.setAttribute("min", h.c.a.currentTime);
							h.c.rng.setAttribute("max", Math.ceil(h.c.a.duration));
							h.c.rng.value = h.c.a.currentTime;
							if (h.trackName != undefined) {
							h.c.trkscrl.innerHTML = h.trackName;
							h.c.vpre = (h.c.vr.value/100);
							h.c.vrpre = h.c.vr.value;
							h.c.rpfl = 0;
						} else {
							h.c.trkscrl.innerHTML = "Untitled Track";
						}
						clearInterval(interval);
						}
				}, 500);
	}

	function uT() {
		h.upt = setInterval(function() {
			if(!h.c.a.paused){
			h.ct(h.c.stt, sm(h.c.a.currentTime));
			h.ct(h.c.edt, sm(h.c.a.duration));
			h.c.rng.value = Math.ceil(h.c.a.currentTime);
			eq(1);
			if(Math.round(h.c.a.currentTime) == Math.round(h.c.a.duration)){
				rpa();
				eq(0);
				clearInterval(h.upt);
				h.c.rng.value = 0;
				if(h.c.rpfl == 1){
					var lpi =  setTimeout(function(){
						h.c.ply.click();
				}, 2000);
				}
			}
			if(h.c.vr.value == 0){
				h.c.vF.setAttribute("class","glyphicon glyphicon glyphicon-volume-off");
			}else if(h.c.vr.value <= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-down");
			}else if(h.c.vr.value >= 50){
				h.c.vF.setAttribute("class","glyphicon glyphicon-volume-up");
			}
			}
		}, 100);
	}

	var pL = function() {
			if(h.c.a.duration > 0){
			if(this.children[0].getAttribute("class") == "glyphicon glyphicon-play"){
				h.c.a.play();
				this.setAttribute("class", "pause");
				this.children[0].setAttribute("class", "glyphicon glyphicon-pause");
				uT();
			}else if(this.children[0].getAttribute("class") == "glyphicon glyphicon-pause"){
				h.c.a.pause();
				this.setAttribute("class", "play");
				this.children[0].setAttribute("class", "glyphicon glyphicon-play");
				clearInterval(h.upt);
			}
			}
	}

	var ski = function(e) {
			h.c.a.currentTime = this.value;
	}
	var skc = function(e) {
			h.c.a.currentTime = this.value;
	}

	var  kpct = function(e){
			h.fl = true;
	}
	var kpcf = function(e){
			if(!(h.c.pE.contains(e.target))){
				h.fl = false;
			}
	}
	var kpk = function(e){
				if(e.which ==  32 && h.fl == true){
					h.c.ply.click();
				}
	}

	var vso = function(e){
			h.c.vrc.style.opacity = 1;
			if(h.w().innerWidth >= 610){
				h.c.vrc.style.width = 60+"px";
			}else if(h.w().innerWidth <= 610 && h.w().innerWidth >= 300){
				h.c.vrc.style.width = 55+"px";	
			}else if(h.w().innerWidth <= 300){
				h.c.vrc.style.width = 25+"px";
			}
	}
	var vsl = function(e){
			h.c.vrc.style.opacity = 0;
			h.c.vrc.style.width = 0+"px";		
	}

	var vlcc = function(e){
			h.c.a.volume = (this.value/100);
	}
	var vlci = function(e){
			h.c.a.volume = (this.value/100);
	}
	var vlck = function(e){
			if(h.c.a.volume != 0){
				h.c.vpre = h.c.a.volume;
				h.c.vpreic = this.getAttribute("class");
				h.c.vrpre = h.c.vr.value;
				this.setAttribute("class","glyphicon glyphicon-volume-off");
				h.c.a.volume = 0;
				h.c.vr.value = 0;
			}else if(h.c.a.volume == 0){
				this.setAttribute("class",h.c.vpreic);
				h.c.a.volume = h.c.vpre;
				h.c.vr.value = h.c.vrpre;
			}
	}

	var r = function(e){
			if(iap()){
			h.c.a.currentTime = (h.c.a.currentTime)-5;
			}
	}
	var f = function(e){
			if(iap()){
			h.c.a.currentTime = (h.c.a.currentTime)+5;
			}
	}

	var lp = function(e){
			if(h.c.rpfl == 0){
			this.style.textShadow = "0px 0px 10px #ffffff";
			h.c.rpfl = 1;
		}else if(h.c.rpfl == 1){
			this.style.textShadow = "1px 1px 3px #000";
			h.c.rpfl = 0;
		}
	}

	function iap(){
		if(!(h.c.a.paused)){
			return true;
		}else{
			return false;
		}
	}

	function eq(f) {
		if(f == 1){
		[].forEach.call(h.c.b, function(b) {
			b.style.height = "100%";
			b.style.margin = "0px 1% 0px 0px";
			b.style.transform = "scaleY(" + ((Math.random() * 100) / 90)
					+ ")";
		});
	}else{
		[].forEach.call(h.c.b, function(b) {
			b.style.height = "10%";
			b.style.margin = "21px 1% 0px 0px";
			b.style.transform = "scaleY(1)";
		});
	}
	}

	function sm(secs) {
		var hr = Math.floor(secs / 3600);
		var min = Math.floor((secs - (hr * 3600)) / 60);
		var sec = Math.floor(secs - (hr * 3600) - (min * 60));
		if (min < 10) {
			min = "0" + min;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		return min + ':' + sec;
	}

	function rpa() {
			h.c.ply.children[0].setAttribute("class", "glyphicon glyphicon-play");
			h.c.ply.setAttribute("class", "play");
			clearInterval(h.upt);
	}
}(jQuery));
