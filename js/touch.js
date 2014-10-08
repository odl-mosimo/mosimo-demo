var loginArea = "close";


function init(e) {
	var nowElement = e.srcElement;
	var tmpId = nowElement.id;
	var tmpClass = nowElement.className;
	var famCheck = tmpClass.substr(0,3); 
	var famNum;
	var famFace;
	console.log(tmpId);
	// console.log(famCheck);

	if(e.type == "touchstart") {

		if(tmpId == "bottom_menu_map") {
			e.preventDefault();
			console.log("111111");
		}

	}else if(e.type == "touchend") {

		if(tmpId == "drawerImg") {
			drawer(e);
			$("#container_back").fadeIn(10);
		}else if(famCheck == "fam") {
			// もし家族がクリックされたら
			famNum = $(nowElement).parent(".famBox").attr("famNum");
			famFace = $(nowElement).prev(".famWrap").find(".famFace").attr("src");
			console.log(famFace);


			if(famNum == "all") {
				familyPos("all");
			}else{
				selectedPos(famNum);
			}


			$("drawerImg").fadeOut(300, function() {
				$("drawerImg").attr("src",famFace);
				$("drawerImg").fadeIn(300);
			});


			drawer(e);

		}else if(tmpId == "mainBtn") {
			getMyPos();
			$("#message_1").fadeIn(10);

		}else if(tmpId == "positionBox") {
			getMyPos();
			$("#container_map").fadeIn(10, function() {
				$("#container_message").fadeOut(100);
			});
		}else if(tmpId == "topMenuBar") {
			$("#container_message").fadeIn(10, function() {
				$("#container_map").fadeOut(100);
			});
		}else if(tmpId == "papaPos") {
			$("#container_map").fadeIn(10, function() {
				$("#container_message").fadeOut(100);
				selectedPos(1);
			});
			
		}else if(tmpId == "mamPos") {			
			$("#container_map").fadeIn(10, function() {
				$("#container_message").fadeOut(100);
				selectedPos(2);
			});
		}else if(tmpId == "sisPos") {
			$("#container_map").fadeIn(10, function() {
				$("#container_message").fadeOut(100);
				selectedPos(3);
			});
		}else if(tmpId == "mapBtnCover") {
			$("#mapBtn").removeClass("orange");
			$("#msgBtn").removeClass("orange");
			$("#setBtn").removeClass("orange");
			$("#mapBtn").addClass("orange");
			$("#container_map").fadeIn(10, function() {
				$("#container_message").fadeOut(100);
				$("#container_setting").fadeOut(100);
			});
		}else if(tmpId == "setBtnCover") {
			$("#mapBtn").removeClass("orange");
			$("#msgBtn").removeClass("orange");
			$("#setBtn").removeClass("orange");
			$("#setBtn").addClass("orange");
			$("#container_setting").fadeIn(10, function() {
				$("#container_map").fadeOut(100);
				$("#container_message").fadeOut(100);
			});
		}else if(tmpId == "msgBtnCover") {
			$("#mapBtn").removeClass("orange");
			$("#msgBtn").removeClass("orange");
			$("#setBtn").removeClass("orange");
			$("#msgBtn").addClass("orange");
			$("#container_message").fadeIn(10, function() {
				$("#container_map").fadeOut(100);
				$("#container_setting").fadeOut(100);
			});
		}else if(tmpId == "sendMessage") {
			var nowText = document.getElementById("inputText").value;
			$("#message_2").fadeIn(200, function() {
				document.getElementById("messageBox").textContent = nowText;
			});
		}else if(tmpId == "sendText") {
			var nowText = document.getElementById("inputText").value;
			$("#message_2").fadeIn(200, function() {
				document.getElementById("messageBox").textContent = nowText;
				footerStart(container_message);
			});

		}else if(tmpId == "bottom_menu_map") {

		}
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

	var nowElement = e.srcElement;
	var tmpId = nowElement.id;


	if(e.type=="touchend"){

		if(tmpId == "form_login"){
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
		}else if(tmpId == "btn_new") {
			location.href = "contract.html";
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



// 強制的に一番下までスクロールさせる
function footerStart(selector){
      // #itemまでスクロール
    $('html,body').animate({scrollTop: $(selector).offset().top},'slow');
    //スクロールの着地点を生成
}
 //セレクタ指定




