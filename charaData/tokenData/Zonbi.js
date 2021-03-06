class Zonbi extends Token{
	static getText(){
		//キャラ説明
		return "トークン：<br>ザーウィンのスキルによって召喚される";
	}
	constructor(aX,aY,aTeam,aOperationNum,aDelay){
		let tData=Zonbi.getCharaData();
		super(aX,aY,aTeam,tData,aOperationNum,aDelay);
		this.data=tData;
	}
	static getCharaData(){
		return {NAME:"ソンビ",
						HP:20,
						MP:0,
						ATK:22,
						DEF:22,
						SPD:18,
						MOV:2,
						TYPE:"diamond",
						IMAGE:1449010001,
						DECK:Zonbi.getDeck()
		}
	}
	static getDeck(){
		let tSkill={NUMBER:1,
			TEXT:"隣接した4マスに威力4のダメージ",
			RANGE:[["circumference",1]],
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
		};

		return [
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			{NUMBER:7,
				TEXT:"シャッフルする(ターン獲得しない)",
				RANGE:[],
				POWER:0,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[{effect:"shuffle"}],
				M_ATTACK:0,
				F_ATTACK:false,
				E_ATTACK:true,
				ANIMATION:[0]
			},
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			tSkill,
			{NUMBER:14,
				TEXT:"相手全体に威力2のダメージ その後シャッフル",
				RANGE:[["enemy"]],
				POWER:2,
				DELAY:0,
				MAGIC:0,
				SUPPORT_Be_Myself:[],
				SUPPORT_Af_Myself:[],
				SUPPORT_Be_Enemy:[],
				SUPPORT_Af_Enemy:[],
				SUPPORT_Otherwise:[{effect:"revers"},{effect:"shuffle"}],
				M_ATTACK:0,
				F_ATTACK:false,
		    E_ATTACK:true,
				ANIMATION:[5]
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
