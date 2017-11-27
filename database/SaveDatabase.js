class SaveDatabase{
	static loadSaveData(aCallBack){
		this.NeDB=require(__dirname+"/../node_modules/nedb");
		let fileName=__dirname+"/../savedata/savedata.db";
		this.db=new this.NeDB({
			filename:fileName,
			autoload:true
		})
		this.data=["item","member","order","formation","skill","element","orb","money","option","position","flag"];
		let tLoadData=((i)=>{
			if(i<this.data.length){
				this.loadData(this.data[i],()=>{
					tLoadData(i+1);
				})
			}
			else{
				aCallBack();
			}
		})
		tLoadData(0);
	}
	static loadData(aProperty,aCallBack){
		this.db.find({data:aProperty},(err,doc)=>{
			if(doc.length==0) this[aProperty]={};
			else this[aProperty]=doc[0].value;
			aCallBack();
		})
	}
	//アイテムリスト取得
	static getItemList(){
		return this.item;
	}
	//アイテムリスト取得記録
	static setItemList(aData){
		this.item=aData;
	}
	//メンバー取得
	static getMember(){
		return this.member;
	}
	//メンバー取得記録
	static setMember(aData){
		this.member=aData;
	}
	//隊列
	static getOrder(){
		return this.order;
	}
	//隊列記録
	static setOrder(aData){
		this.order=aData;
	}
	//陣形
	static getFormation(){
		return this.formation;
	}
	//陣形記録
	static setFormation(aData){
		this.formation=aData;
	}
	//スキル
	static getSkill(){
		return this.skill;
	}
	//スキル記録
	static setSkill(aData){
		this.skill=aData;
	}
	//エレメント
	static getElement(){
		return this.element;
	}
	//エレメント記録
	static setElement(aData){
		this.element=aData;
	}
	//オーブ
	static getOrb(){
		return this.orb;
	}
	//オーブ記録
	static setOrb(aData){
		this.orb=aData;
	}
	//お金
	static getMoney(){
		return this.money;
	}
	//お金記録
	static setMoney(aData){
		this.money=aData;
	}
	//設定
	static getOption(){
		return this.option;
	}
	//設定記録
	static setOption(aData){
		this.option=aData;
	}
	//主人公の位置
	static getPosition(){
		return this.position;
	}
	//主人公の位置記録
	static setPosition(aData){
		this.position=aData;
	}
	//フラグ取得
	static getFlag(aFlagName){
		let tFlag=this.flag;
		if(tFlag[aFlagName]==undefined)return false;
		return tFlag[aFlagName];
	}
	//フラグセット
	static setFlag(aFlagName,aFlag){
		let tFlag=this.flag;
		tFlag[aFlagName]=aFlag;
	}
	//データをセーブ
	static saveData(){
		for(let tData of this.data){
			this.db.insert({data:tData,value:this[tData]});
		}
	}
}
