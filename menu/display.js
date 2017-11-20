	//キャラ表示
	for (var i = 0; i < 5; i++) {

		var charaTable = $("<table style='width:100%'>");
		var tr = $("<tr>");
		tr.append("<td rowspan='4'>画像</td>");
		tr.append("<td colspan='2'>名前</td>");
		charaTable.append(tr);
		tr = $("<tr>");
		tr.append("<td>レベル</td>");
		tr.append("<td>職業</td>");
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
		// div.onclick="";

		changeCss($(div));
		if(i<3) $("#main-member")[0].append(div[0]);
		else $("#sub-member")[0].append(div[0]);
	}