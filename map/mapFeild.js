let mMapData={
	map:[
		[08,08,07,00,00,00,00],
		[08,08,06,09,09,09,09],
		[08,08,06,09,09,09,09],
		[08,08,05,04,04,04,04],
		[08,08,08,08,08,08,08],
		[10,10,10,08,10,10,10],
		[10,08,08,08,08,08,10],
		[10,08,08,10,10,10,10]
	],
	mapChip:{
		0:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:4},rt:{image:"kusa1-tuti1",x:1,y:4},lb:{image:"kusa1-tuti1",x:0,y:9},rb:{image:"kusa1-tuti1",x:1,y:9}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		1:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:4},rt:{image:"kusa1-tuti1",x:1,y:0},lb:{image:"kusa1-tuti1",x:0,y:9},rb:{image:"kusa1-tuti1",x:1,y:3}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		2:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:8},rt:{image:"kusa1-tuti1",x:1,y:2},lb:{image:"kusa1-tuti1",x:0,y:9},rb:{image:"kusa1-tuti1",x:1,y:3}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		3:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:8},rt:{image:"kusa1-tuti1",x:1,y:2},lb:{image:"kusa1-tuti1",x:0,y:5},rb:{image:"kusa1-tuti1",x:1,y:1}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		4:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:8},rt:{image:"kusa1-tuti1",x:1,y:8},lb:{image:"kusa1-tuti1",x:0,y:5},rb:{image:"kusa1-tuti1",x:1,y:5}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		5:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:2},rt:{image:"kusa1-tuti1",x:1,y:8},lb:{image:"kusa1-tuti1",x:0,y:1},rb:{image:"kusa1-tuti1",x:1,y:5}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		6:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:2},rt:{image:"kusa1-tuti1",x:1,y:8},lb:{image:"kusa1-tuti1",x:0,y:3},rb:{image:"kusa1-tuti1",x:1,y:9}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		7:{ground:{divide:true,lt:{image:"kusa1-tuti1",x:0,y:0},rt:{image:"kusa1-tuti1",x:1,y:4},lb:{image:"kusa1-tuti1",x:0,y:3},rb:{image:"kusa1-tuti1",x:1,y:9}},
		object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		8:{ground:{image:"kusa1",x:0,y:4},object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		9:{ground:{image:"kusa1-tuti1",x:0,y:4},object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true},
		10:{ground:{image:"koori1",x:0,y:4},object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:false}
	},
	creatures:[{
		creature:"npc",
		position:{x:1,y:1},
		image:"pipo-charachip001",
		speak:(my)=>{
			return new Promise((res,rej)=>{
				my.turnToHero();
				my.speak("zキーで会話終了です").then(()=>{
					res();
				})
			})
		}
	},
	{
		creature:"npc",
		position:{x:4,y:4},
		direction:"left",
		image:"pipo-charachip009b",
		speak:(my)=>{
			return new Promise((res,rej)=>{
				my.turnToHero();
				my.speak("氷のマスは通れないわん!").then(()=>{
					res();
				})
			})
		}
	}]
}
var mMyChara;
PreImage.preLoadMapChip(mMapData,()=>{
	Map.setMap(mMapData)
	mMyChara=new MyChara(0,0,"5_field/1345010501")
	KeyMonitor.setMapPage();
})
window.addEventListener('message', function(event,aMessage) {
	KeyMonitor.closeFrame();
}, false);
