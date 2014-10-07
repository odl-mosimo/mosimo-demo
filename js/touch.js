var loginArea = "close";


function init(e) {
	var nowElement = e.srcElement;
	var tmpId = nowElement.id;
	var tmpClass = nowElement.className;
	var famCheck = tmpClass.substr(0,3); 
	console.log(famCheck);


	// var family = [ "太郎",
	// 			   "家族",
	// 			   "父さん",
	// 			   "母さん",
	// 			   "桃子"
	// 			];

	// 	family[0][0] = "url('../img/.png')",
	// 	family[1][0] = "url('../img/.png')",
	// 	family[2][0] = "url('../img/.png')",
	// 	family[3][0] = "url('../img/.png')",
	// 	family[4][0] = "url('../img/.png')";


	var family = {
		
		name: "家族"

		,function name() {

			console.log(this.name);
		
		}
	};



	console.log(family[0][0]);


	if(tmpId == "drawerBtn") {
		drawer(e);
	}else if(famCheck == "fam") {
		// もし家族がクリックされたら
		document.getElementById("drawerBtn").style.backgroundImage = "url('img_tree.png')";
		drawer(e);

	}

}


function drawer(e) {
	var drawerCheck = document.getElementById("container_map").classList;
	if(e.type == "touchend") { 
		if(drawerCheck == "drawer") { 
			$("#container_map").removeClass("drawer");
		}else {
			$("#container_map").addClass("drawer");
		}
	}
}




function setEventListener(id, fun) {
	var touch_area = document.getElementById(id);
	touch_area.addEventListener("touchstart", fun, false);
    touch_area.addEventListener("touchmove", fun, false);
    touch_area.addEventListener("touchend", fun, false);
}


function setEventListener_entry() {
	setEventListener("btn_new",touch_entry);
	setEventListener("btn_login",touch_entry);
}

function setEventListener_contract() {
	setEventListener("agreement",touch_contract);
}

function touch_entry(e) {
	if(e.type=="touchend"){

		if(loginArea == "close") {
			$("#formBox").addClass("touched_login");
			$("#container_entry").addClass("addshadow");
			$("#fase1").fadeOut(200, function() {
										$("#fase2").fadeIn(200);
									});
			setTimeout(function() {
				$(".entry_input").removeAttr("disabled");	
			}, 1000)
			
			loginArea = "open";

		}else if(loginArea == "open") {
			$("#formBox").removeClass("touched_login");
			$("#container_entry").removeClass("addshadow");
			loginArea = "close";
		}
	}
}


function touch_contract(e) {
	if(e.type == "touchend") {
			$("#agreeBtnBox").addClass("agreeFase2");
			$("#fase1").fadeOut(300, function() {
				$("#fase2").fadeIn(300);
			})	
	}
}






function plus_member(e) {
	if(e.type == "touchend") {
		// alert();
		var inputName = $("#inputName");
		var inputEmail = $("#inputEmail");
		// if((inputEmail=="")||(inputName=="")){

		// }else{
		// 	$("#plusBtn").removeClass("nonactive");
		// }
	}
}






