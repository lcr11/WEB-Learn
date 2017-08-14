class Operate extends React.Component{

	likeClick = () => {
			$.ajax({
				url: 'comment2.json',
				type: 'get',
				data: { a: 1 },
				dataType: 'json',
				success: function(r) {
					//console.log(this)
					//console.log(eval("("+r+")"));
					this.setState({ data: { userinfo: eval("(" + r + ")").userinfo, zebraitem: zebraitem_array, title: '有一种记忆叫水墨徽州，有一种印象叫黎阳in港', cover: 'http://mat1.gtimg.com/yslp/banmatest/pic_1.jpg' } });
				}.bind(this)
			});
		}
	render(){
		return(
			<div className="page_op current clearfix">
				<section>
					<a href="javascript:void(0);" onClick = {this.likeClick} className="icon_like">0</a>
					<a href="javascript:void(0);" className="icon_share"></a>
					<span className="num gray">155人看过</span>
				</section>
			</div>
		);
	}
}
ReactDOM.render( < Operate / > ,
	document.getElementById('op_content')
);
