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
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2.png", id:"cover_man_2"},
		{src:"images/cover_title.png", id:"cover_title"},
		{src:"images/denglong.png", id:"denglong"},
		{src:"images/q1_a.png", id:"q1_a"},
		{src:"images/q1_b.png", id:"q1_b"},
		{src:"images/q1_c.png", id:"q1_c"},
		{src:"images/q1_d.png", id:"q1_d"},
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"}
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


(lib.topic_1_bg1 = function() {
	this.initialize(img.topic_1_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_1_bg2 = function() {
	this.initialize(img.topic_1_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).dr(-281.25,-117.7,562.5,235.4);
	this.shape.setTransform(281.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,564.5,237.4);


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


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// person
	this.personmc = new lib.personmc();
	this.personmc.setTransform(192.7,-494,1,1,0,0,0,276.5,212.5);
	this.personmc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.personmc).wait(4).to({_off:false},0).to({y:179},5).wait(21));

	// q1_a.png
	this.instance = new lib.补间11("synched",0);
	this.instance.setTransform(199.2,944.6);
	this.instance._off = true;

	this.instance_1 = new lib.补间12("synched",0);
	this.instance_1.setTransform(199.2,443.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},10).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:443.7},10).wait(16));

	// q1_b.png
	this.instance_2 = new lib.补间9("synched",0);
	this.instance_2.setTransform(199.2,944.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间10("synched",0);
	this.instance_3.setTransform(201.5,536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:201.5,y:536},10).wait(11));

	// q1_c.png
	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.setTransform(201.5,631.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.setTransform(201.5,631.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},10).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true},10).wait(6));

	// q1_d.png
	this.instance_6 = new lib.补间5("synched",0);
	this.instance_6.setTransform(201.5,723.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间6("synched",0);
	this.instance_7.setTransform(201.5,723.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_7}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},10).wait(1));

	// top
	this.instance_8 = new lib.补间13("synched",0);
	this.instance_8.setTransform(194.6,-333);

	this.instance_9 = new lib.补间14("synched",0);
	this.instance_9.setTransform(194.6,-149.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},4).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:-149.4},4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-422,640,178);


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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// question
	this.question = new lib.question();
	this.question.setTransform(401.9,451,1,1,0,0,0,276.5,212.5);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(1).to({_off:false},0).wait(1));

	// cover
	this.cover = new lib.cover();
	this.cover.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.cover).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,464,640,1257.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;