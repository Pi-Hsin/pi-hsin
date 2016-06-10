var c6, cxt6,moveButton,img,locationX,locationY;

window.onload = function ()
{

    drawCanvas6();
//    moveButton=document.getElementById("moveButton");
//    moveButton.onclick=movePerson;
    
    window.onkeydown=moveByKey;


}
function moveByKey(e){
//    console.log("有人按鍵盤!");
//    console.log(typeof(e));
    
//    for(var x in e){
//        console.log(x+" :"+e[x]);
//    }
    console.log(e.keyCode);
    //65a37:左, 87w38:上, 68d39:右, 83s40:下
    cxt6.clearRect(0,0,600,600);
    switch (e.keyCode) { 
    case 65: 
//        if(locationX<=10){}else{
        locationX-=10; 
        cxt6.drawImage(img,95,0,110,139,locationX,locationY,110,139);
//    }
        break; 
    case 87: 
//        if(locationY<=0){}else{
        locationY-=10;
        cxt6.drawImage(img,0,0,95,139,locationX,locationY,95,139);
//    }
        break; 
    case 68: 
//        if(locationX>=180){}else{
        locationX+=10;
        cxt6.drawImage(img,315,0,110,139,locationX,locationY,110,139);
//    }
        break; 
    case 83:
//        if(locationY>=60){}else{
        locationY+=10;
        cxt6.drawImage(img,205,0,95,139,locationX,locationY,95,139);
//    }
        break; 
    default: 
            cxt6.drawImage(img,0,0,95,139,locationX,locationY,95,139);
    }
    
}
function movePerson(){
    //alert("hi");
    //移動主角往前
    if(locationX>=180){}else{
        cxt6.clearRect(0,0,600,600);
        locationX+=10;
        cxt6.drawImage(img,0,0,95,139,locationX,139,95,139);
    }
    
    //cxt6.drawImage(img,0,0,80,132,20,60,20,40);
    //context.drawImage(img,剪切的x ,剪切的 y,切寬,切高,圖片位置x,圖片位置y,圖w,圖h);
}

function drawCanvas6()
{
    c6=document.getElementById("myCanvas6");
    cxt6=c6.getContext("2d"); //用2D方式畫圖
    img=new Image();
    img.src="images/spriteSheet.png";
    //懷疑圖片還未載入
    //等圖片載入完成後，再去執行drawImage方法
    img.onload=function(){
        locationX=120;
        locationY=120;
        cxt6.drawImage(img,0,0,95,139,locationX,locationY,95,139);
    }
  
    
    

}