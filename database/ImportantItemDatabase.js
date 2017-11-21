class ImportantItemDatabase{
	static getItem(aName){
		return this.database[aName];
	}
}
ImportantItemDatabase.database={
	key:{
		name:"鍵"
	},
	deliverables:{
		name:"届け物"
	}
}
