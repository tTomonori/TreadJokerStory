	var Pointer = -1;

	//お金とエレメントの表示
	for(var i=0;i<$(".menu-left").length;i++){
		$(".menu-left")[i].append($("#templete")[0].cloneNode(true));
	}
	//選択時にcss変更
	changeCss($(".menu-list div"));
	function changeCss(jQueryList){
		$(function(){
			jQueryList.hover(function(){
				ReturnCss();
				$(this).css("padding-left","20px");
				Pointer=-1;
			},function(){
				$(this).css("padding-left","0px");
			})
		})
		$(function(){
			ReturnCss();
			jQueryList.click(function(){
				$(this).css("padding-left","20px");
			})
		})
	}

	function ReturnCss(){
		var list=operateList();
		for(var i=0;i<list.length;i++){
			$(list[i]).css("padding-left","0px");
		}
	}

	//画面遷移
	function changeWindow(windowName) {
		$(".menu-window").css("display","none");
		$("#"+windowName+"-menu").css("display","block");
		popUpReturn();
		Pointer = -1;
	}
	//ポップアップ表示
	function popUpMenu(popUpName){
		var top = $("#main-list-"+popUpName).offset().top;
		displayPopUp(popUpName,top,200);
		Pointer=-1;
		changeCss($("#pop-up-menu-"+popUpName+" div div"));
	}
	function displayPopUp(popUpName,top,left){
		$(".pop-up-window").css("display","block")
		$(".pop-up-menu").css("top",top+"px")
		$(".pop-up-menu").css("left",left+"px")
		$(".pop-up-menu")[0].innerHTML="";
		$(".pop-up-menu")[0].append($("#pop-up-menu-"+popUpName)[0].cloneNode(true));
	}
	//ポップアップ削除
	function popUpReturn(){
		$(".pop-up-window").css("display","none")
		Pointer = -1;
	}

	//操作領域を右に移す
	function selectRight(){
		$(".left-modal").css("display","block");
		$(".right-modal").css("display","none");
		Pointer = -1;
	}
	//操作領域を左に戻す
	function selectLeft(){
		ReturnCss();
		$(".left-modal").css("display","none");
		$(".right-modal").css("display","block");
		Pointer = -1;
	}

	//操作領域を返す関数
	function operateArea(){
		if($(".pop-up-window")[0].style.display=="block"){
			return "pop-up";
		}
		else if($(".left-modal")[0].style.display=="block"){
			return "right";
		}
		else{
			return "left";
		}
	}

	var selectList = $("<div>");
	function operateList(){//操作しているリストを返す
		if(Pointer == -1){
			if(operateArea()=="pop-up"){
				selectList = $(".pop-up-window")[0];//pop-up-window
				selectList = selectList.children[0];//pop-up-menu
				selectList = selectList.children[0];//pop-up-menu-??
			}
			else{
				for(var i=0;i<$(".menu-window").length;i++){
					if($(".menu-window")[i].style.display=="block")	{
						selectList = $(".menu-window")[i];
						break;
					}
				}
				if(operateArea()=="right"){
					selectList = selectList.children[1];//右
				}
				else{
					selectList = selectList.children[0];//左
				}
			}
			selectList = selectList.children[0];//リストまで下がる
			selectList = $(selectList).children("div");//リストの配列
			var tempList = new Array();
			for (var i = 0; i < selectList.length; i++) {
				tempList = listPush(tempList,selectList[i]);
			}
			selectList=tempList;
		}
		return selectList;
	}

	function listPush(list,div){
		// console.log(div)
		//選択肢かどうか
		if($(div).children(".unselectable").length<1){
			//選択肢が中にあるか
			// console.log(div,list)
			if($(div).children(".inselectable").length<1){//ない
			// console.log("no")
				list.push(div);
			}
			else{//ある
				var child = $(div).children("div");
				for (var i = 0; i < child.length; i++) {
					if(child[i].className!="inselectable"){
						listPush(list,child[i])
					}
				}
			}
		}
		return list;
	}

	//選択している要素を返す
	function selectedList(){
		if(Pointer==-1) return null;
		return operateList()[Pointer];
	}


	//キーボード操作
	$(window).keydown(function(e){
		if(e.keyCode==38){//↑
			selectPointer("up");
		}
		else if(e.keyCode==40){//↓
			selectPointer("down");
		}
		else if(e.keyCode==8){//backspace
			switch (operateArea()){
				case "pop-up":
					popUpReturn();
					break;
				case "left":
					changeWindow("main");
					break;
				case "right":
					selectLeft();
					break
				default:
					break;
			}
		}
		else if(e.keyCode==88){//x
			endMenu();
		}
		else if(e.keyCode==13){//Enter
			if(selectedList()!=null){
				if(selectedList().onclick==null){
					console.log("エラー：クリックイベントが割り振られていない");
					return;
				}
				selectedList().onclick();
			}
		}
		else{
			console.log("エラー：割り当てられてないキー操作","keyCode:"+e.keyCode);
		}
	})
	function selectPointer(operation){
		var list=operateList();
		for(var i=0;i<list.length;i++){
			$(list[i]).css("padding-left","0px");
		}
		if(Pointer==-1) {
			if(operation=="down") Pointer=0;
			else if(operation=="up") Pointer=list.length-1;
		}
		else if(operation=="down") Pointer=(Pointer+1)%list.length;
		else if(operation=="up") Pointer=(Pointer+list.length-1)%list.length;
		$(selectedList()).css("padding-left","20px");
	}

	//終了メッセージを送る
	function endMenu(){
		window.parent.postMessage("message", "*");
	}
