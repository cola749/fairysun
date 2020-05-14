/*echarts字体*/
function fontSize(res) {
    let docEl = document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}

/*页面跳转*/
function goto(e){
    console.log(e);
    if(e == "qiandan"){
        console.log("签单");
        window.location.href = "./signing.html";
    }else if(e == "wangong"){
        console.log("完工");
        window.location.href = "./completion.html";
    }else if (e == "jiandan") {
        console.log("建单");
        window.location.href = "./index.html";
    }
}

/*当前时间*/
setInterval(function(){
    now_date();
},1000);


function now_date(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    var month = mydate.getMonth()+1;
    if(month<10){
        month = '0'+month;
    }
    var day = mydate.getDate();
    if(day<10){
        day = '0'+day;
    }
    var hours = mydate.getHours();
    if(hours<10){
        hours = '0'+hours;
    }
    var minute = mydate.getMinutes();
    if(minute<10){
        minute = '0'+minute;
    }
    var second = mydate.getSeconds();
    if(second<10){
        second = '0'+second;
    }
    var now_date = year+'-'+month+'-'+day+' '+hours+':'+minute+':'+second;
    $('.now_data').html(now_date)
}

$(".data_search .cli_btn").on("click","li",function(){
$(this).addClass("active").siblings().removeClass("active");
})