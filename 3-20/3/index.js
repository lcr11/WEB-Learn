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
		{src:"images/count_man.png", id:"count_man"},
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_2.png", id:"cover_bg_2"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2.png", id:"cover_man_2"},
		{src:"images/cover_title.png", id:"cover_title"},
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
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"},
		{src:"images/topic_2_bg1.png", id:"topic_2_bg1"},
		{src:"images/topic_2_bg2.png", id:"topic_2_bg2"},
		{src:"images/topic_2_bg3.png", id:"topic_2_bg3"},
		{src:"images/topic_2_bg4.png", id:"topic_2_bg4"},
		{src:"images/topic_3_bg1.png", id:"topic_3_bg1"},
		{src:"images/topic_3_bg2.png", id:"topic_3_bg2"},
		{src:"images/topic_4_bg1.png", id:"topic_4_bg1"},
		{src:"images/topic_4_bg2.png", id:"topic_4_bg2"}
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



(lib.count_man = function() {
	this.initialize(img.count_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


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


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).dr(-281.25,-117.7,562.5,235.4);
	this.shape.setTransform(281.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,564.5,237.4);


(lib.result_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


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


(lib.denglong1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:23.5,x:101.1,y:-6},0).wait(5).to({rotation:0,x:0,y:0},0).wait(5).to({rotation:-37,x:-131.3,y:87.4},0).wait(5).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.coverbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.count_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


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
		this.stop();
		this.q2_a.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			this.parent.gotoAndPlay(3);
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.q2_a = new lib.q2_a_1();
	this.q2_a.setTransform(322.8,673.5,1,1,0,0,0,283,40);
	this.q2_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q2_a).wait(1));

	// q2_a.png
	this.instance = new lib.q2_person1();
	this.instance.setTransform(324.2,412.4,1,1,0,0,0,260,210.5);

	this.instance_1 = new lib.q2_a();
	this.instance_1.setTransform(39.8,633.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// q2_b.png
	this.instance_2 = new lib.q2_b();
	this.instance_2.setTransform(39.8,726.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// q2_c.png
	this.instance_3 = new lib.q2_c();
	this.instance_3.setTransform(39.8,816.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// q2_d.png
	this.instance_4 = new lib.q2_d();
	this.instance_4.setTransform(39.8,906);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// top
	this.instance_5 = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,986);


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
			alert("已单击鼠标");
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
			alert("已单击鼠标");
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


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
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
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			this.parent.gotoAndPlay(2);
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// btn
	this.q1_a1 = new lib.q1_a1();
	this.q1_a1.setTransform(199.2,443.7,1,1,0,0,0,283,40);
	this.q1_a1.alpha = 0.012;
	this.q1_a1._off = true;
	new cjs.ButtonHelper(this.q1_a1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.q1_a1).wait(30).to({_off:false},0).wait(1));

	// person
	this.personmc = new lib.personmc();
	this.personmc.setTransform(192.7,-494,1,1,0,0,0,276.5,212.5);
	this.personmc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.personmc).wait(4).to({_off:false},0).to({y:179},5).wait(22));

	// q1_a.png
	this.instance = new lib.补间11("synched",0);
	this.instance.setTransform(199.2,944.6);
	this.instance._off = true;

	this.instance_1 = new lib.补间12("synched",0);
	this.instance_1.setTransform(199.2,443.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},10).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:443.7},10).wait(17));

	// q1_b.png
	this.instance_2 = new lib.补间9("synched",0);
	this.instance_2.setTransform(199.2,944.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间10("synched",0);
	this.instance_3.setTransform(201.5,536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},10).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:201.5,y:536},10).wait(12));

	// q1_c.png
	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.setTransform(201.5,631.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.setTransform(201.5,631.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},10).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true},10).wait(7));

	// q1_d.png
	this.instance_6 = new lib.补间5("synched",0);
	this.instance_6.setTransform(201.5,723.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(201.5,723.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_7}]},10).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},10).wait(2));

	// top
	this.instance_8 = new lib.补间13("synched",0);
	this.instance_8.setTransform(194.6,-333);

	this.instance_9 = new lib.补间14("synched",0);
	this.instance_9.setTransform(194.6,-149.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},4).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:-149.4},4).wait(27));

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