class MyChara extends Creature{
	constructor(aX,aY,aImage){
		super(aX,aY,"../image/map/"+aImage+".png",3);
		//マップ表示位置調整
		let tMap=document.getElementById("map");
		tMap.style.marginTop=aY*mMasSize+350-mMasSize+"px";
		tMap.style.marginLeft=aX*mMasSize+500-mMasSize+"px";
	}
	moveAnimate(aDirection,aComa,aNextMas){
		super.moveAnimate(aDirection,aComa,aNextMas);
		$("#map").animate({
			marginTop:"-="+aDirection[1]*mMasSize+"px",
			marginLeft:"-="+aDirection[0]*mMasSize+"px"
		},300,"linear")
	}
}
