class Database{
	static loadSaveData(aCallBack){
		this.NeDB=require(__dirname+"/../node_modules/nedb");
		let fileName=__dirname+"/../savedata/savedata.db";
		db=new NeDB({
			filename:fileName,
			autoload:true
		})
		let tData=["item","member","order","formation","skill","element","orb","meny","option","position","flag"];
		let tLoadData=((i)=>{
			if(i<tData.length){
				this.loadData(tData[i],()=>{
					tLoadData(i+1);
				})
			}
			else{
				aCallBack();
			}
		})
	}
	static loadData(aProperty,aCallBack){
		db.find({data:aProperty},(err,doc)=>{
			this[aProperty]=doc[0].value;
			aCallBack();
		})
	}
}
