var fs = require('fs');
var locallist = '/usr/log/anyproxy.log';   //提前在本代码路径下新建anyproxy_datawen文件夹
module.exports = {
	/*
	shouldInterceptHttpsReq :function(req){
        return false;
    },
	*/
  *beforeSendRequest(requestDetail) {
	  const newRequestOptions = requestDetail.requestOptions;
	  var reqstr = requestDetail.protocol + ','+ newRequestOptions.hostname+ ','+newRequestOptions.port+ ','+newRequestOptions.path+ ','+newRequestOptions.method
	  +','+newRequestOptions.headers['User-Agent'] +','+requestDetail.url+','+requestDetail.requestData  
       fs.appendFile(locallist,reqstr+ '\n', 'utf8', function(err) {
            if(err) {
               console.log(err);
             }
		})
  },
  /* response data not work!
  *beforeSendResponse(requestDetail, responseDetail) {
	  const newRequestOptions = requestDetail.requestOptions;
	  var reqstr = requestDetail.protocol + ','+ newRequestOptions.hostname+ ','+newRequestOptions.port+ ','+newRequestOptions.path+ ','+newRequestOptions.method
	  +','+newRequestOptions.headers['User-Agent'] +','+requestDetail.url+','+requestDetail.requestData  
	  var resstr = responseDetail.tatusCode+','+ responseDetail.header +','+responseDetail.body
	  fs.appendFile(locallist,reqstr+ '\n'+resstr+ '\n', 'utf8', function(err) {
            if(err) {
               console.log(err);
             }
		})
  }
 
  replaceServerResDataAsync: function(req, res, serverResData, callback) {  
	if (serverResData.toString() != '') {
	fs.appendFile(locallist,'response data:'+serverResData.toString()+ '\n', 'utf8', function(err) {
            if(err) {
               console.log(err);
             }
		})
	 callback(serverResData);
	}
  }
   */
};
