/*
 * git config user.name 设置用户名
 * git config user.email 设置邮箱
 * git config --global user.name "" 设置全局用户名
 * git config --global user.email "" 设置全局邮箱
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
 * （上传到远程仓库系列）
 * git remote 查询远程仓库的名字（默认origin）
 * git remote add 修改远程仓库的名字
 * git remote -v 查看远程仓库网址
 * git push （远程仓库名字/origin） （哪个分支/master）从本地上传到github网站
 * (手动解决冲突fetch方法)
 * git fetch 同步远程仓库
 * git diff master origin/master 查看冲突
 * git merge origin/master 手动解决冲突
 * (自动解决pull方法)
 * git pull 同步远程仓库 本地没有修改，直接合并github远程仓库上的代码，如果修改会有冲突选择。
 * git commit -a -m "注释" 提交版本库
 * git push origin master 上传远程仓库
 * (开源项目协作)
 * 1.找到项目 fork 完全镜像一个版本
 * 2.打开git git clone 镜像的地址到本地
 * 3.修改后，(git commit -a -m “”)提交处理。同步到github上(git push origin master)
 * 4.pull request => new pull request => 选择合并的请求方案 => create pull request => 留言 =>create pull request => 引用对方说的话选中 + r(私聊)
 * (分支操作)
 * git branch 查看分支
 * git branch (分支名) 新建分支名 指针不同步
 * git checkout (分支名) 指针指向分支
 * git checkout -b (分支名) 创建并且指针指向新分支
 * (分支上内容如何合并到主分支)
 * (new1分支下) git commit -a -m "" 添加到new1分支版本库
 * git checkout master (切换到主分支master)
 * git merge +(需要合并的分支名)  master指针指向分支
 * git merge +(分支名可以是master，让子分支保持与主分支内容一样)
 * (查看或删除分支)
 * git branch --merged 当前的分支所合并的分支
 * git branch --no-merged 当前的分支没有合并的分支
 * git branch -d (分支名) 删除与master合并的指定分支
 * git branch -D (分支名) 强制删除指定分支
 git diff 工作区与暂存区对比
 dit diff --cached 暂存区与版本库对比
 git diff master 工作区与版本库对比12345
 12345
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