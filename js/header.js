console.log("hello");
var fs=require("fs");
fs.writeFile('/usr/tmp/test.txt','content',function(err){
 if(err){
	return console.error(err);
 }
 console.log("write data!");
});