console.log(1);
var box = document.getElementById('box');
box.onmousedown = function(ev){
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
}
