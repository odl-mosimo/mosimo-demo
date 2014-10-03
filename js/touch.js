var loginArea = "close";




function setEventListener(id,fun){
	var touch_area = document.getElementById(id);
	touch_area.addEventListener("touchstart", fun, false);
    touch_area.addEventListener("touchmove", fun, false);
    touch_area.addEventListener("touchend", fun, false);
}


function setEventListener_entry(){
	setEventListener("btn_new",touch_entry);
	setEventListener("btn_login",touch_entry);
}

function setEventListener_contract(){
	setEventListener("agreement",touch_contract);
}

function touch_entry(e){
	if(e.type=="touchend"){

		if(loginArea=="close"){
			$("#formBox").addClass("touched_login");
			$("#container_entry").addClass("addshadow");
			$("#fase1").fadeOut(200,function(){
										$("#fase2").fadeIn(200);
									});
			setTimeout(function(){
				$(".entry_input").removeAttr("disabled");	
			},1000)
			
			loginArea = "open";

		}else if(loginArea=="open"){
			$("#formBox").removeClass("touched_login");
			$("#container_entry").removeClass("addshadow");
			loginArea = "close";
		}
	}
}


function touch_contract(e){
	if(e.type=="touchend"){
			$("#agreeBtnBox").addClass("agreeFase2");
			$("#fase1").fadeOut(300,function(){
				$("#fase2").fadeIn(300);
			})	
	}
}


var drawerCheck="close";
function drawer(e){
	if(e.type=="touchend"){
		if(drawerCheck=="close"){
			$("#container_map").addClass("drawer");
			drawerCheck="open";
		}else if(drawerCheck=="open"){
			$("#container_map").removeClass("drawer");
			drawerCheck="close";
		}
	}
}



function plus_member(e){
	if(e.type=="touchend"){
		// alert();
		var inputName = $("#inputName");
		var inputEmail = $("#inputEmail");
		// if((inputEmail=="")||(inputName=="")){

		// }else{
		// 	$("#plusBtn").removeClass("nonactive");
		// }
	}
}






