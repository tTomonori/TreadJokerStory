class Map{
	static setMap(aMap){
		this.map=new Array();
		//マスセット
		let tMap=document.getElementById("map");
		tMap.textContent="";
		for(let tMasList of aMap.map){
			let tMasArray=new Array();
			this.map.push(tMasArray);
			for(let tCol of tMasList){
				let tMas=new Mas(aMap.mapChip[tCol]);
				tMasArray.push(tMas);
				tMap.appendChild(tMas.getElement());
			}
			tMap.appendChild(document.createElement("br"));
		}
		//npcとかセット
		this.creatures=new Array();
		for(let tCreature of aMap.creatures){

		}
	}
	static getMas(aX,aY){
		if(aY<0||this.map.length<=aY)return null;
		if(aX<0||this.map[aY].length<=aX)return null;
		return this.map[aY][aX];
	}
}
