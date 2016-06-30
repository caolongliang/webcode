//左右滑动开始
var handlstart = function () {
    tag = '';
    var e = arguments.callee.arguments[0] || window.event;
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
    col = -curP * dqwidth;
 
}
addEvent(document, 'touchstart', handlstart);
var handl = function () {
    var e = arguments.callee.arguments[0] || window.event;
    xc = e.touches[0].pageX;
    yc = e.touches[0].pageY;
 
    if (tag == '') {
        if (Math.abs(x - xc) > Math.abs(y - yc)) {
            tag = 1;
            $('#content').css("webkitTransitionDuration", "0s");
            $('#content').css("transitionDuration", "0s");
            $('#youbiao').css("webkitTransitionDuration", "0s");
            $('#youbiao').css("transitionDuration", "0s");
        } else {
            tag = 2;
 
        }
    }
    if (tag == 1) {
        $('#content').css("left", (col - x + xc) + 'px');
        $('#youbiao').css("left", -(col - x + xc) / tabnum + 'px');
        e.stopPropagation();
        e.preventDefault();
    }
};
addEvent(document, 'touchmove', handl);
var handlend = function () {
    if (tag == 1) {
        $('#content').css("webkitTransitionDuration", "0.5s");
        $('#content').css("transitionDuration", "0.5s");
        $('#youbiao').css("webkitTransitionDuration", "0.5s");
        $('#youbiao').css("transitionDuration", "0.5s");
 
        if (Math.abs(x - xc) > 30) {
            if (x - xc > 0) {
 
                if (col - dqwidth < -(tabnum - 1) * dqwidth) {
                    var re = -curP * dqwidth;
                } else {
                    var re = col - dqwidth;
                    curP++;
                }
 
            } else if (x - xc < 0) {
                if (col + dqwidth > 0) {
                    var re = 0;
                } else {
                    var re = col + dqwidth;
                    curP--;
                }
            }
            for (var i = 0; i < tabnum; i++) {
                $("#myspan" + i).css("color", defaultcolor);
            }
          
            $("#myspan" + curP).css("color", setcolor);
            document.getElementById("content").style.left = re + 'px';
            $('#youbiao').css("left", -re / tabnum);
 
        } else {
            document.getElementById("content").style.left = col + 'px';
        }
    }
    tag = '';
}
addEvent(document, 'touchend', handlend);
 
function addEvent(obj, type, fn)
{
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function () { obj['e' + type + fn](window.event); }
        obj.attachEvent('on' + type, obj[type + fn]);
    } else {
        obj.addEventListener(type, fn, false);
    }
}