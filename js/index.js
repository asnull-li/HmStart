var bgEle = document.querySelector('.bg');
	bgEle.addEventListener("click",function(){
		 this.style.visibility = 'hidden';
		this.style.opacity = '0';
})

// 显示菜单
function menu(){
	var bgEle = document.querySelector(".bg");
	bgEle.style.visibility = 'visible';
	bgEle.style.transition = 'opacity 0.2s';
	bgEle.style.opacity = '1';
}