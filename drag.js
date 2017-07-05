/*
 * git config user.name 设置用户名
 * git config user.email 设置邮箱
 * git status 查看状态
 * git log 查看提交记录 （q还原）
 * git clone +url 克隆地址信息
 * git add +文件名 指定文件上传至暂存区
 * git add . 所有文件上传暂存区
 * git commit -m "注释" （暂存区提交到版本库）
 * git commit （文件名） -m "注释" （指定暂存区提交到版本库）
 * git commit -a -m “注释” 工作区所有内容上传的版本库
 * git reset HEAD +文件名 指定文件从暂存区返回工作区
 * git reset HEAD . 所有文件从暂存区返回工作区
 * git rm +文件名 可以把暂存区的文件删除（工作区有这个文件则删除不掉）
 * git rm -f +文件名 （可以删除暂存区文件，工作区有内容也会被一起删除）
 * git rm --cached +文件名 （可以删除暂存区文件，工作区有内容不会被一起删除，会保留）
 * git checkout -- 文件名 （工作区内容误删，可以依次从暂存区还原内容，暂存区没有内容则直接还原最新版本区内容）
 * git checkout （commit号） +文件名   误删后还原指定版本区的文件
 * git reset --hard （commit号） 还原版本 
 * git reset --hard HEAD^ 还原最新版本的前一个版本，内容会改变
 * git reset --hard HEAD`n 还原当前版本的前几个版本,内容会改变
 * git reflog 查看所有未来的commit号，可以通过 git reset --hard +(commit号) 回到新版本
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