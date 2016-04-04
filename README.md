## 预览效果
#### [预览地址](http://codepen.io/ghost028/pen/qZjpRL)

##1.调用JS
> 在\</body>里加入\<script src="js/createSVG.js"></script>

##2.HTML结构
#### 导航结构
```html
<ul id="nav">
    <li>Item01</li>
    <li>Item01</li>
    <li>Item02</li>
    <li>Item03</li>
    <li>Item04</li>
</ul>
```
#### 内容盒子结构
```html
<div style="padding:400px 0 0 0;">
    <div class="box" id="d1">内容1</div>
    <div class="box" id="d2">内容2</div>
    <div class="box" id="d3">内容3</div>
    <div class="box" id="d4">内容4</div>
    <div class="box">我没有ID</div>
</div>
'''

###3.接口
* *号为必填项
```javascript
    navFixed({
    id: 'nav',  //导航ID
    box: 'd'    //内容盒容器，ID名称需要加数字；如：d1、d2、d3(需要拉开box之间的间距，尽可能用padding-top)
});
```
###4.作者
* Ghost
* QQ：200581882
