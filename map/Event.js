class Event{
	//リストで渡されたイベント実行
	static operateEventList(aEventList,aChara){
		return new Promise((res,rej)=>{
			let tOperateEvent=(i)=>{
				if(i>=aEventList.length){
					//全てイベント終了
					res();
					return;
				}
				//イベント処理
				let tEvent=aEventList[i];
				let tChara=(tEvent.target==undefined)?aChara:Map.getCreatureById(tEvent.target);
				switch (tEvent.event) {
					case "turnToHero"://主人公の方をむく
						tChara.turnToHero();
						tOperateEvent(i+1);
						break;
					case "speak"://会話文表示
						this.speakEvent(tEvent.sentence).then(()=>{tOperateEvent(i+1)})
						break;
					case "turn"://振り向く
						tChara.turn(tEvent.direction);
						tOperateEvent(i+1);
						break;
					case "move"://移動
						this.moveEvent(tEvent.directions,tChara).then(()=>{tOperateEvent(i+1)})
						break;
					default:
					console.log("存在しないイベント");
				}
			}
			tOperateEvent(0);
		})
	}
	//会話イベント
	static speakEvent(aSentence){
		return PopupBox.display(aSentence);
	}
	//移動イベント
	static moveEvent(aDirections,tChara){
		return new Promise((res,rej)=>{
			let tMoveFunction=(i)=>{
				if(i>=aDirections.length){
					//移動終了
					res();
					return;
				}
				//強制移動
				tChara.moveHard(convertDirectionToPosition(aDirections[i]),tChara.getMoveComa(aDirections[i]),()=>{tMoveFunction(i+1);})
			}
			tMoveFunction(0);
		})
	}
	//バトルイベント
	static battleEvent(){

	}
}
