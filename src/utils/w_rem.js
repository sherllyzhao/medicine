// rem 原理    1rem  =    html 根标签字体的大小
// 设备的可视宽度   750  移动端页面原图宽度
var designWidth = 1920
function change() {
	if(window.innerWidth <= 768){
		designWidth = 750;
	}else{
		designWidth = 1920;
	}
	var kk = document.documentElement.clientWidth || document.body.clientWidth
	document.documentElement.style.fontSize = kk * 100 / designWidth + 'px'
	// console.log('1rem=' + kk * 100 / designWidth + 'px')
}
change()
// 窗口事件
window.onresize = function () {
	change()
}
// 横竖屏事件
window.onorientationchange = function () {
	change()
}
