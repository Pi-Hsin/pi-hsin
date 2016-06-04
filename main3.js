var count, currentImgNum, timeLabel;
var bgImage = new Array("images/Board0.jpg", "images/Board1.jpg", "images/Board2.jpg", "images/Board3.jpg", "images/Board4.jpg");

var locX, locY, fSize, fColor, rAngle
//建立一個物件模板，物件裡面有四項屬性
//(文字的位置x、文字的位置y、大小、顏色、傾斜度)
function labelStyle(locX, locY, fSize, fColor, rAngle){
	this.locX = locX;
	this.locY = locY;
	this.fSize = fSize;
	this.fColor = fColor;
	this.rAngle = rAngle;
}
var labelStyle0 = new labelStyle("60px","300px","55px","gray",-5);
var labelStyle1 = new labelStyle("20px","200px","80px","red",13);
var labelStyle2 = new labelStyle("20px","380px","100px","brown",358);
var labelStyle3 = new labelStyle("100px","200px","100px","green",2);
var labelStyle4 = new labelStyle("90px","320px","65px","deeppink",0);

var labelStyleArray = [labelStyle0, labelStyle1, labelStyle2, labelStyle3, labelStyle4];

window.onload = function(){
	count = 0;	
	timeLabel=document.getElementById("timeLabel");
	
	//讓圖片跟時間在第一次就可以出現並配合
	changeBgImage();
	updateTimeLabel(); 
	
	setInterval(changeBgImage, 5000);
	setInterval(updateTimeLabel, 1000);
}

function changeBgImage(){
	currentImgNum = count%5;
	count++;
	timeLabel.style.top = labelStyleArray[currentImgNum].locY;
	timeLabel.style.left = labelStyleArray[currentImgNum].locX;
	timeLabel.style.fontSize = labelStyleArray[currentImgNum].fSize;
	timeLabel.style.color = labelStyleArray[currentImgNum].fColor;
	timeLabel.style.transform = "rotate(" + labelStyleArray[currentImgNum].rAngle + "deg)"; 

	document.body.background = bgImage[currentImgNum];
}

function addZero(timeString){
	timeString = "0" + timeString;
	return timeString.slice(-2);
}

function updateTimeLabel(){
	var now = new Date();
			   
	timeLabel.innerHTML = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());
}