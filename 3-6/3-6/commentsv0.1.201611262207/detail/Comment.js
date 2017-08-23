	class Comment extends React.Component{
		myclick = () => {
		console.log(this.props.index)
			this.props.cclick(this.props.index);
		}
		render(){
			return (
				<li className="commentAuthor" onClick={this.myclick}>{this.props.author}：{this.props.children}</li>
			);	
		}
	}
export default Comment
