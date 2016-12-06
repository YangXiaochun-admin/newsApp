$(function(){
    function size(originSize,type){
        var type=type || "x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100;
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100;
        }

        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }
    size(750);
//			若是按y轴 siz(1334,y)
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationHide :true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        onTouchStart: function(swiper,even){
            if(swiper.activeIndex=="2"){
                location.href="index1.html";
            }
        }

    })

})