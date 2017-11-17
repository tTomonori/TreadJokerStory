class KeyMonitor{
	static setMapPage(){
		$(window).keydown((e)=>{
			//移動
			if(e.keyCode==37)mMyChara.move("left");
			if(e.keyCode==38)mMyChara.move("up");
			if(e.keyCode==39)mMyChara.move("right");
			if(e.keyCode==40)mMyChara.move("down");
			//メニュー
			if(e.keyCode==88)this.displayMenu();
			//話かける
			if(e.keyCode==90)mMyChara.speakTo();
		})
	}
	//メニューを開く
	static displayMenu(){
		$(window).off();
		let tFrame=document.getElementById("frame");
		tFrame.style.display="block";
		tFrame.src="../menu/menu.html";
		tFrame.focus();
		this.closeFrame=()=>{
			tFrame.style.display="none";
			tFrame.src="";
			this.setMapPage();
			window.focus();
		}
	}
	//ユーザからの応答待ち
	static waitKey(aCallBack){
		$(window).keydown((e)=>{
			if(e.keyCode==90)aCallBack();
		})
	}
	//キー入力監視ストップ
	static stop(){
		$(window).off();
	}
	//iframeを閉じる時に実行(他のメソッドで上書きする)
	static closeFrame(){

	}
}
