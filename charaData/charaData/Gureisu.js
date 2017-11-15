class Gureisu extends Chara{
	static getText(){
		//キャラ説明
		return "トリックタイプ：<br>相手が踏むと不利な効果が発動するトラップを設置できる";
	}
	constructor(aX,aY,aTeam,aOperationNum){
		let tData=Gureisu.getCharaData();
		super(aX,aY,aTeam,tData,aOperationNum);
		this.data=tData;
	}
	static getCharaNatureSkill(){
		//特性の説明
		return "なし";
	}
	static getCharaData(){
		return {NAME:"グレイス",
						HP:90,
						MP:25,
						ATK:25,
						DEF:24,
						SPD:24,
						MOV:2,
						TYPE:"club",
						IMAGE:1053010001,
						DECK:Gureisu.getDeck()
		}
	}
	getActorUrl(){
		return '../image/chara/3_sv_actors/'+String(this.image+301)+'.png';
	}
	static getDeck(){
		return [
			{NUMBER:1301,
				TEXT:"隣接した4マスに、相手が踏むとMPを0にするトラップを設置",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"mp",value:-1000,target:["enemy"],remove:true,range:[["circumference",1]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[]
			},
			{NUMBER:1302,
				TEXT:"２マス隣に威力４のダメージ",
				RANGE:[["distance",2]],
				POWER:4,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:1303,
				TEXT:"2マス隣に威力４のダメージ",
				RANGE:[["distance",2]],
				POWER:4,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:1304,
				TEXT:"縦一列に威力３のダメージ",
				RANGE:[["vertical",1]],
				POWER:3,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:1305,
				TEXT:"横一列に威力３ダメージ",
				RANGE:[["horizontal",1]],
				POWER:3,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:1306,
				TEXT:"十字に威力２ダメージ",
				RANGE:[["vertical",1],["horizontal",1]],
				POWER:2,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:7,
				TEXT:"シャッフルしてもう一度行動",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"getTurn"}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[{effect:"shuffle"}],
				M_ATTACK:0,
				F_ATTACK:false,
				E_ATTACK:true,
				ANIMATION:[0]
			},
			{NUMBER:1308,
				TEXT:"相手全体に威力２のダメージ",
				RANGE:[["enemy"]],
				POWER:2,
				DELAY:10,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[5]
			},
			{NUMBER:1309,
				TEXT:"周囲８マスに威力３のダメージ",
				RANGE:[["square",3]],
				POWER:3,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[3]
			},
			{NUMBER:1310,
				TEXT:"周囲8マスに、相手が踏むとDELAYが50増加するトラップを設置",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:2,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"delay",value:-50,target:["enemy"],remove:true,range:[["square",3]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:true,
		    E_ATTACK:true,
				ANIMATION:[]
			},
			{NUMBER:1311,
				TEXT:"周囲8マスに、相手が踏むと15ダメージを与えるトラップを設置",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:1,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"mine",value:15,target:["enemy"],remove:true,range:[["square",3]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[]
			},
			{NUMBER:1312,
				TEXT:"周囲8マスに、相手が踏むと15ダメージを与えるトラップを設置",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:1,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"mine",value:15,target:["enemy"],remove:true,range:[["square",3]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[]
			},
			{NUMBER:1313,
				TEXT:"周囲24マスに、相手が踏むと20ダメージを与えるトラップを設置",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:5,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"mine",value:20,target:["enemy"],remove:true,range:[["square",5]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[],
				M_ATTACK:0,
				F_ATTACK:true,
		    E_ATTACK:false,
				ANIMATION:[]
			},
			{NUMBER:1314,
				TEXT:"ランダムなマスに、相手が踏むと25ダメージを与えるトラップを10個設置 その後シャッフル",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[{effect:"setTrap",trapEffect:"mine",value:25,target:["enemy"],remove:true,range:[["random",10]]}],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[{effect:"revers"},{effect:"shuffle"}],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[]
			},
			{NUMBER:0,
					TEXT:"スカ　何も起こらない",
					RANGE:[],
					POWER:0,
					DELAY:0,
					MAGIC:0,
					SUPPORT_Be_Myself:[],
					SUPPORT_Af_Myself:[],
					SUPPORT_Be_Enemy:[],
					SUPPORT_Af_Enemy:[],
					SUPPORT_Otherwise:[{effect:"revers"}],
					M_ATTACK:0,
					F_ATTACK:false,
			    E_ATTACK:true,
					ANIMATION:[0]
				},]
	}
}
