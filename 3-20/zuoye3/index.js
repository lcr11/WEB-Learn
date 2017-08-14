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
		{src:"images/head1.png", id:"head1"},
		{src:"images/head10.png", id:"head10"},
		{src:"images/head2.png", id:"head2"},
		{src:"images/head3.png", id:"head3"},
		{src:"images/head4.png", id:"head4"},
		{src:"images/head5.png", id:"head5"},
		{src:"images/head6.png", id:"head6"},
		{src:"images/head7.png", id:"head7"},
		{src:"images/head8.png", id:"head8"},
		{src:"images/head9.png", id:"head9"}
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



(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.head10 = function() {
	this.initialize(img.head10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,150);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.head3 = function() {
	this.initialize(img.head3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.head4 = function() {
	this.initialize(img.head4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,150);


(lib.head5 = function() {
	this.initialize(img.head5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.head6 = function() {
	this.initialize(img.head6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.head7 = function() {
	this.initialize(img.head7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,150);


(lib.head8 = function() {
	this.initialize(img.head8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,150);


(lib.head9 = function() {
	this.initialize(img.head9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,150);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.head1();

	this.instance_1 = new lib.head2();

	this.instance_2 = new lib.head3();

	this.instance_3 = new lib.head4();

	this.instance_4 = new lib.head5();

	this.instance_5 = new lib.head6();

	this.instance_6 = new lib.head7();

	this.instance_7 = new lib.head8();

	this.instance_8 = new lib.head9();

	this.instance_9 = new lib.head10();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading
	this.head = new lib.head();
	this.head.setTransform(75,75,1,1,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,150,150);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;