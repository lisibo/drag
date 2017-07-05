/*
 * git config user.name 设置用户名
 * git config user.email 设置邮箱
 * git status 查看状态
 * git log 查看提交记录 （q还原）
 * git clone +url 克隆地址信息
 * git add +文件名 指定文件上传至暂存区
 * git add . 所有文件上传暂存区
 * git commit -m "注释" （暂存区提交到版本库）
 * git commit -a -m “注释” 工作区上传的版本库
 * git reset HEAD +文件名 指定文件从暂存区返回工作区
 * git reset HEAD . 所有文件从暂存区返回工作区
 * git checkout -- 文件名 （工作区内容依次从暂存区还原内容，暂存区没有内容直接还原版本区内容）
 git diff 工作区与暂存区对比
 dit diff --cached 暂存区与版本库对比
 git diff master 工作区与版本库对比
 * */
//面向过程
var box = document.getElementById('box');
box.onmousedown = function(ev){
	var ev = ev||event;
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
	document.onmousemove = function(ev){
		var ev = ev||event;
		box.style.left = ev.clientX - disX + 'px';
		box.style.top = ev.clientY - disY + 'px';
	}
	document.onmouseup = function(){
		document.onmousemove = document.onmouseup = null;
	}
}
//面向对象