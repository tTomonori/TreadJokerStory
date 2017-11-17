let mMapData={
	map:[
		[8,8,7,0,0,0,0],
		[8,8,6,9,9,9,9],
		[8,8,6,9,9,9,9],
		[8,8,5,4,4,4,4],
		[8,8,8,8,8,8,8]
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
		9:{ground:{image:"kusa1-tuti1",x:0,y:4},object:{image:"",x:0,y:0},accessories:{image:"",x:0,y:0},canOn:true}
	},
	creatures:[]
}
var mMyChara;
PreImage.preLoadMapChip(mMapData,()=>{
	Map.setMap(mMapData)
	mMyChara=new MyChara(0,0,"5_field/1345010501")
	setKeyMonitor();
})
//キー入力監視
function setKeyMonitor(){
	$(window).keydown((e)=>{
		if(e.keyCode==37)mMyChara.move("left");
		if(e.keyCode==38)mMyChara.move("up");
		if(e.keyCode==39)mMyChara.move("right");
		if(e.keyCode==40)mMyChara.move("down");
	})
}
