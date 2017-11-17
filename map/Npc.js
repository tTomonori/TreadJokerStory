class Npc extends Creature{
	constructor(aData){
		super(aData.position.x,aData.position.y,"../image/map/キャラチップ/"+aData.image+".png",2);
		if(aData.direction!=undefined)this.turn(aData.direction);
		if(aData.speak!=undefined){
			this.speaked=()=>{
				KeyMonitor.stop();
				aData.speak(this).then(()=>{
					KeyMonitor.setMapPage();
				});
			}
		}
	}
}
