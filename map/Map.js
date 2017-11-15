class Map{
	static setMap(aMap){
		this.map=new Array();
		//マスセット
		for(let tMas of aMap.map){
			this.map.push(new Mas(tMas));
		}
		//npcとかセット
		this.creatures=new Array();
		for(let tCreature of aMap.creatures){
			
		}
	}
}
