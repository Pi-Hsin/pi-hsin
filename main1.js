var confirmButton,backButton;
window.onload = function(){
    
    confirmButton=document.getElementById("confirmButton");
    backButton=document.getElementById("backButton");
    confirmButton.addEventListener("click",showAlert);
    backButton.addEventListener("click",showAlert);
    
};

/*function updateTopicAndTime()
{
    //把使用者輸入的主題設定到上面的標題
    topicH1.innerHTML=newTopic.value;
    //alert(newDate.value);
    topicDate.innerHTML=newDate.value;
};*/
        function showAlert()
        {
            //按鈕按下後會執行的動作
            //找到hl改變他的文字
            //alert(document.getElementsByTagName("h1")[0].innerHTML);
            document.getElementsByTagName("h1")[0].innerHTML=document.getElementsByTagName("li")[Math.floor(Math.random()*5)].innerHTML;
        }