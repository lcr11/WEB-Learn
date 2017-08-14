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
		{src:"images/q2_a.png", id:"q2_a"},
		{src:"images/q2_b.png", id:"q2_b"},
		{src:"images/q2_c.png", id:"q2_c"},
		{src:"images/q2_d.png", id:"q2_d"},
		{src:"images/q3_a.png", id:"q3_a"},
		{src:"images/q3_b.png", id:"q3_b"},
		{src:"images/q3_c.png", id:"q3_c"},
		{src:"images/q3_d.png", id:"q3_d"},
		{src:"images/q4_a.png", id:"q4_a"},
		{src:"images/q4_b.png", id:"q4_b"},
		{src:"images/q4_c.png", id:"q4_c"},
		{src:"images/q4_d.png", id:"q4_d"},
		{src:"images/r1_l.png", id:"r1_l"},
		{src:"images/r1_r.png", id:"r1_r"},
		{src:"images/r_man_1111.png", id:"r_man_1111"},
		{src:"images/r_man_2_1.png", id:"r_man_2_1"},
		{src:"images/r_man_2_2.png", id:"r_man_2_2"},
		{src:"images/r_man_3.png", id:"r_man_3"},
		{src:"images/result_b_2.png", id:"result_b_2"},
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"},
		{src:"images/topic_2_bg1.png", id:"topic_2_bg1"},
		{src:"images/topic_2_bg2.png", id:"topic_2_bg2"},
		{src:"images/topic_2_bg3.png", id:"topic_2_bg3"},
		{src:"images/topic_2_bg4.png", id:"topic_2_bg4"},
		{src:"images/topic_3_bg1.png", id:"topic_3_bg1"},
		{src:"images/topic_3_bg2.png", id:"topic_3_bg2"},
		{src:"images/topic_4_bg1.png", id:"topic_4_bg1"},
		{src:"images/topic_4_bg2.png", id:"topic_4_bg2"},
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


(lib.q2_a = function() {
	this.initialize(img.q2_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_b = function() {
	this.initialize(img.q2_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_c = function() {
	this.initialize(img.q2_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_d = function() {
	this.initialize(img.q2_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_a = function() {
	this.initialize(img.q3_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_b = function() {
	this.initialize(img.q3_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_c = function() {
	this.initialize(img.q3_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_d = function() {
	this.initialize(img.q3_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_a = function() {
	this.initialize(img.q4_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_b = function() {
	this.initialize(img.q4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_c = function() {
	this.initialize(img.q4_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_d = function() {
	this.initialize(img.q4_d);
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


(lib.topic_2_bg1 = function() {
	this.initialize(img.topic_2_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg2 = function() {
	this.initialize(img.topic_2_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg3 = function() {
	this.initialize(img.topic_2_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg4 = function() {
	this.initialize(img.topic_2_bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_3_bg1 = function() {
	this.initialize(img.topic_3_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_3_bg2 = function() {
	this.initialize(img.topic_3_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_4_bg1 = function() {
	this.initialize(img.topic_4_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.topic_4_bg2 = function() {
	this.initialize(img.topic_4_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.zhz = function() {
	this.initialize(img.zhz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.textmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.parent.gotoAndPlay(6);
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


(lib.q4_person2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_4_bg2();
	this.instance.setTransform(0,77.6);

	this.instance_1 = new lib.topic_4_bg1();
	this.instance_1.setTransform(0,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,77.6,560,447);


(lib.q4_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgsNAG0IAAtnMBYbAAAIAANng");
	this.shape.setTransform(283,43.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,87.4);


(lib.q3_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_3_bg2();

	this.instance_1 = new lib.topic_3_bg1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.q3_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgsNAGQIAAsfMBYbAAAIAAMfg");
	this.shape.setTransform(283,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_person1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_2_bg1();

	this.instance_1 = new lib.topic_2_bg2();

	this.instance_2 = new lib.topic_2_bg3();

	this.instance_3 = new lib.topic_2_bg4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.q2_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgsNAGQIAAsfMBYbAAAIAAMfg");
	this.shape.setTransform(283,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


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


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


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


(lib.duilian2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AptBPIAAidITbAAIAACdg");
	var mask_graphics_1 = new cjs.Graphics().p("Ap/J0IAAznIT+AAIAATng");
	var mask_graphics_2 = new cjs.Graphics().p("AqORYMAAAgivIUdAAMAAAAivg");
	var mask_graphics_3 = new cjs.Graphics().p("AqbX8MAAAgv3IU3AAMAAAAv3g");
	var mask_graphics_4 = new cjs.Graphics().p("AqmdfMAAAg69IVNAAMAAAA69g");
	var mask_graphics_5 = new cjs.Graphics().p("EgKvAiCMAAAhEDIVfAAMAAABEDg");
	var mask_graphics_6 = new cjs.Graphics().p("EgK2AlkMAAAhLHIVtAAMAAABLHg");
	var mask_graphics_7 = new cjs.Graphics().p("EgK8AoFMAAAhQJIV4AAMAAABQJg");
	var mask_graphics_8 = new cjs.Graphics().p("EgK+ApmMAAAhTLIV9AAMAAABTLg");
	var mask_graphics_9 = new cjs.Graphics().p("EgLAAqHMAAAhUNIWBAAMAAABUNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:66.3,y:-24.7}).wait(1).to({graphics:mask_graphics_1,x:67.2,y:37}).wait(1).to({graphics:mask_graphics_2,x:67.9,y:91.5}).wait(1).to({graphics:mask_graphics_3,x:68.6,y:138.7}).wait(1).to({graphics:mask_graphics_4,x:69.2,y:178.7}).wait(1).to({graphics:mask_graphics_5,x:69.7,y:211.4}).wait(1).to({graphics:mask_graphics_6,x:70,y:236.8}).wait(1).to({graphics:mask_graphics_7,x:70.3,y:255}).wait(1).to({graphics:mask_graphics_8,x:70.5,y:265.9}).wait(1).to({graphics:mask_graphics_9,x:70.5,y:269.5}).wait(1));

	// 图层 1
	this.instance = new lib.r1_r();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.duilian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApVBRIAAihISsAAIAAChg");
	var mask_graphics_1 = new cjs.Graphics().p("ApoJNIAAyZITRAAIAASZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ap5QTMAAAgglITzAAMAAAAglg");
	var mask_graphics_3 = new cjs.Graphics().p("AqIWjMAAAgtGIURAAMAAAAtGg");
	var mask_graphics_4 = new cjs.Graphics().p("AqVb/MAAAg39IUrAAMAAAA39g");
	var mask_graphics_5 = new cjs.Graphics().p("EgKgAglMAAAhBJIVBAAMAAABBJg");
	var mask_graphics_6 = new cjs.Graphics().p("EgKpAkVMAAAhIpIVTAAMAAABIpg");
	var mask_graphics_7 = new cjs.Graphics().p("EgKwAnQMAAAhOfIVhAAMAAABOfg");
	var mask_graphics_8 = new cjs.Graphics().p("EgK1ApWMAAAhSqIVrAAMAAABSqg");
	var mask_graphics_9 = new cjs.Graphics().p("EgK3AqlMAAAhVKIVvAAMAAABVKg");
	var mask_graphics_10 = new cjs.Graphics().p("EgK5ArAMAAAhV/IVyAAMAAABV/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:64.1,y:-8.2}).wait(1).to({graphics:mask_graphics_1,x:65.2,y:45.7}).wait(1).to({graphics:mask_graphics_2,x:66.2,y:93.9}).wait(1).to({graphics:mask_graphics_3,x:67,y:136.4}).wait(1).to({graphics:mask_graphics_4,x:67.8,y:173.2}).wait(1).to({graphics:mask_graphics_5,x:68.4,y:204.4}).wait(1).to({graphics:mask_graphics_6,x:68.9,y:229.9}).wait(1).to({graphics:mask_graphics_7,x:69.3,y:249.8}).wait(1).to({graphics:mask_graphics_8,x:69.6,y:264}).wait(1).to({graphics:mask_graphics_9,x:69.8,y:272.5}).wait(1).to({graphics:mask_graphics_10,x:69.8,y:275.3}).wait(1));

	// 图层 1
	this.instance = new lib.r1_l();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,0,119.8,0);


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


(lib.question2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		//this.stop();
		this.q2_a.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			//this.parent.gotoAndPlay(3);
			this.currentmc.gotoAndStop(1);
			this.gotoAndPlay(36);
		}
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.currentmc.gotoAndStop(0);
	}
	this.frame_79 = function() {
		this.parent.gotoAndPlay(3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(34).call(this.frame_69).wait(10).call(this.frame_79).wait(1));

	// btn
	this.q2_a = new lib.q2_a_1();
	this.q2_a.setTransform(322.8,673.5,1,1,0,0,0,283,40);
	this.q2_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q2_a).wait(80));

	// current
	this.currentmc = new lib.currentmc();
	this.currentmc.setTransform(73.8,668.4,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc).wait(80));

	// q2_person1
	this.q2_person1 = new lib.q2_person1();
	this.q2_person1.setTransform(324.2,-403,1,1,0,0,0,260,210.5);
	this.q2_person1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q2_person1).wait(1).to({_off:false},0).to({y:412.4},8).wait(35).to({y:-230.8},10).wait(26));

	// q2_a.png
	this.instance = new lib.补间19("synched",0);
	this.instance.setTransform(322.8,1197.9);
	this.instance._off = true;

	this.instance_1 = new lib.补间20("synched",0);
	this.instance_1.setTransform(322.8,673.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,y:673.5},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},10).wait(50).to({startPosition:0},0).to({y:1220.9},10).wait(1));

	// q2_b.png
	this.instance_2 = new lib.补间21("synched",0);
	this.instance_2.setTransform(322.8,1218.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间22("synched",0);
	this.instance_3.setTransform(322.8,766.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,y:766.4},10).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},10).wait(40).to({startPosition:0},0).to({y:1206.6},10).to({_off:true},1).wait(5));

	// q2_c.png
	this.instance_4 = new lib.补间23("synched",0);
	this.instance_4.setTransform(322.8,1193.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间24("synched",0);
	this.instance_5.setTransform(322.8,856.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true,y:856.2},10).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},10).wait(30).to({startPosition:0},0).to({y:1185.4},10).to({_off:true},1).wait(10));

	// q2_d.png
	this.instance_6 = new lib.补间25("synched",0);
	this.instance_6.setTransform(322.8,946);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间26("synched",0);
	this.instance_7.setTransform(322.8,946);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({_off:true},11).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},11).wait(19).to({startPosition:0},0).to({y:1194.9},10).to({_off:true},1).wait(15));

	// top
	this.instance_8 = new lib.补间17("synched",0);
	this.instance_8.setTransform(320,-113.9);

	this.instance_9 = new lib.补间18("synched",0);
	this.instance_9.setTransform(320,89);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:89},4).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(40).to({startPosition:0},0).to({y:-163.6},5).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-202.9,640,916.4);


(lib.q4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.q4_a.addEventListener("click", q4_btn_click.bind(this));
		
		function q4_btn_click()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
		
			this.parent.gotoAndPlay(5);
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.q4_a = new lib.q4_a_1();
	this.q4_a.setTransform(322.1,695.8,1,1,0,0,0,283,43.6);
	this.q4_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q4_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q4_a).wait(1));

	// topic_4_bg1.png
	this.instance = new lib.q4_person2();
	this.instance.setTransform(319.1,346.2,1,1,0,0,0,280,223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// q4_d.png
	this.instance_1 = new lib.q4_d();
	this.instance_1.setTransform(39.7,944.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// q4_b.png
	this.instance_2 = new lib.q4_b();
	this.instance_2.setTransform(39.1,747.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// q4_a.png
	this.instance_3 = new lib.q4_a();
	this.instance_3.setTransform(39.1,654.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// q4_c.png
	this.instance_4 = new lib.q4_c();
	this.instance_4.setTransform(37.3,843.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// top
	this.instance_5 = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1024.3);


(lib.q3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.q3_btn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
		
			this.parent.gotoAndPlay(4);
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.q3_btn = new lib.q3_btn();
	this.q3_btn.setTransform(317.8,628.3,1,1,0,0,0,283,40);
	this.q3_btn.alpha = 0.012;
	new cjs.ButtonHelper(this.q3_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q3_btn).wait(1));

	// topic_3_bg2.png
	this.instance = new lib.q3_person();
	this.instance.setTransform(317.5,383,1,1,0,0,0,300.5,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// q3_a.png
	this.instance_1 = new lib.q3_a();
	this.instance_1.setTransform(34.8,588.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// q3_b.png
	this.instance_2 = new lib.q3_b();
	this.instance_2.setTransform(37.3,770);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// q3_c.png
	this.instance_3 = new lib.q3_c();
	this.instance_3.setTransform(32.4,679.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// q3_d.png
	this.instance_4 = new lib.q3_d();
	this.instance_4.setTransform(34.8,868.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// top
	this.instance_5 = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,948.2);


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
		console.log(score);
		if(score ==1){
				this.gotoAndStop(3);
		}
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
	this.result4 = new lib.result4();
	this.result4.setTransform(165.5,969.2,1,1,0,0,0,165.5,250.5);
	this.result4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result4).wait(3).to({_off:false},0).wait(1));

	// result3
	this.result3 = new lib.result3();
	this.result3.setTransform(182.3,969.2,1,1,0,0,0,149.5,258.5);
	this.result3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result3).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// result2
	this.chuanpiao = new lib.chuanpiao();
	this.chuanpiao.setTransform(77.8,250.6,1,1,0,0,0,122,225);
	this.chuanpiao._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chuanpiao).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

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
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.start.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			//this.parent.gotoAndPlay(1);
			
			this.gotoAndPlay(1);//cover的过场动画
			
			// 结束您的自定义代码
		}
	}
	this.frame_14 = function() {
		this.stop();
		this.parent.gotoAndPlay(1);
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// button
	this.start = new lib.start();
	this.start.setTransform(317.9,857.4,1,1,0,0,0,281.2,117.7);
	this.start.alpha = 0.012;
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(15));

	// title
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(333.5,387.2);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(333.5,-238.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-238.8},14).wait(1));

	// person
	this.personmc = new lib.persongmc();
	this.personmc.setTransform(320,815.1,1,1,0,0,0,320,338.5);

	this.timeline.addTween(cjs.Tween.get(this.personmc).to({y:1625.7},14).wait(1));

	// top
	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.setTransform(320,89);

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.setTransform(320,-121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-121.3},14).wait(1));

	// denglong2
	this.denglong1 = new lib.denglong1();
	this.denglong1.setTransform(502.8,136,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1).to({x:743.7},14).wait(1));

	// denglong1
	this.denglong1_1 = new lib.denglong1();
	this.denglong1_1.setTransform(136,136,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1_1).to({x:-101},14).wait(1));

	// bg
	this.coverbg1 = new lib.coverbg1();
	this.coverbg1.setTransform(320,568,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.coverbg1).to({_off:true},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-104,640,1257.6);


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
	this.frame_0 = function() {
		//this.stop();
		this.again.addEventListener("click", q4_btn_click.bind(this));
		
		function q4_btn_click()
		{
			this.parent.gotoAndPlay(0);
		}
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// r1_r.png
	this.duilian2 = new lib.duilian2();
	this.duilian2.setTransform(574.4,458.3,1,1,0,0,0,70.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.duilian2).wait(10));

	// r1_l.png
	this.duilian = new lib.duilian();
	this.duilian.setTransform(83,464.3,1,1,0,0,0,62,270);

	this.timeline.addTween(cjs.Tween.get(this.duilian).wait(10));

	// result_b_2.png
	this.instance = new lib.补间27("synched",0);
	this.instance.setTransform(299.7,1249.1);

	this.instance_1 = new lib.补间28("synched",0);
	this.instance_1.setTransform(316.4,791.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:316.4,y:791.3},9).wait(1));

	// r_man_1.png
	this.manmc = new lib.manmc();
	this.manmc.setTransform(326,-250.5,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.manmc).to({y:401.9},9).wait(1));

	// 图层 1
	this.instance_2 = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// bg
	this.instance_3 = new lib.cover_bg_2();
	this.instance_3.setTransform(0,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-417,644.9,1717.9);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		this.stop();
		this.q1_a1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			try{
					//this.parent.gotoAndPlay(2);
					//selected = 1;
					score+=1;
					this.currentmc.gotoAndStop(1);
					this.gotoAndPlay(31);
				}catch(err){
				//console.log(err);
			}
		}
	}
	this.frame_60 = function() {
		this.currentmc.gotoAndStop(0);
	}
	this.frame_70 = function() {
		this.stop();
		console.log(this.parent);
		this.parent.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(30).call(this.frame_60).wait(10).call(this.frame_70).wait(2));

	// current
	this.currentmc = new lib.currentmc();
	this.currentmc.setTransform(-48.9,441.4,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.currentmc).wait(72));

	// btn
	this.q1_a1 = new lib.q1_a1();
	this.q1_a1.setTransform(199.2,443.7,1,1,0,0,0,283,40);
	this.q1_a1.alpha = 0.012;
	this.q1_a1._off = true;
	new cjs.ButtonHelper(this.q1_a1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q1_a1).wait(30).to({_off:false},0).wait(42));

	// q1_a.png
	this.instance = new lib.补间11("synched",0);
	this.instance.setTransform(199.2,944.6);
	this.instance._off = true;

	this.instance_1 = new lib.补间12("synched",0);
	this.instance_1.setTransform(199.2,443.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:443.7},10).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(46).to({startPosition:0},0).to({y:945.1},10).wait(2));

	// q1_b.png
	this.instance_2 = new lib.补间9("synched",0);
	this.instance_2.setTransform(199.2,944.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间10("synched",0);
	this.instance_3.setTransform(201.5,536);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:201.5,y:536},10).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(36).to({startPosition:0},0).to({y:945.6},10).wait(7));

	// q1_c.png
	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.setTransform(201.5,631.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.setTransform(201.5,631.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true},10).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(26).to({startPosition:0},0).to({y:945.2},10).wait(12));

	// q1_d.png
	this.instance_6 = new lib.补间5("synched",0);
	this.instance_6.setTransform(201.5,723.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(201.5,723.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},10).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).wait(17).to({startPosition:0},0).to({y:943.8},10).wait(16));

	// person
	this.personmc = new lib.personmc();
	this.personmc.setTransform(192.7,-494,1,1,0,0,0,276.5,212.5);
	this.personmc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.personmc).wait(4).to({_off:false},0).to({y:179},5).wait(29).to({y:-490.9},8).wait(26));

	// top
	this.instance_8 = new lib.补间13("synched",0);
	this.instance_8.setTransform(194.6,-333);

	this.instance_9 = new lib.补间14("synched",0);
	this.instance_9.setTransform(194.6,-149.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:-149.4},4).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(33).to({startPosition:0},0).to({y:-360.5},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-422,640,178);


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
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// result
	this.instance = new lib.result_mc();
	this.instance.setTransform(320,89,1,1,0,0,0,320,89);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1));

	// count
	this.count_person = new lib.count_person();
	this.count_person.setTransform(332.6,270.2,1,1,0,0,0,95,145);
	this.count_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.count_person).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// question4
	this.q4_mc = new lib.q4_mc();
	this.q4_mc.setTransform(320,89,1,1,0,0,0,320,89);
	this.q4_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q4_mc).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

	// question3
	this.q3_mc = new lib.q3_mc();
	this.q3_mc.setTransform(320,89,1,1,0,0,0,320,89);
	this.q3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q3_mc).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// question2
	this.question2_mc = new lib.question2_mc();
	this.question2_mc.setTransform(320,89,1,1,0,0,0,320,89);
	this.question2_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question2_mc).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

	// question1
	this.question = new lib.question();
	this.question.setTransform(401.9,451,1,1,0,0,0,276.5,212.5);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// cover
	this.cover = new lib.cover();
	this.cover.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.cover).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,464,640,1257.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;