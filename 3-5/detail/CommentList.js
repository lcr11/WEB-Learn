import Comment from './Comment.js';
class CommentList extends React.Component{
			clclick = (index) => {

		console.log(index)
				this.props.CommentClick(index);
			}
          render() {
			var that = this;
            function __aaa(newarr,index){
              return (
                <Comment cclick = {that.clclick} index = {index} author={newarr.author}><span>{newarr.text}</span></Comment>
              )
            }
            var CommentNode = this.props.data.map(__aaa);
            return (
              <div className="commentList">
              <ul className="comment">
                {CommentNode}
              </ul>
              </div>
            );
          }
        };	
export default CommentList;
