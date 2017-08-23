import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
class CommentBox extends React.Component{
            constructor(){
						super();
						this.state = {data:[]}	
                   }
             componentDidMount(){
console.log(this)

		var oReq = new XMLHttpRequest(),
            srv = 'comment2.json'
        ;
        oReq.open("get", srv);
        oReq.send();
var that = this
        oReq.onreadystatechange =  function (){
            if(oReq.readyState == 4){
                if(oReq.status == 200){
                    var r = eval(oReq.responseText);
console.log(this)
                    that.setState({data:r});
                }else{alert('服务器错误:'+oReq.status)}
            }
        }
//.bind(this)
                     
             }
             submit = (comment) => {
                var newcomment = this.state.data.concat(comment);
                this.setState({data:newcomment});
             }
			 CommentClick =  (index) => {

		console.log(index)
				var data = this.state.data;
				console.log(data)
				data.splice(index,1);
				this.setState({data:data});
			 }
             render() {
               return (
                 <div className="commentBox">
			           <CommentList CommentClick = {this.CommentClick} data={this.state.data} xxx={this.state.xxx} />
			           <CommentForm commentSubmit = {this.submit}/>
                 </div>
               );
             }
           };


export default CommentBox;
