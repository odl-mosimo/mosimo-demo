
var origX = 0;
var origY = 0;
var X = 0;
var Y = 0;
var dispX = 0;
var dispY = 0;
var nowY;
var absY = 0;
var btnFlag=0;
var viewerFlag=0;


// イベントリスナー設定
function setEventListener(id,fun){
		var touch_area = document.getElementById(id);
		touch_area.addEventListener("touchstart", fun, false);
	    touch_area.addEventListener("touchmove", fun, false);
	    touch_area.addEventListener("touchend", fun, false);
}



function move(e){
    if(dispX < -20){
        e.preventDefault();
	}

	var nowEle = this;
	if(e.type == "touchstart") {

        origX = e.touches[0].pageX;
        origY = e.touches[0].pageY;
          
        // 現在のmargin-left保存
        left = $("#frontPage").css("left");
        lefts = left.split("p");

        $("#container_back").removeClass("move");
        $("#container_back").addClass("fix");
    
    }else if(e.type == "touchmove") {
        
    	// タッチで動いている間
    	X = e.touches[0].pageX;
    	dispX = X - origX;
    	Y = e.touches[0].pageY;
    	dispY = Y - origY;
    	nowY =origY - dispY;
    	absY = Math.abs(dispY);
    	
    	// X変位でタイトルナビの動きを表現
    	if(dispX<0){
        	lefts[0] = Number(lefts[0]);
        	var nowLeft = lefts[0]+dispX;
        	$("#frontPage").css("left",nowLeft) ;
        }
            if(dispX<-35){
	           document.getElementById("frontPage").style.left = dispX + "px";
            }


    }else if(e.type == "touchend") {
               
        	
        if(dispX<-150){  
            // pageタイトルのスライド用
      		$("#frontPage").css("left","-255px"); 
            $("#comment_send").css("height","40px");				
      		// $("#frontPage").removeClass("move");
      		// $("#frontPage").addClass("fix");
        }else{
        	if(btnFlag==0){
    			document.getElementById("frontPage").style.left = "0px";
    		}			
    		$("#frontPage").removeClass("fix");
    		$("#frontPage").addClass("move");


    		
        }

                disp = 0;
    			btnFlag = 0;
    
    }
}


function fixTab(e){
    if(e.type=="touchstart"){
        // $("#container_back").removeClass("fix");
        // $("#container_back").addClass("move");
        $("#frontPage").removeClass("move");
        $("#frontPage").addClass("fix");    
    }else if(e.type == "touchend") {
		$("#frontPage").removeClass("move");
      	$("#frontPage").addClass("fix");          
    }
}


function touchCommentBtn(e){
	if(e.type == "touchstart"){
		$("#frontPage").css("left","-255px");
		btnFlag = 1;
	}else if(e.type=="touchend"){
        $("#notieBadge").fadeOut(0);
    }
}




////////////////////////////////////////////////////////////
// チャット画面 
////////////////////////////////////////////////////////////
function showViewers(){
    if(viewerFlag=="0"){
        $(".header").css("height","100px");
        viewerFlag=1;
    }else if(viewerFlag=="1"){
        $(".header").css("height","50px");
        viewerFlag=0;
    }
}




////////////////////////////////////////////////////////////
// エントリー画面切り替え
////////////////////////////////////////////////////////////

 var nowValue ="";
function setForm(){
   nowValue = $("#univ_hs").val();
   if(nowValue=="univ"){
    $("#univArea").fadeOut(10);
    $("#hsArea").fadeOut(10);
    $("#univArea").fadeIn(1000);
   }else if(nowValue=="hs"){
    $("#univArea").fadeOut(10);
    $("#hsArea").fadeOut(10);
    $("#hsArea").fadeIn(1000);
   }
}


////////////////////////////////////////////////////////////
// header実装 
////////////////////////////////////////////////////////////

function touchMenuBtn(e){
    
    if(e.type=="touchend"){
        $("#menuArea").toggle();
    }
}


function menuRadio(){
    $("#job").removeClass("onMenu_radio");
    $("#life").removeClass("onMenu_radio");
    $("#study").removeClass("onMenu_radio");
    $("#guest").removeClass("onMenu_radio");
    $("#job").addClass("offMenu_radio");
    $("#life").addClass("offMenu_radio");
    $("#study").addClass("offMenu_radio");
    $("#guest").addClass("offMenu_radio");

    if(this.id=="life"){
        $("#life").removeClass("offMenu_radio");
        $("#life").addClass("onMenu_radio");
    }else if(this.id=="study"){
        $("#study").removeClass("offMenu_radio");
        $("#study").addClass("onMenu_radio");
    }else if(this.id=="job"){
        $("#job").removeClass("offMenu_radio");
        $("#job").addClass("onMenu_radio");
    }else if(this.id=="guest"){
        $("#guest").removeClass("offMenu_radio");
        $("#guest").addClass("onMenu_radio");
    }


}


function touchNotieBtn(e){
    
    if(e.type=="touchend"){
        $("#notieArea").toggle();
        $(".review").fadeOut(10);
        $(".notie").fadeIn(10);
        removeNotie();
    }
}





function changeStar(star){
    $("#s1").css("color","#fff");
    $("#s2").css("color","#fff");
    $("#s3").css("color","#fff");
    $("#s4").css("color","#fff");
    $("#s5").css("color","#fff");
    // alert(star);
    if(star=="s1"){
        $("#s1").css("color","#ffec00");
    }else if(star=="s2"){
        $("#s1").css("color","#ffec00");
        $("#s2").css("color","#ffec00");
    }else if(star=="s3"){
        $("#s1").css("color","#ffec00");
        $("#s2").css("color","#ffec00");
        $("#s3").css("color","#ffec00");
    }else if(star=="s4"){
        $("#s1").css("color","#ffec00");
        $("#s2").css("color","#ffec00");
        $("#s3").css("color","#ffec00");
        $("#s4").css("color","#ffec00");
    }else if(star=="s5"){
        $("#s1").css("color","#ffec00");
        $("#s2").css("color","#ffec00");
        $("#s3").css("color","#ffec00");
        $("#s4").css("color","#ffec00");
        $("#s5").css("color","#ffec00");
    }

}




function jumpReview(){
    $(".notie").fadeOut(300,function(){
        $(".review").fadeIn(300);
    });
}


function addNotie(){
    $("#notieBadge").fadeIn(1000);
}

function removeNotie(){
    $("#notieBadge").fadeOut(300);
}


function touchBackArea(e){
        if(e.type=="touchstart"){
        $("#frontPage").removeClass("move");
        $("#frontPage").addClass("fix");    
    }else if(e.type == "touchend") {
        $("#frontPage").removeClass("move");
        $("#frontPage").addClass("fix");          
    }
}





