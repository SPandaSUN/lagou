/**
 * Created by Administrator on 2017/3/27.
 */





// 轮播
var a = 0;
function bnerIn(i) {
    $("#bannerimg").animate({top: -i*160 + "px"},200);
    $("#bannerbg").animate({top: i*55 + "px"},200);
    clearInterval(h);
    a = i;
}
function bner() {
    a == 2 ? a = 0 : a++;
    $("#bannerimg").animate({top: -a*160 + "px"},200);
    $("#bannerbg").animate({top: a*55 + "px"},200);
}
function bnerOut() {
    h = setInterval("bner()",2000);
}
var h = setInterval("bner()",2000);





// 选项卡
function Tab(j) {
    $("#box-tit div").removeClass("box-tit-in");
    $("#box-tit div:eq(" + j + ")").addClass("box-tit-in");
    var m = j + 1;
    $("#boxn div").removeClass("box-in");
    $("#box" + m).addClass("box-in");
}




// 展开 收起
var b = 0;
function unfold() {
    if(b == 0){
        $("#bottom-list").css("height","234px");
        $("#contents").css("height","2765px");
        $("#bottom-btn a").html("收起");
        $("#bottom-btn").addClass("bottom-btn-in");
        b = 1;
    }else if(b == 1){
        $("#bottom-list").css("height","17px");
        $("#contents").css("height","2548px");
        $("#bottom-btn a").html("展开");
        $("#bottom-btn").removeClass("bottom-btn-in");
        b = 0;
    }
}


// body img
$(window).scroll(function (){
    var top = $(window).scrollTop();
    if (b == 0){
        if(top >= 1907){
            $("#body-img").addClass("body-img-in");
        }else if(top < 1907){
            $("#body-img").removeClass("body-img-in");
        }
    }else if(b == 1){
        if(top >= 2124){
            $("#body-img").addClass("body-img-in");
        }else if(top < 2124){
            $("#body-img").removeClass("body-img-in");
        }
    }

});




// 回到顶部
$(function(){
    $(window).scroll(function(){
        var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器
        if($scrollTop >1){//滚动高度可调，也可以为某个div的scrollTop，需要的可以自行修改
            $("#up").show();
        }else{ $("#up").hide();}
    });
    $("#up").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});




// 左侧列表栏
function Show(n) {
    $(".list1k:eq(" + n + ")").show();
    $(".tt:eq(" + n + ")").show();
}
function Hide(n) {
    $(".list1k:eq(" + n + ")").hide();
    $(".tt:eq(" + n + ")").hide();
}




// 穿墙效果
$(".img1").bind("mouseenter mouseleave",
    function(e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        //0:上；  1：右；   2：下；   3：左；
        var eventType = e.type;
        if(e.type == 'mouseenter'){
            if(direction == 0){
                $(this).find(".img-box").css({left:0,top:"-113px"});
                $(this).find(".img-box").animate({left:0,top:0},200);
            }else if(direction == 1){
                $(this).find(".img-box").css({left:"113px",top:0});
                $(this).find(".img-box").animate({left:0,top:0},200);
            }else if(direction == 2){
                $(this).find(".img-box").css({left:0,top:"230px"});
                $(this).find(".img-box").animate({left:0,top:0},200);
            }else {
                $(this).find(".img-box").css({left:"-113px",top:0});
                $(this).find(".img-box").animate({left:0,top:0},200);
            }
        }else{
            if(direction == 0){
                $(this).find(".img-box").animate({top:"-113px"},200);
            }else if(direction == 1){
                $(this).find(".img-box").animate({left:"113px"},200);
            }else if(direction == 2){
                $(this).find(".img-box").animate({top:"113px"},200);
            }else {
                $(this).find(".img-box").animate({left:"-113px"},200);
            }
        }
    });



// footer
function App() {
    $(".app").show();
}
function AppOut() {
    $(".app").hide();
}
function weChat() {
    $(".wechat").show();
}
function weChatOut() {
    $(".wechat").hide();
}



// 搜索

function search() {
    $(".search-k").attr("placeholder","搜索职位、公司或地点");
}
function searchOut() {
    var tt = $(".search-k").val();
    if(tt == ""){
        $(".search-k").attr("placeholder","Java");
    }
    $("#search-down").hide();
}
function Down() {
    $("#search-down").show();
    var tt = $(".search-k").val();
    if(tt == ""){
        $("#search-down").hide();
    }
}



