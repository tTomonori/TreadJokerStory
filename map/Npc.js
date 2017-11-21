class Npc extends Creature{
	constructor(aData){
		super(aData,"../image/map/キャラチップ/"+aData.image+".png");
		if(aData.direction!=undefined)this.turn(aData.direction);
		if(aData.speak!=undefined){
			this.speaked=()=>{
				//キー入力監視ストップ
				KeyMonitor.stop();
				//イベント実行
				Event.operateEventList(aData.speak,this).then(()=>{
					//イベント終了時
					KeyMonitor.setMapPage();
				})
			}
		}
	}
}
