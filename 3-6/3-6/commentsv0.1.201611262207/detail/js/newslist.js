			class NewsList extends React.Component{
				constructor(){
					super();
					this.state={'data':[]}
				}
				componentDidMount(){
					this.setState({data:[
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}
						,
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}
						,
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}					
						,
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}					
						,
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}					
						,
						{'title':'最美自主车致尚XT竞争力分析--这里是测试文字的地方',
						'time':'2016-11-24',
						'author':'搜狐汽车'
						}
					]})
				}
				render(){
					var ListNode = this.state.data.map(function(item){
						return(
							<li>
								<h2>
									<a href="">{item.title}</a>
									<img src="images/icon_list.png" alt="thumb" />
								</h2>
								<div className="about">
									<time>{item.time}  </time>
									<span className="author">{item.author}</span>
								</div>
							</li>
						)
					});
					return(
						<section>
						<ul>
							{ListNode}
						</ul>
						</section>
					)
				}
			
			}
			export default NewsList;
