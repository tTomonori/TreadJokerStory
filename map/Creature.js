class Creature{
	constructor(aX,aY,aImage){
		this.x=aX;
		this.y=aY
		this.tag=document.createElement("div");
		this.tag.style.position="absolute";
		this.tag.style.width=mMasSize+"px";
		this.tag.style.height=mMasSize+"px";
		this.tag.style.marginTop=-mMasSize+"px";
		this.tag.style.overflow="hidden";
		this.tag.style.zIndex="5";
		this.image=document.createElement("img");
		this.image.src=aImage;
		this.tag.appendChild(this.image);
		this.tag.id="creature"+(mCreatureCounter++);
		this.image.onload=()=>{
			this.image.width=this.image.width*mMasSize/(mMasChipSize*3);
			// this.image.height=this.image.height*mMasSize/(mMasChipSize*4);
		}
		this.setImage(1,0);
		Map.getMas(this.x,this.y).onChara(this);//マスクラスにキャラセット
		this.appendToMas();
		this.moveFlag=false;
	}
	//画像のコマ変更
	setImage(aX,aY){
		this.image.style.marginTop=-mMasSize*aY+"px";
		this.image.style.marginLeft=-mMasSize*aX+"px";
	}
	//移動する
	move(aDirection){
		if(this.moveFlag)return;
		this.moveFlag=true;
		let tNextMas;
		let tComa;
		let tDirection;
		switch (aDirection) {
			case "up":
				tNextMas=Map.getMas(this.x,this.y-1);
				tComa=[[0,3],[1,3],[2,3],[1,3]]
				tDirection=[0,-1];
				break;
			case "down":
				tNextMas=Map.getMas(this.x,this.y+1);
				tComa=[[0,0],[1,0],[2,0],[1,0]]
				tDirection=[0,1];
				break;
			case "left":
				tNextMas=Map.getMas(this.x-1,this.y);
				tComa=[[0,1],[1,1],[2,1],[1,1]]
				tDirection=[-1,0];
				break;
			case "right":
				tNextMas=Map.getMas(this.x+1,this.y);
				tComa=[[0,2],[1,2],[2,2],[1,2]]
				tDirection=[1,0];
				break;
			default:
		}
		//移動できない
		if(tNextMas==null||tNextMas.getOnChara()!=null||tNextMas.canOn()==false){
			this.moveFlag=false;
			return;
		}
		//移動できる
		this.moveAnimate(tDirection,tComa,tNextMas)
	}
	moveAnimate(aDirection,aComa,aNextMas){
		let tPreMas=Map.getMas(this.x,this.y);
		//マスクラスの操作
		tPreMas.outChara();
		aNextMas.onChara(this);
		this.x+=aDirection[0];
		this.y+=aDirection[1];
		// tDirection=[0,0]
		//移動アニメーション
		$("#"+this.tag.id).animate({
			marginTop:aDirection[1]*mMasSize-mMasSize+"px",
			marginLeft:aDirection[0]*mMasSize+"px"
		},300,"linear",()=>{
			//アニメーション終了時
			this.tag.style.marginTop=-mMasSize+"px";
			this.tag.style.marginLeft="0";
			this.appendToMas();
			this.moveFlag=false;
		})
		//画像変更アニメーション
		for(let i=0;i<aComa.length;i++){
			setTimeout(()=>{this.setImage(aComa[i][0],aComa[i][1])},i*100)
		}
	}
	appendToMas(){
		let tMas=Map.getMas(this.x,this.y);
		tMas.getElement().appendChild(this.tag);
	}
}
var mCreatureCounter=0;
