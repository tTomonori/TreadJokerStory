var allItem = mDatabase.getItemList();
function displayConsum(){
	selectRight();
	var list = $('<div class="item-consum" id="item-consum-list"></div>');
	list.append('<div class="inselectable"></div>')
	for(var i=0;i<allItem.consum.length;i++){
		console.log(allItem.consum[i]);
		var div = $("<div class='item-consum-list'>"+ConsumItemDatabase.getItem(allItem.consum[i]).name+"</div>");
		changeCss($(div));
		$(list).append(div);
	}

	$("#item-menu .menu-right .inner-right")[0].prepend(list[0]);
}
function displayImportant(){
	selectRight();
	var list = $('<div class="item-important" id="item-important-list"></div>');
	list.append('<div class="inselectable"></div>')
	for(var i=0;i<allItem.important.length;i++){
		console.log(allItem.important[i]);
		var div = $("<div class='item-important-list'>"+ImportantItemDatabase.getItem(allItem.important[i]).name+"</div>");
		changeCss($(div));
		$(list).append(div);
	}

	$("#item-menu .menu-right .inner-right")[0].prepend(list[0]);
}