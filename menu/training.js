	//選択肢を動的に生成
	var list = $('<div class="training-chara" id="training-chara-list"></div>');
	list.append('<div class="inselectable"></div>')
	for (var i = 0; i < AllCharaNum; i++) {
		var div = $("<div class='training-chara-list'>"+i+"番目のキャラ</div>");
		changeCss($(div));
		$(list).append(div);
	}
	$("#training-menu .menu-left .menu-list")[0].prepend(list[0]);
