	var CommentList = React.createClass({
          render: function() {
            function __aaa(newarr,index){
              return (
                <Comment author={newarr.author}>{newarr.text}</Comment>
              )
            }
            var CommentNode = this.props.data.map(__aaa);
            console.log(this.props.xxx)
            return (
              <div className="commentList">
              <ul className="comment">
                {CommentNode}
              </ul>
              </div>
            );
          }
        });	
        var Comment = React.createClass({
          render: function() {
            return (
            
                <li className="commentAuthor">{this.props.author}：{this.props.children}</li>
            );
          }
        }); 
