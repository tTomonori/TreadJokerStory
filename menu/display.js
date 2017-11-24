	//キャラ表示
	var allChara = mDatabase.getMember();
	var AllCharaNum = mDatabase.getOrder().length;
	for (var i = 0; i < AllCharaNum; i++) {
		var charaId = mDatabase.getOrder()[i];
		var charaData = CharaDatabase.getData(charaId);
		var level = 1;
		for(let tCrystal in allChara[charaId].crystal){
			level+=allChara[charaId].crystal[tCrystal];
		}

		var charaTable = $("<table style='width:100%'>");
		var tr = $("<tr>");
		tr.append("<td rowspan='4'>画像</td>");
		tr.append("<td colspan='2'>"+charaData.name+"</td>");
		charaTable.append(tr);
		tr = $("<tr>");
		tr.append("<td>"+level+" Lv</td>");
		tr.append("<td>"+charaData.profession+"</td>");
		charaTable.append(tr);
		tr = $("<tr>");
		tr.append("<td>HP</td>");
		tr.append("<td>MP</td>");
		charaTable.append(tr);
		tr = $("<tr>");
		tr.append("<td>HPゲージ</td>");
		tr.append("<td>MPゲージ</td>");
		charaTable.append(tr);
		var div = $("<div>");
		div.append(charaTable);
		//divにonclickを設定
		div[0].onclick=setDisplayCharaDetail(i);
		changeCss($(div));
		if(i<3) $("#main-member")[0].append(div[0]);
		else $("#sub-member")[0].append(div[0]);
	}

	var displayCharaNum = 0;
	function setDisplayCharaDetail(charaNum){
		return function(){
			displayCharaNum=charaNum;
			displayCharaDetail();
		}
	}
	function displayCharaDetail(){
			$("#charaName")[0].innerHTML = displayCharaNum+"番目のキャラ";
			displayPopUp('chara',0,0);
	}


	function changeCharaDetail(operation){
		if(operation=="right") displayCharaNum=(displayCharaNum+1)%AllCharaNum;
		else if(operation=="left") displayCharaNum=(displayCharaNum+AllCharaNum-1)%AllCharaNum;
		displayCharaDetail();
	}