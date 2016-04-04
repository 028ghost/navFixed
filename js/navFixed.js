/*
* Ghost
* QQ：200581882
 */
var addEvent = function(elem, type, fn) {
    if (window.addEventListener) {
        var addEvent = function(elem, type, fn) {
            elem.addEventListener(type, fn, false);
        }
    } else if (window.attachEvent) {
        var addEvent = function(elem, type, fn) {
            elem.attachEvent('on' + type, fn);
        }
    }

    addEvent(elem, type, fn);
};

var navFixed = function(obj) {
    addEvent(window, 'scroll', function() {
        var top = document.documentElement.scrollTop;

        var ul = document.getElementById(obj.id);
        var li = ul.getElementsByTagName('li');

        for (var i = 0; i < li.length; i++) {
            var box = document.getElementById(obj.box + (i + 1));
            if (box == null) continue;

            var cual = top - box.offsetTop;

            if (cual + 300 > 0 && cual < box.offsetHeight - 300) {
                li[i].style.backgroundColor = 'red';
            } else {
                li[i].style.backgroundColor = '';
            }
        }
    });
}

navFixed({
    id: 'nav',  //导航ID
    box: 'd'    //内容盒容器，ID名称需要加数字；如：d1、d2、d3(需要拉开box之间的间距，尽可能用padding-top)
});
