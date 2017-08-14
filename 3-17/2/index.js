(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_2.png", id:"cover_bg_2"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_bg_toppng复制3.png", id:"cover_bg_toppng复制3"},
		{src:"images/denglong.png", id:"denglong"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cover_bg_1 = function() {
	this.initialize(img.cover_bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_2 = function() {
	this.initialize(img.cover_bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_top = function() {
	this.initialize(img.cover_bg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_bg_toppng复制3 = function() {
	this.initialize(img.cover_bg_toppng复制3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.denglong = function() {
	this.initialize(img.denglong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.denglong1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.cover_bg_toppng复制3();
	this.instance.setTransform(-70.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 图层 1
	this.instance_1 = new lib.denglong();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:23.5,x:101.1,y:-6},0).wait(5).to({rotation:0,x:0,y:0},0).wait(5).to({rotation:-37,x:-131.3,y:87.4},0).wait(5).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,0,640,480);


(lib.coverbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coverbg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_1();

	this.instance_1 = new lib.coverbg();
	this.instance_1.setTransform(320,568,1,1,0,0,0,320,568);

	this.instance_2 = new lib.cover_bg_top();

	this.instance_3 = new lib.cover_bg_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// denglong1
	this.denglong1 = new lib.denglong1();
	this.denglong1.setTransform(136,136,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1).wait(1));

	// bg
	this.coverbg1 = new lib.coverbg1();
	this.coverbg1.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.coverbg1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-104,640.7,1240);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.cover = new lib.cover();
	this.cover.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,464,640.7,1240);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;