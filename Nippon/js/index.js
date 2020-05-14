/*页面展开效果*/
// $('.libang_box .content_box .con_l').animate({'margin-left':0},300);
// $('.libang_box .content_box .con_r').animate({'margin-right':0},300);
// $('.libang_box .content_box .con_c .con_ct').animate({'margin-top':0},300);
// $('.libang_box .content_box .con_c .con_cb').animate({'margin-bottom':0},300);

/*累计建单统计文字效果*/
var jiandan = '22525';
zhishu();
setInterval(function(){
    zhishu();
},12000)
function zhishu(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(jiandan/500+1);
    }
    var zhishutimer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.jd_des_num span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.jd_des_num span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>jiandan-jiandan/500+1){
            T = jiandan;
            var T_arr = T.split('');
            var num_span = $('.jd_des_num span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.jd_des_num span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(zhishutimer);
        }
    })
}

/*本月建单统计*/
var benyue_jd = '5246';
benyue_jiandan();
setInterval(function(){
    benyue_jiandan();
},12000)
function benyue_jiandan(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(benyue_jd/500+1);
    }
    var benyue_jiandan_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.yue_num span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.yue_num span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>benyue_jd-benyue_jd/500+1){
            T = benyue_jd;
            var T_arr = T.split('');
            var num_span = $('.yue_num span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.yue_num span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(benyue_jiandan_timer);
        }
    })
}

/*本月建单目标*/
var benyue_mb = '10000';
benyue_mbfn();
setInterval(function(){
    benyue_mbfn();
},12000)
function benyue_mbfn(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(benyue_mb/500+1);
    }
    var benyue_mb_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.yue_mb span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.yue_mb span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>benyue_mb-benyue_mb/500+1){
            T = benyue_mb;
            var T_arr = T.split('');
            var num_span = $('.yue_mb span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.yue_mb span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(benyue_mb_timer);
        }
    })
}

/*年度产品销售指标*/
var niandu_zhibiao = '350000000';
niandu_zhibiaofn();
setInterval(function(){
    niandu_zhibiaofn();
},12000)
function niandu_zhibiaofn(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(niandu_zhibiao/500+1);
    }
    var niandu_zhibiao_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.niandu_zhibiao span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.niandu_zhibiao span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>niandu_zhibiao-niandu_zhibiao/500+1){
            T = niandu_zhibiao;
            var T_arr = T.split('');
            var num_span = $('.niandu_zhibiao span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.niandu_zhibiao span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(niandu_zhibiao_timer);
        }
    })
}

/*累计产品销售统计*/
var leiji_xiaoshou = '102083333';
leiji_xiaoshoufn();
setInterval(function(){
    leiji_xiaoshoufn();
},12000)
function leiji_xiaoshoufn(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(leiji_xiaoshou/500+1);
    }
    var leiji_xiaoshou_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.leiji_xiaoshou_num span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.leiji_xiaoshou_num span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>leiji_xiaoshou-leiji_xiaoshou/500+1){
            T = leiji_xiaoshou;
            var T_arr = T.split('');
            var num_span = $('.leiji_xiaoshou_num span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.leiji_xiaoshou_num span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(leiji_xiaoshou_timer);
        }
    })
}

/*online建单*/
var online = '4986';
onlinefn();
setInterval(function(){
    onlinefn();
},12000)
function onlinefn(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(online/500+1);
    }
    var online_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.online span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.online span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>online-online/500+1){
            T = online;
            var T_arr = T.split('');
            var num_span = $('.online span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.online span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(online_timer);
        }
    })
}

/*offline建单*/
var offline = '260';
offlinefn();
setInterval(function(){
    offlinefn();
},12000)
function offlinefn(){
    var T = 0;
    function dianqian(){
        T = T+parseInt(offline/500+1);
    }
    var offline_timer = setInterval(function(){
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.offline span').length;
        var num_cha = num_span - T_arr.length;
        for(var i=0; i<num_cha; i++){
            T_arr.unshift('0');
        }
        $('.offline span').each(function(index){
            $(this).html(T_arr[index]);
        })
        if(T>offline-offline/500+1){
            T = offline;
            var T_arr = T.split('');
            var num_span = $('.offline span').length;
            var num_cha = num_span - T_arr.length;
            for(var i=0; i<num_cha; i++){
                T_arr.unshift('0');
            }
            $('.offline span').each(function(index){
                $(this).html(T_arr[index]);
            })
            clearInterval(offline_timer);
        }
    })
}

/*滚动*/
jQuery.fn.extend({
    pic_scroll: function () {
        $(this).each(function () {
            var _this = $(this);//存储对象
            var ul = _this.find("ul");//获取ul对象
            var li = ul.find("li");//获取所有图片所有的li
            var w = li.size() * li.outerHeight();//统计图片的长度
            li.clone().prependTo(ul);//克隆图片一份放入ul里
            ul.width(2 * w);//设置ul的长度，使所有图片排成一排
            var i = 1, l;
            _this.hover(function () {
                i = 0
            }, function () {
                i = 1
            });//鼠标经过时设置i=0达到鼠标经过停止效果
            function autoScroll() {
                l = _this.scrollTop();
                if (l >= w) {
                    _this.scrollTop(0);
                } else {
                    _this.scrollTop(l + i);
                }
            }

            var scrolling = setInterval(autoScroll, 120);
        })
    }
});

/*建单统计滚动*/
// setTimeout(function(){
//     $(".jiandan_list .scroll_box").pic_scroll();
// },3000)

/*建单预警统计*/
setTimeout(function(){
    $(".jd_yujing").pic_scroll();
},3000)

/*建单达成提醒*/
var carInfo8 = echarts.init(document.getElementById('jd_warning'));
var carInfo8_option= {
    color:['#00b5ba','#DD614A'],
    // title: {
    //     text:'物资数量',
    //     x: 'left',
    //     y: 'top',
    //     left:"0",
    //     top:'0',
    //     padding:fontSize(0.1),
    //     textStyle: {
    //         fontSize: fontSize(0.12),
    //         fontWeight: 'normal',
    //         color: '#00fcf9'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type:'shadow'
        },
        textStyle:{
            color: '#ffffff',//字体颜色
            fontSize:fontSize(0.14)
        }
    },
    legend: {
        top: '0',
        right:'5%',
        data: ['实际达成', '实际单数'],
        // icon: 'circle',
        itemWidth: fontSize(0.1),
        itemHeight: fontSize(0.1),
        textStyle: {
            fontSize: fontSize(0.1),
            color: '#fff'
        }
    },
    grid: {
        top:'15%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['DIY华中公司','DIY苏皖公司', 'DIY中原公司','DIY南区公司','DIY江南公司','DIY华北公司','DIY西区公司'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:fontSize(0.1)
            },
            interval:0,
            rotate:30
        },
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#4d5f93'
            }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:fontSize(0.1)
            }
        },
        axisLine:{
            lineStyle:{
                color: '#4d5f93'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#4d5f93',
            }
        }
    },
    series: [
        {
            name:'实际达成',
            type: 'bar',
            barCategoryGap:'50%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#64CAFA'
                    }, {
                        offset: 0.5,
                        color: '#64CAFA'
                    }, {
                        offset: 1,
                        color: '#0078D7'
                    }]),
                    barBorderRadius: [10,10,0,0],
                }
            },
            data: [200,301,120,230,150,220,321]
        },
        {
            name:'实际单数',
            type: 'line',
            barCategoryGap:'50%',
            symbol:'circle',
            symbolSize:fontSize(0.1),
            itemStyle: {
                normal: {
                    color: '#f1f887',
                    barBorderRadius: [10,10,0,0],
                }
            },
            data: [150,220,110,200,80,220,280]
        }
    ],
    animationDelay:function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    },
    animationDelayUpdate:function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    }
};
carInfo8.setOption(carInfo8_option);
carInfo8timer = setInterval(function(){
    carInfo8.clear()
    carInfo8.setOption(carInfo8_option);
},6000)

/*受理异常*/
var yichang1 = echarts.init(document.getElementById('yichang1'));
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        // shadowBlur: 15,
        // shadowColor: 'white',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var yichang1_info = {
    color: ['#2d5fa8','#4c33b5','#9b9036','#177d55','#0e4c99','#4818ac','#7e3761'],
    title: {
        text:'派单数量',
        left:"center",
        bottom:'0',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    tooltip : {
        show: true,
        formatter: "{b} : {c}"
    },
    // legend: {
    //     top: "13.5%",
    //     x: 'right',
    //     left: "42%",
    //     itemWidth:0,itemHeight:0,
    //     data: ['已婚已育','已婚未育','未婚' ,'学生'],
    //     itemGap: 38,
    //     textStyle: {
    //         color: '#fff',
    //         align:'right',
    //         x: 'right',
    //         textAlign:'right'
    //     },
    //
    //     selectedMode: true,
    //     orient: "vertical",
    //
    // },
    series: [
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['83%', '90%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY苏皖公司'
            }, {
                value: 50,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }
            ]
        }, {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['71%', '78%'],
            itemStyle: dataStyle,
            data: [{
                value: 200,
                name: 'DIY华中公司'
            }, {
                value: 110,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['59%', '66%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY中原公司'
            }, {
                value: 60,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['47%', '54%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY江南公司'
            }, {
                value: 55,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['35%', '42%'],
            itemStyle: dataStyle,
            data: [{
                value: 300,
                name: 'DIY南区公司'
            }, {
                value: 50,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['23%', '30%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY华北公司'
            }, {
                value: 80,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },,{
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['11%', '18%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY西区公司'
            }, {
                value: 60,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },
    ]
};
yichang1.setOption(yichang1_info);
yichang1timer = setInterval(function(){
    yichang1.clear()
    yichang1.setOption(yichang1_info);
},6000)

/*异常2*/
var yichang2 = echarts.init(document.getElementById('yichang2'));
var dataStyle = {
    normal: {
        label: {
            show: false,
            color:'#fff',
            position:'inside'
        },
        labelLine: {
            show: false
        },
        // shadowBlur: 15,
        // shadowColor: 'white',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(255,255,255,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(255,255,255,0)'
    }
};
var yichang2_info = {
    color: ['#2d5fa8','#4c33b5','#9b9036','#177d55','#0e4c99','#4818ac','#7e3761'],
    title: {
        text:'预警数量',
        left:"center",
        bottom:'0',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    tooltip : {
        show: true,
        formatter: "{b} : {c}"
    },
    // legend: {
    //     top: "0",
    //     y: 'top',
    //     left: "0",
    //     itemWidth:fontSize(0.1),
    //     itemHeight:fontSize(0.1),
    //     data: ['DIY苏皖公司', 'DIY华中公司','DIY中原公司', 'DIY江南公司','DIY南区公司','DIY华北公司','DIY西区公司'],
    //     textStyle: {
    //         color: '#fff',
    //         fontSize:fontSize(0.1)
    //     },
    //     selectedMode: true,
    //     // orient: "vertical",
    // },
    series: [
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['83%', '90%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY苏皖公司'
            }, {
                value: 50,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }
            ]
        }, {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['71%', '78%'],
            itemStyle: dataStyle,
            data: [{
                value: 200,
                name: 'DIY华中公司'
            }, {
                value: 110,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['59%', '66%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY中原公司'
            }, {
                value: 60,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['47%', '54%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY江南公司'
            }, {
                value: 55,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['35%', '42%'],
            itemStyle: dataStyle,
            data: [{
                value: 300,
                name: 'DIY南区公司'
            }, {
                value: 50,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },{
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['23%', '30%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY华北公司'
            }, {
                value: 80,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },,{
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['11%', '18%'],
            itemStyle: dataStyle,
            data: [{
                value: 100,
                name: 'DIY西区公司'
            }, {
                value: 60,
                name: '总数',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            }

            ]
        },
    ]
};
yichang2.setOption(yichang2_info);
yichang2timer = setInterval(function(){
    yichang2.clear()
    yichang2.setOption(yichang2_info);
},6000)

/*基检预约异常*/
var zblv = echarts.init(document.getElementById('jijian_yuyue'));
var zblv_info = {
    // title: {
    //     text:'占比分析',
    //     x: 'left',
    //     y: 'top',
    //     left:"5%",
    //     padding:fontSize(0.1),
    //     textStyle: {
    //         fontSize: fontSize(0.12),
    //         fontWeight: 'normal',
    //         color: '#00fcf9'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        show:true,
        textStyle:{
            fontSize:fontSize(0.14),
            color:'#fff'
        }
    },
    legend:{
        data:['已确认','超时未确认'],
        itemWidth:fontSize(0.08),
        itemHeight:fontSize(0.08),
        bottom:0,
        textStyle:{
            fontSize:fontSize(0.12),
            color:'#EEECE9'
        }
    },
    radar: {
        radius:['0','60%'],
        center:['50%','50%'], // 图的位置
        indicator: [
            {name: 'DIY苏皖公司',max:30},
            {name: 'DIY华中公司',max:30},
            {name: 'DIY中原公司',max:30},
            {name: 'DIY江南公司',max:30},
            {name: 'DIY南区公司',max:30},
            {name: 'DIY华北公司',max:30},
            {name: 'DIY西区公司',max:30},
        ],
        shape: 'circle',
        name: {
            textStyle: {
                color: '#EEECE9',
                fontSize:fontSize(0.12)
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show:false,
            lineStyle: {
                color:'rgba(10,185,253,0.3)',
                type: 'dashed'
            }
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: 'rgba(255,255,255, 0.2)'
            }
        }
    },
    series:[{
        name: '已确认',
        type: 'radar',
        tooltip: {
            trigger: 'item',
        },
        data: [
            [30,15,16,24,20,15,10],
        ],
        symbol: 'circle',
        symbolSize:fontSize(0.06),
        itemStyle: {
            normal: {
                color:'#6acdfe'
            }
        },
        areaStyle: {
            normal: {
                color:'rgba(23,85,173,1)',
            }
        },
        lineStyle:{
            color:'#6acdfe'
        },
    },
        {
            name: '超时未确认',
            type: 'radar',
            tooltip: {
                trigger: 'item',
            },
            data: [
                [20,30,5,15,25,30,15],
            ],
            symbol: 'circle',
            symbolSize:fontSize(0.06),
            itemStyle: {
                normal: {
                    color:'#c54c89'
                }
            },
            areaStyle: {
                normal: {
                    color:'rgba(197,76,137,1)',
                }
            },
            lineStyle:{
                color:'#c54c89'
            },
        }
    ],
    animationEasing:function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    },
    animationEasingUpdate:function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    }
};
zblv.setOption(zblv_info);
zblvtimer = setInterval(function(){
    zblv.clear()
    zblv.setOption(zblv_info);
},5000)

/*人力人效预警*/
var renli_yujing = echarts.init(document.getElementById('renli_yujing'));
var renli_yujing_option= {
    color:['#00b5ba','#DD614A'],
    // title: {
    //     text:'物资数量',
    //     x: 'left',
    //     y: 'top',
    //     left:"0",
    //     top:'0',
    //     padding:fontSize(0.1),
    //     textStyle: {
    //         fontSize: fontSize(0.12),
    //         fontWeight: 'normal',
    //         color: '#00fcf9'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type:'shadow'
        },
        textStyle:{
            color: '#ffffff',//字体颜色
            fontSize:fontSize(0.14)
        }
    },
    legend: {
        right: 0,
        top: '0',
        right:'5%',
        data: ['实际达成', '实际单数'],
        // icon: 'circle',
        itemWidth: fontSize(0.1),
        itemHeight: fontSize(0.1),
        textStyle: {
            fontSize: fontSize(0.1),
            color: '#fff'
        }
    },
    grid: {
        top:'15%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['DIY华中公司','DIY苏皖公司', 'DIY中原公司','DIY南区公司','DIY江南公司','DIY华北公司','DIY西区公司'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:fontSize(0.1)
            },
            interval:0,
            rotate:30
        },
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#4d5f93'
            }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize:fontSize(0.1)
            }
        },
        axisLine:{
            lineStyle:{
                color: '#4d5f93'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: '#4d5f93',
            }
        }
    },
    series: [
        {
            name:'实际达成',
            type: 'line',
            barCategoryGap:'50%',
            symbol:'circle',
            symbolSize:fontSize(0.1),
            itemStyle: {
                normal: {
                    color:'#a587f8',
                    barBorderRadius: [10,10,0,0],
                }
            },
            data: [200,301,120,230,150,220,321]
        },
        {
            name:'实际单数',
            type: 'line',
            barCategoryGap:'50%',
            symbol:'circle',
            symbolSize:fontSize(0.1),
            itemStyle: {
                normal: {
                    color: '#f97280',
                    barBorderRadius: [10,10,0,0],
                }
            },
            data: [150,220,110,200,80,220,280]
        }
    ],
    animationDelay:function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    },
    animationDelayUpdate:function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    }
};
renli_yujing.setOption(renli_yujing_option);
renli_yujingtimer = setInterval(function(){
    renli_yujing.clear()
    renli_yujing.setOption(renli_yujing_option);
},6000)

/*风险受理预警*/
var dsjbangfuxinxi = echarts.init(document.getElementById('fy_shouli'));
var dsjbangfuxinxi_info = {
    title: {
        text:'受理',
        left: 'center',
        bottom:'5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{d}%",
        textStyle: {
            fontSize: fontSize(0.14)
        },
        // position: function (p) {
        //    // 位置回调
        //    return [p[0] + 10, p[1] - 10];
        //   },
    },
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
// 				legend: {
// 					// orient: 'vertical',
// 					right: 'center',
// 					bottom: '0',
// 					// data: renshuX,
// 					data:['休假','事假','外学外训','因公外出','执行任务','生病住院','借调','转业待安置'],
// 					itemWidth: fontSize(0.12),
// 					itemHeight: fontSize(0.12),
// 					textStyle: {
// 						fontSize: fontSize(0.12),
// 						color: '#fff'
// 					}
// 				},
    color: ['#d22b73', '#417fd4', '#568bcc', '#99b3d7', '#e5ce0c','#99b3d7','#568bcc', '#99b3d7'],
    series: [{
        type: 'pie',
        radius: ['0%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{d}%',
                textStyle: {
                    fontSize: fontSize(0.12),
                    color: "#fff"
                },
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false,
                // length:10,  // 改变标示线的长度
                lineStyle: {
                    color: "#fff" // 改变标示线的颜色
                }
            },

        },
        // data: zaiwaizhanbi
        data:[
            {value:20,name:'异常'},
            {value:80,name:'正常'}
        ]
    }]
};
dsjbangfuxinxi.setOption(dsjbangfuxinxi_info);
var indexdsjbangfuxinxi = 0; // 高亮索引
function dsjbangfuxinxi_change(e) {
    dsjbangfuxinxi.dispatchAction({
        type: 'downplay'
    })
    dsjbangfuxinxi.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
    });
    dsjbangfuxinxi.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e
    });
}

dsjbangfuxinxi_change(indexdsjbangfuxinxi);
dsjbangfuxinxitimer = setInterval(function() {
    indexdsjbangfuxinxi++;
    if (indexdsjbangfuxinxi == dsjbangfuxinxi_info.series[0].data.length) {
        indexdsjbangfuxinxi = 0;
    }
    dsjbangfuxinxi_change(indexdsjbangfuxinxi)
}, 2400)

/*风险预约预警*/
var fy_yuyue = echarts.init(document.getElementById('fy_yuyue'));
var fy_yuyue_info = {
    title: {
        text:'预约',
        left: 'center',
        bottom:'5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{d}%",
        textStyle: {
            fontSize: fontSize(0.14)
        },
        // position: function (p) {
        //    // 位置回调
        //    return [p[0] + 10, p[1] - 10];
        //   },
    },
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
// 				legend: {
// 					// orient: 'vertical',
// 					right: 'center',
// 					bottom: '0',
// 					// data: renshuX,
// 					data:['休假','事假','外学外训','因公外出','执行任务','生病住院','借调','转业待安置'],
// 					itemWidth: fontSize(0.12),
// 					itemHeight: fontSize(0.12),
// 					textStyle: {
// 						fontSize: fontSize(0.12),
// 						color: '#fff'
// 					}
// 				},
    color: ['#d22b73', '#417fd4', '#568bcc', '#99b3d7', '#e5ce0c','#99b3d7','#568bcc', '#99b3d7'],
    series: [{
        type: 'pie',
        radius: ['0%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{d}%',
                textStyle: {
                    fontSize: fontSize(0.12),
                    color: "#fff"
                },
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false,
                // length:10,  // 改变标示线的长度
                lineStyle: {
                    color: "#fff" // 改变标示线的颜色
                }
            },

        },
        // data: zaiwaizhanbi
        data:[
            {value:40,name:'异常'},
            {value:60,name:'正常'}
        ]
    }]
};
fy_yuyue.setOption(fy_yuyue_info);
var indexfy_yuyue = 0; // 高亮索引
function fy_yuyue_change(e) {
    fy_yuyue.dispatchAction({
        type: 'downplay'
    })
    fy_yuyue.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
    });
    fy_yuyue.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e
    });
}

fy_yuyue_change(indexfy_yuyue);
fy_yuyuetimer = setInterval(function() {
    indexfy_yuyue++;
    if (indexfy_yuyue == fy_yuyue_info.series[0].data.length) {
        indexfy_yuyue = 0;
    }
    fy_yuyue_change(indexfy_yuyue)
}, 2400)

/*风险基检预警*/
var fy_jijian = echarts.init(document.getElementById('fy_jijian'));
var fy_jijian_info = {
    title: {
        text:'基检',
        left: 'center',
        bottom:'5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:{d}%",
        textStyle: {
            fontSize: fontSize(0.14)
        },
        // position: function (p) {
        //    // 位置回调
        //    return [p[0] + 10, p[1] - 10];
        //   },
    },
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
// 				legend: {
// 					// orient: 'vertical',
// 					right: 'center',
// 					bottom: '0',
// 					// data: renshuX,
// 					data:['休假','事假','外学外训','因公外出','执行任务','生病住院','借调','转业待安置'],
// 					itemWidth: fontSize(0.12),
// 					itemHeight: fontSize(0.12),
// 					textStyle: {
// 						fontSize: fontSize(0.12),
// 						color: '#fff'
// 					}
// 				},
    color: ['#d22b73', '#417fd4', '#568bcc', '#99b3d7', '#e5ce0c','#99b3d7','#568bcc', '#99b3d7'],
    series: [{
        type: 'pie',
        radius: ['0%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{d}%',
                textStyle: {
                    fontSize: fontSize(0.12),
                    color: "#fff"
                },
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false,
                // length:10,  // 改变标示线的长度
                lineStyle: {
                    color: "#fff" // 改变标示线的颜色
                }
            },

        },
        // data: zaiwaizhanbi
        data:[
            {value:10,name:'异常'},
            {value:90,name:'正常'}
        ]
    }]
};
fy_jijian.setOption(fy_jijian_info);
var indexfy_jijian = 0; // 高亮索引
function fy_jijian_change(e) {
    fy_jijian.dispatchAction({
        type: 'downplay'
    })
    fy_jijian.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
    });
    fy_jijian.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e
    });
}

fy_jijian_change(indexfy_jijian);
fy_jijiantimer = setInterval(function() {
    indexfy_jijian++;
    if (indexfy_jijian == fy_jijian_info.series[0].data.length) {
        indexfy_jijian = 0;
    }
    fy_jijian_change(indexfy_jijian)
}, 2400)

/*地图*/
var myChart = echarts.init(document.getElementById('map'))
// var mydata = [
//     { name: '北京', selected: false, value: 1 },
//     { name: '天津', selected: false, value: 2 },
//     { name: '上海', selected: false, value: 3 },
//     { name: '重庆', selected: false, value: 4 },
//     { name: '河北', selected: false, value: 5 },
//     { name: '河南', selected: false, value: 6 },
//     { name: '云南', selected: false, value: 7 },
//     { name: '辽宁', selected: false, value: 8 },
//     { name: '黑龙江', selected: false, value: 9 },
//     { name: '湖南', selected: false, value: 10 },
//     { name: '安徽', selected: false, value: 11 },
//     { name: '山东', selected: false, value: 12 },
//     { name: '新疆', selected: false, value: 13 },
//     { name: '江苏', selected: false, value: 14 },
//     { name: '浙江', selected: false, value: 15 },
//     { name: '江西', selected: false, value: 16 },
//     { name: '湖北', selected: false, value: 17 },
//     { name: '广西', selected: false, value: 18 },
//     { name: '甘肃', selected: false, value: 19 },
//     { name: '山西', selected: false, value: 20 },
//     { name: '内蒙古', selected: false, value: 21 },
//     { name: '陕西', selected: false, value: 22 },
//     { name: '吉林', selected: false, value: 23 },
//     { name: '福建', selected: false, value: 24 },
//     { name: '贵州', selected: false, value: 25 },
//     { name: '广东', selected: false, value: 26 },
//     { name: '青海', selected: false, value: 27 },
//     { name: '西藏', selected: false, value: 28 },
//     { name: '四川', selected: false, value: 29 },
//     { name: '宁夏', selected: false, value: 30 },
//     { name: '海南', selected: false, value: 31 },
//     { name: '台湾', selected: false, value: 32 },
//     { name: '香港', selected: false, value: 33 },
//     { name: '澳门', selected: false, value: 34 }
// ]

var option = {
    tooltip: {
        /* show: false,*/
        backgroundColor:"rgba(255,255,255,0.7)",//提示标签背景颜色
        textStyle:{color:"#000000"}, //提示标签字体颜色
        formatter: function (obj) {

        }
    },
    grid:{
      left:'0',
      right:'0',
      top:'0',
      bottom:'0'
    },
    geo: {
        map: 'china',
        roam: false,        // 禁止缩放平移
        itemStyle: {        // 每个区域的样式
            normal: {
                areaColor: '#357ed3'
            },
            emphasis: {
                areaColor: '#1445af'
            }
        },
        regions: [{        // 选中的区域
            name: 'China',
            selected: true,
            itemStyle: {   // 高亮时候的样式
                emphasis: {
                    areaColor: '#1445af'
                }
            },
            label: {    // 高亮的时候不显示标签
                emphasis: {
                    show: false
                }
            }
        }]
    },
    series: [{
        type: 'map',
        mapType: 'china',
        zlevel: 2,
        label: {
            normal: {
                show: false,//显示省份标签
                textStyle:{color:"#c71585"}//省份标签字体颜色
            },
            emphasis: {//对应的鼠标悬浮效果
                show: false,
                textStyle:{color:"#fefefe"}
            }
        },
        itemStyle: {
            normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#fff',//区域边框颜色
                areaColor:"#1f70cf",//区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#fff',
                areaColor:"#1f70cf",
            }
        },
        // data:mydata
    },{
        // type: 'effectScatter', // series图表类型
        type:'scatter',
        coordinateSystem: 'geo', // series坐标系类型
        symbol: 'pin',
        symbolSize:fontSize(0.5),
        zlevel: 3,
        // rippleEffect: {
        //     brushType: 'stroke'        // 波纹绘制效果
        // },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                color: '#dddb6f',
                fontSize:fontSize(0.14),
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: '#dddb6f',
                opacity:'1'
            }
        },
        data:[
            {name: 'DIY华北公司', value: [116.35885,39.357267],visualMap: false},
            {name: 'DIY中原公司', value: [107.233791,34.302653],visualMap: false},
            {name: 'DIY西区公司', value: [101.641013,30.367789],visualMap: false},
            {name: 'DIY苏皖公司', value: [116.947564,33.072285],visualMap: false},
            {name: 'DIY江南公司', value: [120.03831,32.012607],visualMap: false},
            {name: 'DIY华中公司', value: [115.402191,28.239319],visualMap: false},
            {name: 'DIY南区公司', value: [112.75298,23.174648],visualMap: false}
        ]
    }
    ],

    // dataRange: {
    //     x: '-1000 px', //图例横轴位置
    //     y: '-1000 px', //图例纵轴位置
    //     splitList: [
    //         { start: 1, end: 1, label: '北京', color: '#f6d200' },
    //         { start: 2, end: 2, label: '天津', color: '#ffdeaf' },
    //         { start: 3, end: 3, label: '上海', color: '#feffdb' },
    //         { start: 4, end: 4, label: '重庆', color: '#9999CC' },
    //         { start: 5, end: 5, label: '河北', color: '#fcddbe' },
    //         { start: 6, end: 6, label: '河南', color: '#caf8b1' },
    //         { start: 7, end: 7, label: '云南', color: '#e6c1ee' },
    //         { start: 8, end: 8, label: '辽宁', color: '#fdbfb8' },
    //         { start: 9, end: 9, label: '黑龙江', color: '#e8fcd2' },
    //         { start: 10, end: 10, label: '湖南', color: '#e1bbcd' },
    //         { start: 11, end: 11, label: '安徽', color: '#f5d9b3' },
    //         { start: 12, end: 12, label: '山东', color: '#fbf3c4' },
    //         { start: 13, end: 13, label: '新疆', color: '#eee' },
    //         { start: 14, end: 14, label: '江苏', color: '#99FFCC' },
    //         { start: 15, end: 15, label: '浙江', color: '#faf983' },
    //         { start: 16, end: 16, label: '江西', color: '#fbf2be' },
    //         { start: 17, end: 17, label: '湖北', color: '#deffb7' },
    //         { start: 18, end: 18, label: '广西', color: '#e6c1ee' },
    //         { start: 19, end: 19, label: '甘肃', color: '#CCCC00' },
    //         { start: 20, end: 20, label: '山西', color: '#e8fcd2' },
    //         { start: 21, end: 21, label: '内蒙古', color: '#FFCCCC' },
    //         { start: 22, end: 22, label: '陕西', color: '#CCCC00' },
    //         { start: 23, end: 23, label: '吉林', color: '#fccb7e' },
    //         { start: 24, end: 24, label: '福建', color: '#fad793' },
    //         { start: 25, end: 25, label: '贵州', color: '#e6c1ee' },
    //         { start: 26, end: 26, label: '广东', color: '#ededb2' },
    //         { start: 27, end: 27, label: '青海', color: '#eee' },
    //         { start: 28, end: 28, label: '西藏', color: '#eee' },
    //         { start: 29, end: 29, label: '四川', color: '#fad9bc' },
    //         { start: 30, end: 30, label: '宁夏', color: '#caf8b1' },
    //         { start: 31, end: 31, label: '海南', color: '#e6c1ee' },
    //         { start: 32, end: 32, label: '台湾', color: '#eee' },
    //         { start: 33, end: 33, label: '香港', color: '#eee' },
    //         { start: 34, end: 34, label: '澳门', color: '#eee' }
    //     ]
    // }
}
myChart.setOption(option);
/*一级弹窗*/
myChart.on('click',function(e){
    console.log(e)
    if(e.seriesType == 'scatter'){
        $('#mask').fadeIn();
        $('#mask .p_tit').text(e.data.name);
    }
})
$('#mask .close').on('click',function(){
    $('#mask').fadeOut();
})

/*二级弹窗*/
$('#mask tbody tr').on('click',function(){
    var tit = $(this).find('td').eq(0).text();
    $('#mask1 .p_tit').text(tit)
    $('#mask').fadeOut(function(){
        $('#mask1').fadeIn();
    })
})
$('#mask1 .close').on('click',function(){
    $('#mask1').fadeOut(function(){
        $('#mask').fadeIn();
    })
})

/*三级弹窗*/
$('#mask1 tbody tr').on('click',function(){
    var tit = $(this).find('td').eq(0).text();
    $('#mask2 .p_tit').text(tit)
    $('#mask1').fadeOut(function(){
        $('#mask2').fadeIn();
    })
})
$('#mask2 .close').on('click',function(){
    $('#mask2').fadeOut(function(){
        $('#mask1').fadeIn();
    })
})

/*四级弹窗*/
$('#mask2 tbody tr .day').on('click',function(){
    var tit = $(this).parents('tr').find('td').eq(0).text();
    $('#mask3 .p_tit').text(tit)
    $('#mask2').fadeOut(function(){
        $('#mask3').fadeIn();
    })
})
$('#mask3 .close').on('click',function(){
    $('#mask3').fadeOut(function(){
        $('#mask2').fadeIn();
    })
})

/*业务人员*/
$('#mask2 tbody tr .sale').on('click',function(){
    var tit = $(this).parents('tr').find('td').eq(0).text();
    $('#mask4 .p_tit').text(tit)
    $('#mask2').fadeOut(function(){
        $('#mask4').fadeIn();
    })
})
$('#mask4 .close').on('click',function(){
    $('#mask4').fadeOut(function(){
        $('#mask2').fadeIn();
    })
})

$('#mask4 tbody tr').on('click',function(){
    var tit = $(this).find('td').eq(0).text();
    $('#mask5 .p_tit').text(tit)
    $('#mask4').fadeOut(function(){
        $('#mask5').fadeIn();
    })
})
$('#mask5 .close').on('click',function(){
    $('#mask5').fadeOut(function(){
        $('#mask4').fadeIn();
    })
})






