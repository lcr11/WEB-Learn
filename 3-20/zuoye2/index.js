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
		{src:"images/loading1.png", id:"loading1"},
		{src:"images/loading2.png", id:"loading2"},
		{src:"images/loading3.png", id:"loading3"},
		{src:"images/loading4.png", id:"loading4"},
		{src:"images/loading5.png", id:"loading5"},
		{src:"images/loading6.png", id:"loading6"}
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



(lib.loading1 = function() {
	this.initialize(img.loading1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,499);


(lib.loading2 = function() {
	this.initialize(img.loading2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,499,499);


(lib.loading3 = function() {
	this.initialize(img.loading3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,499);


(lib.loading4 = function() {
	this.initialize(img.loading4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,499);


(lib.loading5 = function() {
	this.initialize(img.loading5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,499);


(lib.loading6 = function() {
	this.initialize(img.loading6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,530,499);


(lib.loadingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loading1();

	this.instance_1 = new lib.loading2();

	this.instance_2 = new lib.loading3();

	this.instance_3 = new lib.loading4();

	this.instance_4 = new lib.loading5();

	this.instance_5 = new lib.loading6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498,499);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading
	this.loadingmc = new lib.loadingmc();
	this.loadingmc.setTransform(249,249.5,1,1,0,0,0,249,249.5);

	this.timeline.addTween(cjs.Tween.get(this.loadingmc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,498,499);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;