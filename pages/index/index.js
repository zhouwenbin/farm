$(".dialog-close").on("click",function(){$(".dialog").addClass("hide"),$(".mask").addClass("hide")}),$("#nav-sence").on("click",function(){$(".mask").removeClass("hide"),$(".sence").removeClass("hide")}),$("#nav-center").on("click",function(){$(".mask").removeClass("hide"),$(".center").removeClass("hide")}),$(".storehouse-icon").on("click",function(){$(".mask").removeClass("hide"),$(".storehouse").removeClass("hide")}),$(".name-icon").on("click",function(){$(".mask").removeClass("hide"),$(".reclaim").removeClass("hide")}),$("#center-focus").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".center-focus").removeClass("hide").siblings().addClass("hide")}),$("#center-infor").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".center-infor").removeClass("hide").siblings().addClass("hide")}),$("#center-notice").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".center-notice").removeClass("hide").siblings().addClass("hide")}),$(".storehouse-tab li").on("click",function(){var e=$(".storehouse-tab li").index(this);$(this).addClass("active").siblings().removeClass("active"),$(".storehouse-list").eq(e).removeClass("hide").siblings().addClass("hide")}),$(".reclaim-farm-list li").on("click",function(){$(".reclaim-estate").removeClass("hide").siblings().addClass("hide"),$(".reclaim-estate-title").removeClass("hide").siblings().addClass("hide")}),$(".reclaim .dialog-close").on("click",function(){$(".reclaim-farm").removeClass("hide").siblings().addClass("hide"),$(".reclaim-farm-title").removeClass("hide").siblings().addClass("hide")});