class ConsumItemDatabase{
	static getItem(aName){
		return this.database[aName];
	}
}
ConsumItemDatabase.database={
	medicen:{
		name:"薬"
	},
	fruit:{
		name:"きのみ"
	},
	enhancer:{
		name:"強化剤"
	}
}
