var tabnum = 2;//设置默认标签页
var curP = 0; //当前所属的标签页
var dqwidth = document.documentElement.clientWidth;//屏幕的当前宽度
var dqheight = document.documentElement.clientHeight;//屏幕的当前高度
var defaultcolor = "#686767";//设置字体默认的颜色
var setcolor = "#fdad03";//设置字体当前的颜色
var test=123l;
$(function () {
    Init();
})
//初始化加载
function Init() {
    tabnum = $(".myspan").length;
    //设置游标的宽度
    $("#youbiao").css("width", parseInt(100 / parseInt(tabnum)) + "%");
    $(".myspan").css("width", parseInt(100 / parseInt(tabnum)) - 1.5 + "%")
    $("#myspan0").css("color", setcolor);
    $('#content').width(dqwidth * tabnum);
    $('.blk').width(dqwidth);
    $('#box').css("height", dqheight + "px");
    $('.blk').height(dqheight - $('#pagenos').height());
}
//点击菜单项加载
function show(n) {
    curP = n;
    document.getElementById("content").style.left = -curP * dqwidth + 'px';
    $('#youbiao').css({ "left": curP * dqwidth / tabnum });
    for (var i = 0; i < tabnum; i++) {
        $("#myspan" + i).css("color", defaultcolor);
    }
    $("#myspan" + n).css("color", setcolor);
}