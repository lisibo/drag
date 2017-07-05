console.log(1);
/*
 * git config user.name 设置用户名
 * git config user.email 设置邮箱
 * git status 查看状态
 * git log 查看提交记录
 * git clone +url 克隆地址信息
 * git add +文件名 上传值暂存区
 * git commit -a -m “注释” 工作区上传的版本库
 git diff 工作区与暂存区对比
 dit diff --cached 暂存区与版本库对比
 git diff master 工作区与版本库对比
 * */
var box = document.getElementById('box');
box.onmousedown = function(ev){
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
	document.onmousemove = function(ev){
		box.style.left = ev.clientX - disX + 'px';
		box.style.top = ev.clientY - disY + 'px';
	}
}
