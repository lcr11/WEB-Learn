	/*
	版本:1.0
	作者: trentxie
	继承:无
	依赖:无
	参数：obj,数据，pattern：模板中匹配项
	*/
	window.String.prototype.template = function(obj,patten) {
		var temp = this.toString();
		var patten = patten || /{([^{}]+)}/gm;
		var Store = [];
		var data = obj||{};
		var me = this;
		var build = build;
		build();
		return Store.join('');
		function build(newTemplate, newPatten) {
			if (newTemplate) {
				temp = newTemplate;
			}
			if (newPatten) {
				patten = newPatten;
			}
			if (temp) {
				Store.length = 0;
				var tmp =  temp
					,lastLastIndex = 0
					,flags =	(patten.ignoreCase ? "i" : "") +
								(patten.multiline  ? "m" : "") +
								(patten.sticky     ? "y" : "")
					,separator = RegExp(patten.source, flags + "g");
				var match =[];
				while(match = separator.exec(tmp)){
					var lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser
					Store.push(tmp.slice(lastLastIndex,match.index));
					lastLastIndex = lastIndex;
					if (match) {
						Store.push(new struct(match[1]));
					}
					if (match && separator.lastIndex === match.index)
					separator.lastIndex++; // avoid an infinite loop
				}
				if(lastLastIndex<tmp.length){
					Store.push(tmp.slice(lastLastIndex));
				}
			}
		}
		// defined
		function struct(str) {
			this.str = str;
			this.toString = function() {
				return data[this.str] || "";
			}
		}
	};
