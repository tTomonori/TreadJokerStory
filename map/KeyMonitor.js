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
		})
	}
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
	static closeFrame(){

	}
}
