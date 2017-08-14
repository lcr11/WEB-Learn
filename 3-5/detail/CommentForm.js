        class CommentForm extends React.Component{
          confirm =(e) => {
			console.log(this)
            e.preventDefault();
            this.props.commentSubmit({author:this.refs.author.value,text:this.refs.text.value});
              this.refs.author.value = '';
              this.refs.text.value = '';
          }
          render() {
            return (
              <div className="commentForm">
                <form className="myForm" onSubmit={this.confirm}>
                <input type="text" placeholder="Your Name" ref="author" />
                <input type="text" placeholder="Say Something ..." ref="text" />
                <input type="submit" value="确定" />
              </form>
              </div>
            );
          }
        };	
export default CommentForm
