// var DragRange = function() {
//     this.obj = document.getElementById('box');
//     var drag = this.obj.getElementsByTagName('span');
//     this.load = this.obj.getElementsByTagName('em')[0];
//     this.d = 0;
//     this.c = 0;
//     var self = this;
//     for (var i = 0; i < drag.length; i++) {
//         (function(i) {
//             drag[i].onmousedown = function(e) {
//                 var _this = this;
//                 var _i = i;
//                 self.mouseDown(e, i, _this);
//                 return false;
//             };
//         })(i);
//     }
// };

// DragRange.prototype.mouseDown = function(e, i, _this) {
//     var e = e || event;

//     poX = e.clientX - _this.offsetLeft;
//     var _than = this;
//     document.onmousemove = function(e) {
//         _than.mouseMove(e, i, _this);


//     };

//     document.onmouseup = function() {
//         document.onmousemove = null;
//         if (_this.releaseCapture) {
//             _this.releaseCapture();
//         }
//     };

// };

// DragRange.prototype.mouseMove = function(e, i, _this) {
//     var e = e || event;
//     var l = e.clientX - poX;
//     if (l < 0) {
//         l = 0;
//     } else if (l > this.obj.offsetWidth - _this.offsetWidth) {
//         l = this.obj.offsetWidth - _this.offsetWidth;
//     }

//     _this.style.left = l + 'px';
//     b = Math.floor(l / (this.obj.offsetWidth - _this.offsetWidth) * 100);

//     if (i == 1) {
//         this.d = l + _this.offsetWidth;
//         if (this.d > this.c) {
//             console.log('da'); //算法需要研究
//         }
//         console.log(this.d + ':' + this.c);
//         this.load.style.left = this.d + 'px';
//         document.getElementsByTagName('p')[0].innerHTML = b;

//     } else if (i == 0) {
//         this.c = this.obj.offsetWidth - l;
//         this.load.style.right = this.c + 'px';
//         document.getElementsByTagName('p')[1].innerHTML = b;

//     }

//     if (_this.setCapture) {
//         _this.setCapture();
//     }
// };

// new DragRange();


// var $ = function(parentElem, son) {
//     return new GetClick(parentElem, son);
// };

// var GetClick = function(parentElem, sonElem) {
//     this.parent = document.getElementById(parentElem);
//     this.son = document.getElementById(sonElem);
// };

// GetClick.prototype.click = function() {
//     var self = this;
//     if (self.parent != null) {
//         self.parent.onclick = function(e) {

//             var e = e || event;
//             if (self.son.style.display == 'none') {
//                 self.son.style.display = 'block';
//             } else {
//                 self.son.style.display = 'none';
//             }
//             e.cancelBubble = true;

//             document.onclick = function() {
//                 self.son.style.display = 'none';
//             };
//         };
//     }
// };

// $('aa', 'number').click();
// $('aa1', 'number1').click();


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
