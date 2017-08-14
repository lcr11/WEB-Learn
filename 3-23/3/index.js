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
		{src:"images/a.png", id:"a"},
		{src:"images/b.png", id:"b"},
		{src:"images/c.png", id:"c"},
		{src:"images/count_bg.png", id:"count_bg"},
		{src:"images/count_man.png", id:"count_man"},
		{src:"images/count_man_2.png", id:"count_man_2"},
		{src:"images/count_man_3.png", id:"count_man_3"},
		{src:"images/count_txt.png", id:"count_txt"},
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_2.png", id:"cover_bg_2"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2.png", id:"cover_man_2"},
		{src:"images/cover_title.png", id:"cover_title"},
		{src:"images/cp_1.png", id:"cp_1"},
		{src:"images/cp_2.png", id:"cp_2"},
		{src:"images/cp_3.png", id:"cp_3"},
		{src:"images/d.png", id:"d"},
		{src:"images/denglong.png", id:"denglong"},
		{src:"images/q1_a.png", id:"q1_a"},
		{src:"images/q1_b.png", id:"q1_b"},
		{src:"images/q1_c.png", id:"q1_c"},
		{src:"images/q1_d.png", id:"q1_d"},
		{src:"images/r1_l.png", id:"r1_l"},
		{src:"images/r1_r.png", id:"r1_r"},
		{src:"images/r2_l.png", id:"r2_l"},
		{src:"images/r2_r.png", id:"r2_r"},
		{src:"images/r3_l.png", id:"r3_l"},
		{src:"images/r3_r.png", id:"r3_r"},
		{src:"images/r4_l.png", id:"r4_l"},
		{src:"images/r4_r.png", id:"r4_r"},
		{src:"images/r_man_1111.png", id:"r_man_1111"},
		{src:"images/r_man_2_1.png", id:"r_man_2_1"},
		{src:"images/r_man_2_2.png", id:"r_man_2_2"},
		{src:"images/r_man_3.png", id:"r_man_3"},
		{src:"images/result_b_2.png", id:"result_b_2"},
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"},
		{src:"images/zhz.png", id:"zhz"}
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



(lib.a = function() {
	this.initialize(img.a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.count_bg = function() {
	this.initialize(img.count_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_man = function() {
	this.initialize(img.count_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_2 = function() {
	this.initialize(img.count_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_3 = function() {
	this.initialize(img.count_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_txt = function() {
	this.initialize(img.count_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


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


(lib.cover_man_1 = function() {
	this.initialize(img.cover_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_man_2 = function() {
	this.initialize(img.cover_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_title = function() {
	this.initialize(img.cover_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,413);


(lib.cp_1 = function() {
	this.initialize(img.cp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_2 = function() {
	this.initialize(img.cp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_3 = function() {
	this.initialize(img.cp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.d = function() {
	this.initialize(img.d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.denglong = function() {
	this.initialize(img.denglong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.q1_a = function() {
	this.initialize(img.q1_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_b = function() {
	this.initialize(img.q1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_c = function() {
	this.initialize(img.q1_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_d = function() {
	this.initialize(img.q1_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.r1_l = function() {
	this.initialize(img.r1_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r1_r = function() {
	this.initialize(img.r1_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.r2_l = function() {
	this.initialize(img.r2_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r2_r = function() {
	this.initialize(img.r2_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r3_l = function() {
	this.initialize(img.r3_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r3_r = function() {
	this.initialize(img.r3_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r4_l = function() {
	this.initialize(img.r4_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r4_r = function() {
	this.initialize(img.r4_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r_man_1111 = function() {
	this.initialize(img.r_man_1111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.r_man_2_1 = function() {
	this.initialize(img.r_man_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_2_2 = function() {
	this.initialize(img.r_man_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_3 = function() {
	this.initialize(img.r_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.result_b_2 = function() {
	this.initialize(img.result_b_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.topic_1_bg1 = function() {
	this.initialize(img.topic_1_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_1_bg2 = function() {
	this.initialize(img.topic_1_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.zhz = function() {
	this.initialize(img.zhz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.textmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.parent.gotoAndPlay(3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0qipMApVAAAIAAFTMgpVAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("A0qltMApVAAAIAALbMgpVAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("A0qpRMApVAAAIAASjMgpVAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("A0qsdMApVAAAIAAY7MgpVAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A0qvpMApVAAAIAAfTMgpVAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("A0qzkMApVAAAMAAAAnJMgpVAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("A0q3AMApVAAAMAAAAuBMgpVAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("A0qbIMAAAg2QMApVAAAMAAAA2Qg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:128.4,y:15.1}).wait(4).to({graphics:mask_graphics_4,x:128.4,y:34.7}).wait(5).to({graphics:mask_graphics_9,x:128.4,y:57.5}).wait(5).to({graphics:mask_graphics_14,x:128.4,y:77.9}).wait(5).to({graphics:mask_graphics_19,x:128.4,y:98.3}).wait(5).to({graphics:mask_graphics_24,x:128.4,y:123.4}).wait(5).to({graphics:mask_graphics_29,x:128.4,y:145.4}).wait(5).to({graphics:mask_graphics_34,x:128.4,y:171.8}).wait(1));

	// 图层 1
	this.instance = new lib.count_txt();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,32.1);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).dr(-281.25,-117.7,562.5,235.4);
	this.shape.setTransform(281.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,564.5,237.4);


(lib.result3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_2_1();

	this.instance_1 = new lib.r_man_2_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.q1_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egs2AFsIAArYMBZtAAAIAALYg");
	this.shape.setTransform(287.2,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,574.4,73);


(lib.q1_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAFjIAArFMBaUAAAIAALFg");
	this.shape.setTransform(289.1,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,578.2,71);


(lib.q1_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAFjIAArFMBaUAAAIAALFg");
	this.shape.setTransform(289.1,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,578.2,71);


(lib.q1_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgsNAGQIAAsfMBYbAAAIAAMfg");
	this.shape.setTransform(283,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.personmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_1_bg1();

	this.instance_1 = new lib.topic_1_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.persongmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_man_1();

	this.instance_1 = new lib.cover_man_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();
	this.instance.setTransform(-72.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-72,145,144);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();
	this.instance.setTransform(-72.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-72,145,144);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1111();
	this.instance.setTransform(-181,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-208.5,362,417);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1111();
	this.instance.setTransform(-181,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-208.5,362,417);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_title();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_title();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.duilian_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// as
	this.text = new cjs.Text("this.stop();", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 144;
	this.text.setTransform(247.2,189.9);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层 4
	this.instance = new lib.r4_r();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// 图层 3
	this.instance_1 = new lib.r3_r();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层 2
	this.instance_2 = new lib.r2_r();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 1
	this.instance_3 = new lib.r1_r();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.duilian_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 图层 4
	this.instance = new lib.r4_l();
	this.instance.setTransform(-1.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// 图层 3
	this.instance_1 = new lib.r3_l();
	this.instance_1.setTransform(-1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层 2
	this.instance_2 = new lib.r2_l();
	this.instance_2.setTransform(-1.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 1
	this.instance_3 = new lib.r1_l();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.denglong1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:23.5,x:101.1,y:-6},0).wait(5).to({rotation:0,x:0,y:0},0).wait(5).to({rotation:-37,x:-131.3,y:87.4},0).wait(5).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.currentmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0,281);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,189.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(-1.1,94.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 1
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coverbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.count_person1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man();
	this.instance.setTransform(-12.2,0);

	this.instance_1 = new lib.count_man_2();
	this.instance_1.setTransform(-12.5,0);

	this.instance_2 = new lib.count_man_3();
	this.instance_2.setTransform(-12.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,0,190,290);


(lib.chuanpiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_1();
	this.instance.setTransform(118.8,0);

	this.instance_1 = new lib.cp_2();
	this.instance_1.setTransform(118.8,2);

	this.instance_2 = new lib.cp_3();
	this.instance_2.setTransform(120.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.8,0,244,450);


(lib.bgmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.again2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5FKdIAA05MAyLAAAIAAU5g");
	this.shape.setTransform(160.6,66.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321.2,133.8);


(lib.again = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-154.65,-51.8,309.3,103.6);
	this.shape.setTransform(154.7,51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309.3,103.6);


(lib.result4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// zhz.png
	this.instance = new lib.补间29("synched",0);
	this.instance.setTransform(131.9,250.5);

	this.instance_1 = new lib.补间30("synched",0);
	this.instance_1.setTransform(131.9,250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},9).wait(1));

	// 图层 1
	this.instance_2 = new lib.r_man_3();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.r_man_1mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// result1
	this.instance = new lib.补间15("synched",0);
	this.instance.setTransform(181,208.5);

	this.instance_1 = new lib.补间16("synched",0);
	this.instance_1.setTransform(181,208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},45).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.q1_a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.q1_a = new lib.q1_a_1();
	this.q1_a.setTransform(283,40,1,1,0,0,0,283,40);

	this.timeline.addTween(cjs.Tween.get(this.q1_a).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.manmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// result4
	this.chuanpiao = new lib.chuanpiao();
	this.chuanpiao.setTransform(74,263,1,1,0,0,0,122,225);
	this.chuanpiao._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chuanpiao).wait(3).to({_off:false},0).wait(1));

	// result3
	this.result4 = new lib.result4();
	this.result4.setTransform(188.3,245.9,1,1,0,0,0,165.5,250.5);
	this.result4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result4).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// result2
	this.result3 = new lib.result3();
	this.result3.setTransform(182.3,268.9,1,1,0,0,0,149.5,258.5);
	this.result3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result3).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// result1
	this.r_man_1mc = new lib.r_man_1mc();
	this.r_man_1mc.setTransform(181,250.6,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.r_man_1mc).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,42.1,362,417);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.again = new lib.again();
	this.again.setTransform(0.1,0,1,1,0,0,0,154.7,51.8);
	this.again.alpha = 0.012;

	this.instance = new lib.result_b_2();
	this.instance.setTransform(-121,-43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.again}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-51.8,309.3,103.6);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.again = new lib.again();
	this.again.setTransform(0.1,0,1,1,0,0,0,154.7,51.8);
	this.again.alpha = 0.012;

	this.instance = new lib.result_b_2();
	this.instance.setTransform(-121,-43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.again}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-51.8,309.3,103.6);


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

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
		
		this.start.addEventListener("click", start_click.bind(this));
		
		function start_click()
		{
			this.gotoAndPlay(11);//封面的离场场动画
		}
	}
	this.frame_23 = function() {
		this.stop();
		this.parent.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(14).call(this.frame_23).wait(1));

	// button
	this.start = new lib.start();
	this.start.setTransform(317.9,857.4,1,1,0,0,0,281.2,117.7);
	this.start.alpha = 0.012;
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(9).to({_off:true},1).wait(14));

	// title
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(320,-221.8);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(333.5,-238.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:333.5,y:387.2},9).to({startPosition:0},1).to({_off:true,y:-238.8},13).wait(1));

	// person
	this.personmc = new lib.persongmc();
	this.personmc.setTransform(320,1522.4,1,1,0,0,0,320,338.5);

	this.timeline.addTween(cjs.Tween.get(this.personmc).to({y:815.1},9).wait(1).to({y:1625.7},13).wait(1));

	// top
	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.setTransform(320,-132.8);

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.setTransform(320,-121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:89},9).to({startPosition:0},1).to({_off:true,y:-121.3},13).wait(1));

	// denglong2
	this.denglong1 = new lib.denglong1();
	this.denglong1.setTransform(747.5,136,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1).to({x:502.8},9).wait(1).to({x:743.7},13).wait(1));

	// denglong1
	this.denglong1_1 = new lib.denglong1();
	this.denglong1_1.setTransform(-181.3,136,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1_1).to({x:136},9).wait(1).to({x:-101},13).wait(1));

	// bg
	this.coverbg1 = new lib.coverbg1();
	this.coverbg1.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.coverbg1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.3,-428.3,1058.8,2289.2);


(lib.count_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.texftmc = new lib.textmc();
	this.texftmc.setTransform(87.3,482.4,1,1,0,0,0,129.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.texftmc).wait(1));

	// man
	this.instance = new lib.count_person1();
	this.instance.setTransform(95,145,1,1,0,0,0,95,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bgmc = new lib.bgmc();
	this.bgmc.setTransform(82.9,440.8,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgmc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.1,-127.2,640,1136);


(lib.result_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		console.log(score)
		if(score == 1){
			this.manmc.gotoAndStop(0);
			this.duilian_left.gotoAndStop(0);
			this.duilian_right.gotoAndStop(0);
		}
		if(score == 2){
			this.manmc.gotoAndStop(1);
			this.duilian_left.gotoAndStop(1);
			this.duilian_right.gotoAndStop(1);
		}
		if(score == 3){
			this.manmc.gotoAndStop(2);
			this.duilian_left.gotoAndStop(2);
			this.duilian_right.gotoAndStop(2);
		}
		if(score == 4){
			this.manmc.gotoAndStop(3);
			this.duilian_left.gotoAndStop(3);
			this.duilian_right.gotoAndStop(3);
		}
	}
	this.frame_14 = function() {
		this.stop();
		this.again2.addEventListener("click", again_click.bind(this));
		
		function again_click()
		{
			this.gotoAndPlay(16);
			score=0;
		}
	}
	this.frame_24 = function() {
		this.stop();
		this.parent.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// btn_mc
	this.again2 = new lib.again2();
	this.again2.setTransform(336.5,804.9,1,1,0,0,0,160.6,66.9);
	this.again2.alpha = 0.012;
	new cjs.ButtonHelper(this.again2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.again2).to({_off:true},15).wait(10));

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("As1DlIAAnJIZrAAIAAHJg");
	var mask_graphics_4 = new cjs.Graphics().p("As1DlIAAnJIZrAAIAAHJg");
	var mask_graphics_5 = new cjs.Graphics().p("AspHvIAAvdIZTAAIAAPdg");
	var mask_graphics_6 = new cjs.Graphics().p("AseL4IAA3vIY9AAIAAXvg");
	var mask_graphics_7 = new cjs.Graphics().p("AsSQCMAAAggDIYlAAMAAAAgDg");
	var mask_graphics_8 = new cjs.Graphics().p("AsHUMMAAAgoXIYPAAMAAAAoXg");
	var mask_graphics_9 = new cjs.Graphics().p("Ar7YWMAAAgwrIX3AAMAAAAwrg");
	var mask_graphics_10 = new cjs.Graphics().p("ArwcfMAAAg49IXhAAMAAAA49g");
	var mask_graphics_11 = new cjs.Graphics().p("EgLkAgpMAAAhBRIXJAAMAAABBRg");
	var mask_graphics_12 = new cjs.Graphics().p("EgLZAkzMAAAhJlIWzAAMAAABJlg");
	var mask_graphics_13 = new cjs.Graphics().p("EgLNAo9MAAAhR5IWbAAMAAABR5g");
	var mask_graphics_14 = new cjs.Graphics().p("EgLCAtGMAAAhaLIWFAAMAAABaLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:567.8,y:175.9}).wait(4).to({graphics:mask_graphics_4,x:567.8,y:175.9}).wait(1).to({graphics:mask_graphics_5,x:567.8,y:207.1}).wait(1).to({graphics:mask_graphics_6,x:567.8,y:238.2}).wait(1).to({graphics:mask_graphics_7,x:567.8,y:269.4}).wait(1).to({graphics:mask_graphics_8,x:567.8,y:300.6}).wait(1).to({graphics:mask_graphics_9,x:567.8,y:331.7}).wait(1).to({graphics:mask_graphics_10,x:567.8,y:362.9}).wait(1).to({graphics:mask_graphics_11,x:567.8,y:394.1}).wait(1).to({graphics:mask_graphics_12,x:567.8,y:425.2}).wait(1).to({graphics:mask_graphics_13,x:567.8,y:456.4}).wait(1).to({graphics:mask_graphics_14,x:567.8,y:487.5}).wait(11));

	// duilian_right
	this.duilian_right = new lib.duilian_right();
	this.duilian_right.setTransform(577.1,462.7,1,1,0,0,0,70.5,269.5);

	this.duilian_right.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.duilian_right).wait(25));

	// 图层 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AvOExIAApiIedAAIAAJig");
	var mask_1_graphics_4 = new cjs.Graphics().p("AvOExIAApiIedAAIAAJig");
	var mask_1_graphics_5 = new cjs.Graphics().p("AvOKRIAA0hIedAAIAAUhg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AvOPxIAA/hIedAAIAAfhg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AvOVRMAAAgqhIedAAMAAAAqhg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AvOawMAAAg1gIedAAMAAAA1gg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgPOAgQMAAAhAgIedAAMAAABAgg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgPOAlwMAAAhLfIedAAMAAABLfg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgPOArQMAAAhWfIedAAMAAABWfg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgPOAwwMAAAhhfIedAAMAAABhfg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgPOA2PMAAAhseIedAAMAAABseg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgPOA7vMAAAh3dIedAAMAAAB3dg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:78.4,y:168.3}).wait(4).to({graphics:mask_1_graphics_4,x:78.4,y:168.3}).wait(1).to({graphics:mask_1_graphics_5,x:78.4,y:203.4}).wait(1).to({graphics:mask_1_graphics_6,x:78.4,y:238.6}).wait(1).to({graphics:mask_1_graphics_7,x:78.4,y:273.8}).wait(1).to({graphics:mask_1_graphics_8,x:78.4,y:309}).wait(1).to({graphics:mask_1_graphics_9,x:78.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_10,x:78.4,y:379.3}).wait(1).to({graphics:mask_1_graphics_11,x:78.4,y:414.5}).wait(1).to({graphics:mask_1_graphics_12,x:78.4,y:449.7}).wait(1).to({graphics:mask_1_graphics_13,x:78.4,y:484.9}).wait(1).to({graphics:mask_1_graphics_14,x:78.4,y:520}).wait(11));

	// duilian_left
	this.duilian_left = new lib.duilian_left();
	this.duilian_left.setTransform(77.2,468,1,1,0,0,0,62,270);

	this.duilian_left.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.duilian_left).wait(25));

	// btn
	this.instance = new lib.补间27("synched",0);
	this.instance.setTransform(299.7,1249.1);

	this.instance_1 = new lib.补间28("synched",0);
	this.instance_1.setTransform(316.4,791.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({_off:true,x:316.4,y:791.3},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(1).to({startPosition:0},0).to({y:1223.4},9).wait(1));

	// man
	this.manmc = new lib.manmc();
	this.manmc.setTransform(326,-250.5,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.manmc).wait(4).to({y:401.9},10).wait(1).to({y:-317.2},9).wait(1));

	// top
	this.instance_2 = new lib.补间31("synched",0);
	this.instance_2.setTransform(320,-132.7);

	this.instance_3 = new lib.补间32("synched",0);
	this.instance_3.setTransform(320,89);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:89},4).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},4).wait(11).to({startPosition:0},0).to({y:-155.7},9).wait(1));

	// bg
	this.instance_4 = new lib.cover_bg_2();
	this.instance_4.setTransform(0,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},15).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-417,647.6,1717.9);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		var lock = 0;
		
		this.q1_a1.addEventListener("click", question1_a_click.bind(this));
		function question1_a_click()
		{
			if(lock == 0){
				score+=1;
				this.currentmc.gotoAndStop(1);
				this.gotoAndPlay(31);
				lock = 1
			}
		}
		this.q1_b.addEventListener("click", question1_b_click.bind(this));
		function question1_b_click()
		{
			if(lock == 0){
				score+=2;
				this.currentmc.gotoAndStop(2);
				this.gotoAndPlay(31);
				lock = 1
			}
		}
		this.q1_c.addEventListener("click", question1_c_click.bind(this));
		function question1_c_click()
		{
			if(lock == 0){
				score+=3;
				this.currentmc.gotoAndStop(3);
				this.gotoAndPlay(31);
				lock = 1
			}
		}
		this.q1_d.addEventListener("click", question1_d_click.bind(this));
		function question1_d_click()
		{
			if(lock == 0){
				score+=4;
				this.currentmc.gotoAndStop(4);
				this.gotoAndPlay(31);
				lock = 1
			}
		}
	}
	this.frame_46 = function() {
		if(score==4){
			this.currentmc.gotoAndStop(0);		
		}
	}
	this.frame_50 = function() {
		if(score==3){
			this.currentmc.gotoAndStop(0);		
		}
	}
	this.frame_55 = function() {
		if(score==2){
			this.currentmc.gotoAndStop(0);		
		}
	}
	this.frame_60 = function() {
		if(score==1){
			this.currentmc.gotoAndStop(0);		
		}
	}
	this.frame_70 = function() {
		this.stop();
		this.parent.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(16).call(this.frame_46).wait(4).call(this.frame_50).wait(5).call(this.frame_55).wait(5).call(this.frame_60).wait(10).call(this.frame_70).wait(1));

	// as
	this.text = new cjs.Text("if(score==2){\nthis.currentmc.gotoAndStop(0);\n}", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 144;
	this.text.setTransform(1059.7,147.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(60).to({_off:false},0).to({_off:true},10).wait(1));

	// current
	this.currentmc = new lib.currentmc();
	this.currentmc.setTransform(-48.9,441.4,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc).wait(71));

	// btn
	this.q1_d = new lib.q1_d_1();
	this.q1_d.setTransform(199.2,721.5,1,1,0,0,0,287.2,36.5);
	this.q1_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_d, 0, 1, 1);

	this.q1_c = new lib.q1_c_1();
	this.q1_c.setTransform(201.1,629.5,1,1,0,0,0,289.1,35.5);
	this.q1_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_c, 0, 1, 1);

	this.q1_b = new lib.q1_b_1();
	this.q1_b.setTransform(201.1,533.5,1,1,0,0,0,289.1,35.5);
	this.q1_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_b, 0, 1, 1);

	this.q1_a1 = new lib.q1_a1();
	this.q1_a1.setTransform(199.2,443.7,1,1,0,0,0,283,40);
	this.q1_a1.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_a1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egs2AFiIAArEMBZtAAAIAALEg");
	this.shape.setTransform(199.2,533.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1_a1},{t:this.q1_b},{t:this.q1_c},{t:this.q1_d}]}).to({state:[{t:this.q1_a1}]},60).to({state:[{t:this.shape},{t:this.q1_a1}]},10).wait(1));

	// q1_a.png
	this.instance = new lib.补间11("synched",0);
	this.instance.setTransform(199.2,944.6);
	this.instance._off = true;

	this.instance_1 = new lib.补间12("synched",0);
	this.instance_1.setTransform(199.2,443.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:443.7},10).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(46).to({startPosition:0},0).to({y:945.1},10).wait(1));

	// q1_b.png
	this.instance_2 = new lib.补间9("synched",0);
	this.instance_2.setTransform(199.2,944.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间10("synched",0);
	this.instance_3.setTransform(201.5,536);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:201.5,y:536},10).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(36).to({startPosition:0},0).to({y:945.6},10).wait(6));

	// q1_c.png
	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.setTransform(199.2,952.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.setTransform(201.5,631.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,x:201.5,y:631.3},10).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(26).to({startPosition:0},0).to({y:945.2},10).wait(11));

	// q1_d.png
	this.instance_6 = new lib.补间5("synched",0);
	this.instance_6.setTransform(201.5,968.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(201.5,723.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,y:723.5},10).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).wait(17).to({startPosition:0},0).to({y:943.8},10).wait(15));

	// person
	this.personmc = new lib.personmc();
	this.personmc.setTransform(192.7,-494,1,1,0,0,0,276.5,212.5);
	this.personmc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.personmc).wait(4).to({_off:false},0).to({y:179},5).wait(29).to({y:-490.9},8).wait(25));

	// top
	this.instance_8 = new lib.补间13("synched",0);
	this.instance_8.setTransform(194.6,-333);

	this.instance_9 = new lib.补间14("synched",0);
	this.instance_9.setTransform(194.6,-149.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:-149.4},4).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(33).to({startPosition:0},0).to({y:-360.5},4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-422,640,1180);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// result
	this.instance = new lib.result_mc();
	this.instance.setTransform(320,89,1,1,0,0,0,320,89);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// count
	this.count_person = new lib.count_person();
	this.count_person.setTransform(332.6,270.2,1,1,0,0,0,95,145);
	this.count_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.count_person).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// question1
	this.question = new lib.question();
	this.question.setTransform(401.9,451,1,1,0,0,0,276.5,212.5);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// cover
	this.cover = new lib.cover();
	this.cover.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.cover).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.7,139.7,1058.8,2289.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;