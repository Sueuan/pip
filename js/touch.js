var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var time1=null;
var time2=null;
var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }
    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}
//手指接触屏幕
el2.addEventListener("touchstart", function (e) {
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
el2.addEventListener("touchend", function (e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            //alert("未滑动！");
            break;
        case 1:
            // alert("向上！")
            break;
        case 2:
            //  alert("向下！")
            break;
        case 3:
            // alert("向左！");
            $(el2).addClass("book_ani");
            break;
        case 4:
            //  alert("向右！")
            break;
        default:
    }
}, false);
//手指接触屏幕
el3.addEventListener("touchstart", function (e) {
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
el3.addEventListener("touchend", function (e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            // alert("未滑动！");
            break;
        case 1:
            // alert("向上！")
            break;
        case 2:
            //  alert("向下！")
            break;
        case 3:
            // alert("向左！");
            $(el3).addClass("book_ani");
            $(".hand_pic").hide();
            $(".lighten").show();
            time1 = setTimeout(function () {
                $(".box4_font").hide();
            }, 2000);
            time2 = setTimeout(function () {
                $(".box4_font2").fadeIn("1500", function () {
                    $(".lighten").addClass("ani_btn")
                });
            }, 3000);

            $(".lighten").on("click", function () {

                $(".light_gif").attr("src", "images/0004.gif");
                $(this).hide();
                $(".box4_font,.box4_font2").hide();
                clearTimeout(time1);
                clearTimeout(time2)
                setTimeout(function () {
                    $(".book_box").hide();
                    $(".page6").show();
                    $('.disp').show();
                }, 3000);
                setTimeout(function () {
                    $(".page7").show();
                    $(".page6").css({"background-image": " url('images/page6-3.jpg')"}).children().remove()
                    $(".page6").animate({
                        "width": 0.5 + "rem",
                        "height": 0.84 + "rem",
                        "top": 3.30 + "rem",
                        "left": 3.47 + "rem"
                    }, 2000);
                }, 7000);
                console.log("gai2")

            });
            break;
        case 4:
            //  alert("向右！")
            break;
        default:
    }
}, false);
$(".page7-3").on("click", function () {
    //点击图片后发送跳转到指定页面的事件。
    $('.page7-4').show();
    setTimeout(function () {
        window.location.href = "http://mobile.sunland.org.cn/activity/mlink/getExtentionPage?channel=pengyouquan&scene=H5&configUser=wangyuexin&pageDetail=homepage&reserveParam1=qianduanbangongshi&reserveParam2=zongxian&reserveParam3=yunying&activityName=huazhonghua";
    }, 1000);
});