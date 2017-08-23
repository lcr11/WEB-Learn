class NewsContent extends React.Component{
	constructor(){
		super();
		this.state = {data:[]};
	}
	componentDidMount = () => {
		var ajax = new XMLHttpRequest();
		ajax.open('get','comment3.js');
		ajax.send();
		var that = this;
		ajax.onreadystatechange = function(){
console.log(this);
if(ajax.readyState==4){
//console.log(this)
			var r = eval(ajax.responseText)[0];
//console.log(r);
			that.setState(r);
}


		}
	}
	render(){
		return(
			<section>
		   <div className="layout">
				<div id="borderLogo">
					<div className="logoImg"></div>
				</div>
				<div className="ac_re_txt pageTitle">
					<div className="inner">{this.state.title}</div>
				</div>
				<div className="title_d ac_title_d ac_re_txt">
					<div className="inner">{this.state.time} {this.state.author}</div>
				</div>
				<div className="mod_item mod_pic mod_item_first">
					<div>
						<div><img src={this.state.pic} /></div>
					</div>
					<section className="noborder">
						<div className="inner">{this.state.lengend}</div>
					</section>
				</div>
				<div className="ac_re_txt mod_item mod_txt">
					<div className="inner">{this.state.content}</div>
				</div>
			</div>
			</section>
	
		);
	}
}
export default NewsContent;
