//判断手机号
var OK1,OK2,OK3,OK4,OK5,OK6;
var time=61;

function phoneNumber(){
	var number=$("number").value;
	var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	if(!reg.test(number)){
		$("isphone").className="error";
		$("isphone").innerHTML="输入有误";
		OK1=false;
	}else{
		$("isphone").className="correct";
		$("isphone").innerHTML="正确";
		OK1=true;
	}
}

// 判断密码
function passWord(){
	var pwd=$("pwd").value;
	var reg=/^\w{6,10}$/;
	if(!reg.test(pwd)){
		$("ispwd").className="error";
		$("ispwd").innerHTML="输入有误";
		OK2=false;
	}else{
		$("ispwd").className="correct";
		$("ispwd").innerHTML="正确";
		OK2=true;
	}
}
//确认密码
function repassWord(){
	var repwd=$("repwd").value;
	if($("pwd").value==repwd&&repwd!=""){
		$("isrepwd").className="correct";
		$("isrepwd").innerHTML="正确";
		OK3=true;
	}else{
		$("isrepwd").className="error";
		$("isrepwd").innerHTML="输入有误";
		OK3=false;
	}
}
//邮箱判断
function doemail(){
	var email=$("email").value;
	var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(!reg.test(email)){
		$("isemail").className="error";
		$("isemail").innerHTML="输入有误";
		OK4=false;
		// console.log(OK4);
	}else{
		$("isemail").className="correct";
		$("isemail").innerHTML="正确";
		OK4=true;
		// console.log(OK4);
	}
}

//验证码判断
function doyanzheng(){
	if($("yanzheng").value=='111'){
		OK5=true;
	}else{
		OK5=false;
	}
}
//判断checkbox
function docheckbox(){
	if($("checkme").checked){
		OK6=true;
		console.log(OK6);
	}else{
		OK6=false;
		console.log(OK6);
	}
}
function checkForm(){
	/*判断信息事件*/
	if(OK1&&OK2&&OK3&&OK4&&OK5&&OK6){
		$("tzts").style.display="block";
		setTimeout("$('zhengque').submit()",2000);
		
	}else{
		alert("无法申请注册！")
	}
	
}


/*页面2*/
/*倒计时事件*/
function dojishiqi(){
	$("daojishi").disabled="true";
	time--;
	if(time>=0){
		$("daojishi").innerHTML=time+"秒后重新发短信";
		setTimeout(dojishiqi, 1000);
	}else{
		$("daojishi").innerHTML="点击重新发送";
		time=61;
	}
}
//判断验证码
function checkbtn(){
	if($("writeyanzheng").value=='666'){
		$("tzts").style.display="block";
		setTimeout('$("tijiao").submit()',2000);
	}else{
		alert("输入验证码不正确！")
	}
}

//手机验证码
function doChangeStyle(){
	$("onland").style.display="block";
	$("downland").style.display="none";
}
function doYanZheng(){
	$("onland").style.display="none";
	$("downland").style.display="block";
}
function showDengLu(){
	$("bgd").style.display="block";
	$("land").style.display="block";
}






function $(id){
	return document.getElementById(id);
}