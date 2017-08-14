function checkData(){
	var timerGetDataLoop = setTimeout(function(){
		if(window.envobj&&window.envobj.data){
			clearTimeout(timerGetDataLoop);
			window.envobj?'':window.envobj={};
			window.envobj.setData?envobj.setData():window.envobj.setData = function(){};
		}else{
			checkData();
		}
	});
}
window.envobj?'':window.envobj={};
window.envobj.checkData=checkData();
