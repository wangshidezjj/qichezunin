$(function(){
    //请求页头.html片段
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            // 返回的是一段html片段
            // console.log(result);
            // 用片段创建新的<header>元素
            $(result).replaceAll("#header");
            // 并添加header.css到页面
            $(`<link rel="stylesheet" href="yinyongyangshi/header.css">`).appendTo("head");
        }
    })
})