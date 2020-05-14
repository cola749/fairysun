/*页面展开效果*/
// $('.libang_box .content_box .con_l').animate({'margin-left':0},300);
// $('.libang_box .content_box .con_r').animate({'margin-right':0},300);
// $('.libang_box .content_box .con_c .con_ct').animate({'margin-top':0},300);
// $('.libang_box .content_box .con_c .con_cb').animate({'margin-bottom':0},300);

/*累计签单统计文字效果*/
var qiandan = '22107';
zhishu();
setInterval(function () {
    zhishu();
}, 12000);

function zhishu() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(qiandan / 500 + 1);
    }

    var zhishutimer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.jd_des_num span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.jd_des_num span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > qiandan - qiandan / 500 + 1) {
            T = qiandan;
            var T_arr = T.split('');
            var num_span = $('.jd_des_num span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.jd_des_num span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(zhishutimer);
        }
    })
}

/*本月建单统计*/
var benyue_qd = '5033';
benyue_qiandan();
setInterval(function () {
    benyue_qiandan();
}, 12000);

function benyue_qiandan() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(benyue_qd / 500 + 1);
    }

    var benyue_qiandan_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.yue_num span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.yue_num span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > benyue_qd - benyue_qd / 500 + 1) {
            T = benyue_qd;
            var T_arr = T.split('');
            var num_span = $('.yue_num span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.yue_num span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(benyue_qiandan_timer);
        }
    })
}

/*本月签单目标*/
var benyue_mb = '9500';
benyue_mbfn();
setInterval(function () {
    benyue_mbfn();
}, 12000);

function benyue_mbfn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(benyue_mb / 500 + 1);
    }

    var benyue_mb_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.yue_mb span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.yue_mb span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > benyue_mb - benyue_mb / 500 + 1) {
            T = benyue_mb;
            var T_arr = T.split('');
            var num_span = $('.yue_mb span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.yue_mb span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(benyue_mb_timer);
        }
    })
}

/*SAP预算*/
var sap_yusuan = '350000000';
sap_yusuanfn();
setInterval(function () {
    sap_yusuanfn();
}, 12000);

function sap_yusuanfn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(sap_yusuan / 500 + 1);
    }

    var sap_yusuan_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.niandu_zhibiao span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.niandu_zhibiao span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > sap_yusuan - sap_yusuan / 500 + 1) {
            T = sap_yusuan;
            var T_arr = T.split('');
            var num_span = $('.niandu_zhibiao span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.niandu_zhibiao span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(sap_yusuan_timer);
        }
    })
}

/*SAP达成*/
var sap_dacheng = '102083333';
sap_dachengfn();
setInterval(function () {
    sap_dachengfn();
}, 12000)

function sap_dachengfn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(sap_dacheng / 500 + 1);
    }

    var sap_dacheng_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.leiji_xiaoshou_num span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.leiji_xiaoshou_num span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > sap_dacheng - sap_dacheng / 500 + 1) {
            T = sap_dacheng;
            var T_arr = T.split('');
            var num_span = $('.leiji_xiaoshou_num span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.leiji_xiaoshou_num span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(sap_dacheng_timer);
        }
    })
}

/*online签单*/
var online = '4795';
onlinefn();
setInterval(function () {
    onlinefn();
}, 12000);

function onlinefn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(online / 500 + 1);
    }

    var online_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.online span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.online span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > online - online / 500 + 1) {
            T = online;
            var T_arr = T.split('');
            var num_span = $('.online span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.online span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(online_timer);
        }
    })
}

/*offline签单*/
var offline = '232';
offlinefn();
setInterval(function () {
    offlinefn();
}, 12000);

function offlinefn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(offline / 500 + 1);
    }

    var offline_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.offline span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.offline span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > offline - offline / 500 + 1) {
            T = offline;
            var T_arr = T.split('');
            var num_span = $('.offline span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.offline span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(offline_timer);
        }
    })
}

//pingjun_danjia 平均客单价
var average = '1344';
averagefn();
setInterval(function () {
    averagefn();
}, 12000);

function averagefn() {
    var T = 0;

    function dianqian() {
        T = T + parseInt(average / 500 + 1);
    }

    var average_timer = setInterval(function () {
        dianqian();
        var T_arr = T.toString().split('');
        var num_span = $('.pingjun_danjia span').length;
        var num_cha = num_span - T_arr.length;
        for (var i = 0; i < num_cha; i++) {
            T_arr.unshift('0');
        }
        $('.pingjun_danjia span').each(function (index) {
            $(this).html(T_arr[index]);
        });
        if (T > average - average / 500 + 1) {
            T = average;
            var T_arr = T.split('');
            var num_span = $('.pingjun_danjia span').length;
            var num_cha = num_span - T_arr.length;
            for (var i = 0; i < num_cha; i++) {
                T_arr.unshift('0');
            }
            $('.pingjun_danjia span').each(function (index) {
                $(this).html(T_arr[index]);
            });
            clearInterval(average_timer);
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

/*建单预警统计*/
setTimeout(function () {
    $(".jd_yujing").pic_scroll();
}, 3000);

/*地图*/

var centerMap = echarts.init(document.getElementById('centerMap'));

var centerMap_option = {
    tooltip: {
        /* show: false,*/
        backgroundColor: "rgba(255,255,255,0.7)",//提示标签背景颜色
        textStyle: {color: "#000000"}, //提示标签字体颜色
        formatter: function (obj) {
        }
    },
    grid: {
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
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
                textStyle: {color: "#c71585"}//省份标签字体颜色
            },
            emphasis: {//对应的鼠标悬浮效果
                show: false,
                textStyle: {color: "#fefefe"}
            }
        },
        itemStyle: {
            normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#fff',//区域边框颜色
                areaColor: "#1f70cf",//区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#fff',
                areaColor: "#1f70cf",
            }
        },
        // data:mydata
    }, {
        // type: 'effectScatter', // series图表类型
        type: 'scatter',
        coordinateSystem: 'geo', // series坐标系类型
        symbol: 'pin',
        symbolSize: fontSize(0.5),
        zlevel: 3,
        // rippleEffect: {
        //     brushType: 'stroke'        // 波纹绘制效果
        // },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                color: '#dddb6f',
                fontSize: fontSize(0.14),
                position: 'left',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: '#dddb6f',
                opacity: '1'
            }
        },
        data: [
            {name: 'DIY华北公司', value: [116.35885, 39.357267], visualMap: false},
            {name: 'DIY中原公司', value: [107.233791, 34.302653], visualMap: false},
            {name: 'DIY西区公司', value: [101.641013, 30.367789], visualMap: false},
            {name: 'DIY苏皖公司', value: [116.947564, 33.072285], visualMap: false},
            {name: 'DIY江南公司', value: [120.03831, 32.012607], visualMap: false},
            {name: 'DIY华中公司', value: [115.402191, 28.239319], visualMap: false},
            {name: 'DIY南区公司', value: [112.75298, 23.174648], visualMap: false}
        ]
    }
    ],

};
centerMap.setOption(centerMap_option);
/*一级弹窗*/
centerMap.on('click', function (e) {
    console.log(e);
    if (e.seriesType == 'scatter') {
        $('#mask').fadeIn();
        $('#mask .p_tit').text(e.data.name);
    }
});

$('#mask .close').on('click', function () {
    $('#mask').fadeOut();
});

/*二级弹窗*/
$('#mask tbody tr').on('click', function () {
    var tit = $(this).find('td').eq(0).text();
    $('#mask1 .p_tit').text(tit)
    $('#mask').fadeOut(function () {
        $('#mask1').fadeIn();
    })
});

$('#mask1 .close').on('click', function () {
    $('#mask1').fadeOut(function () {
        $('#mask').fadeIn();
    })
});

/*三级弹窗*/
$('#mask1 tbody tr').on('click', function () {
    var tit = $(this).find('td').eq(0).text();
    $('#mask2 .p_tit').text(tit)
    $('#mask1').fadeOut(function () {
        $('#mask2').fadeIn();
    })
});

$('#mask2 .close').on('click', function () {
    $('#mask2').fadeOut(function () {
        $('#mask1').fadeIn();
    })
});

/*四级弹窗*/
$('#mask2 tbody tr .day').on('click', function () {
    var tit = $(this).parents('tr').find('td').eq(0).text();
    $('#mask3 .p_tit').text(tit)
    $('#mask2').fadeOut(function () {
        $('#mask3').fadeIn();
    })
});

$('#mask3 .close').on('click', function () {
    $('#mask3').fadeOut(function () {
        $('#mask2').fadeIn();
    })
});


//签单达成提醒

var Info1 = echarts.init(document.getElementById('qiandanDacheng'));
var Info1_option = {
    legend: {
        data: ['实际单数', '实际达成'],
        top: '0',
        right: '5%',
        // icon: 'circle',
        itemWidth: fontSize(0.1),
        itemHeight: fontSize(0.1),
        textStyle: {
            fontSize: fontSize(0.1),
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            color: '#ffffff',//字体颜色
            fontSize: fontSize(0.14)


        }
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['DIY华中公司', 'DIY苏皖公司', 'DIY中原公司', 'DIY南区公司', 'DIY江南公司', 'DIY华北公司', 'DIY西区公司'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            },
            interval: 0,
            rotate: 30
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4d5f93',
            }
        }
    },
    series: [{
        type: 'pictorialBar',
        stack: '总量',
        symbol: 'fixed',
        name: '实际单数',
        symbolSize: [20, 5],
        symbolMargin: 2,
        symbolRepeat: 'repeat',
        symbolBoundingData: 300,
        itemStyle: {
            normal: {
                color: '#2afdfd'
            }
        },
        data: [150, 200, 154, 111, 155, 233, 222],

    }, {
        name: '实际达成',
        type: 'line',
        barCategoryGap: '50%',
        symbol: 'circle',
        symbolSize: fontSize(0.1),
        itemStyle: {
            normal: {
                color: '#f1f887',
            }
        },
        data: [150, 200, 154, 111, 155, 233, 222],

    }],
    animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    },
    animationDelayUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    }
};
Info1.setOption(Info1_option);
Info1timer = setInterval(function () {
    Info1.clear();
    Info1.setOption(Info1_option);
}, 6000);


//受理异常提醒
var Info2 = echarts.init(document.getElementById('shouli_yichang'));
var Info2_option = {
    tooltip: {
        trigger: 'item',
        show: true,
        textStyle: {
            fontSize: fontSize(0.14),
            color: '#fff'
        }
    },
    legend: {
        data: ['签单数量', '预警数量'],
        top: '0',
        right: '5%',
        itemWidth: fontSize(0.1),
        itemHeight: fontSize(0.1),
        textStyle: {
            fontSize: fontSize(0.1),
            color: '#fff'
        }
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4d5f93',
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['DIY华北公司', 'DIY中原公司', 'DIY西区公司', 'DIY苏皖公司', 'DIY江南公司', 'DIY华中公司', 'DIY南区公司'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            },
            interval: 0,
            rotate: 30
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        }
    },
    series: [
        {
            name: '签单数量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#08acac'
                    }, {
                        offset: 1,
                        color: '#2bffff'
                    }]),
                }
            },
            data: [182, 234, 290, 104, 131, 230, 302]
        },
        {
            name: '预警数量',
            type: 'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#dddb6f'
                }, {
                    offset: 1,
                    color: '#e3e187'
                }]),
            },
            data: [125, 233, 310, 121, 134, 107, 141]
        }
    ],
    animationEasing: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    },
    animationEasingUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    }
};
Info2.setOption(Info2_option);
Info2timer = setInterval(function () {
    Info2.clear();
    Info2.setOption(Info2_option);
}, 5000);

//开工异常提醒
var Info3 = echarts.init(document.getElementById('kaigong_yichang'));

var Info3_option = {
    tooltip: {
        show: true,
        trigger: 'item',
    },

    grid: {
        left: '6%',
        right: '6%',
        top: '38%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            },
            interval: 0,
            rotate: 30
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        },
        data: ['DIY华北公司', 'DIY中原公司', 'DIY西区公司', 'DIY苏皖公司', 'DIY江南公司', 'DIY华中公司', 'DIY南区公司'],
    },

    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4d5f93'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4d5f93',
            }
        }
    },
    series: [
        {
            name: '超出费用',
            type: "bar",
            barMaxWidth: 10,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#03bcff'
                    }, {
                        offset: 1,
                        color: '#2afbfb'
                    }]),
                }
            },
            data: [24, 45, 41, 12, 32, 30,22]
        }, {
            name: "预约异常",
            type: 'pie',
            center: ['80%', '19%'],
            radius: '28%',
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                itemStyle: {
                    normal: {
                        color: "#F1667A"
                    }
                },
                label: {
                    normal: {
                        formatter: "{a}\n\n{d}%",
                        textStyle: {
                            color: "#fff",
                            fontSize: fontSize(0.1)
                        }
                    }
                },
                name: "",
                value: 30
            }, {
                itemStyle: {
                    normal: {
                        color: "#203de0"
                    }
                },
                value: 70
            }]
        },
    ],
    animationEasing: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    },
    animationEasingUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    }
};

Info3.setOption(Info3_option);
Info3timer = setInterval(function () {
    Info3.clear();
    Info3.setOption(Info3_option);
}, 5000);


//风险预警
var Info4 = echarts.init(document.getElementById('fengxiang_yj'));

var data = [
    {
        name: '受理异常',
        value: 54
    }, {
        name: '产品SAP金额',
        value: 44
    }, {
        name: '开工异常',
        value: 35
    }]

var titleArr = [], seriesArr = [];
colors = [['#85d0fd', '#184688'], ['#48e2dd', '#184688'], ['#85d0fd', '#184688'], ['#48e2dd', '#184688']]
data.forEach(function (item, index) {
    titleArr.push(
        {
            text: item.name,
            left: index * 30 + 20 + '%',
            top: '85%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: fontSize(0.12),
                color: "#fff",
                textAlign: 'center',
            },
        }
    );
    seriesArr.push(
        {
            name: item.name,
            type: 'pie',
            clockWise: false,
            radius: [40, 55],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85d0fd'
                    }, {
                        offset: 1,
                        color: '#48e2dd'
                    }]),
                    shadowColor: colors[index][0],
                    shadowBlur: 0,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,
            center: [index * 30 + 20 + '%', '45%'],
            data: [{
                value: item.value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return "\n\n" + params.value + "%\n\n" + params.seriesName + "\n\n"
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: fontSize(0.12),
                            fontWeight: 'bold',
                            color: "#fff"
                        }
                    }
                },
            }, {
                value: 100 - item.value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: "#184688"
                    },
                    emphasis: {
                        color: "#184688"
                    }
                }
            }]
        }
    )
});


var Info4_option = {
    title: titleArr,
    series: seriesArr
};
Info4.setOption(Info4_option);
Info4timer = setInterval(function () {
    Info4.clear();
    Info4.setOption(Info4_option);
}, 5000);


/*人力人效预警*/
var Info5 = echarts.init(document.getElementById('renli_renxiao'));
var Info5_option = {
    tooltip: {
        trigger: 'axis',
        show: true,
        textStyle: {
            fontSize: fontSize(0.14),
            color: '#fff'
        }
    },
    legend: {
        data: ['最低标配', '实际人数'],
        itemWidth: fontSize(0.08),
        itemHeight: fontSize(0.08),
        right: 4,
        textStyle: {
            fontSize: fontSize(0.12),
            color: '#EEECE9'
        }
    },
    radar: {
        radius: ['0', '70%'],
        center: ['50%', '50%'], // 图的位置
        indicator: [
            {name: 'DIY苏皖公司', max: 30},
            {name: 'DIY华中公司', max: 30},
            {name: 'DIY中原公司', max: 30},
            {name: 'DIY江南公司', max: 30},
            {name: 'DIY南区公司', max: 30},
            {name: 'DIY华北公司', max: 30},
            {name: 'DIY西区公司', max: 30},
        ],
        shape: 'circle',
        name: {
            textStyle: {
                color: '#EEECE9',
                fontSize: fontSize(0.12)
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(10,185,253,0.3)',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255, 0.2)'
            }
        }
    },
    series: [{
        name: '最低标配',
        type: 'radar',
        tooltip: {
            trigger: 'item',
        },
        data: [
            [30, 26, 27, 24, 20, 25, 20],
        ],
        symbol: 'circle',
        symbolSize: fontSize(0.06),
        itemStyle: {
            normal: {
                color: '#65cbf3'
            }
        },
        areaStyle: {
            normal: {
                color: '#0d90c4',
            }
        },
        lineStyle: {
            color: '#08a0d4'
        },
    },
        {
            name: '实际人数',
            type: 'radar',
            tooltip: {
                trigger: 'item',
            },
            data: [
                [20, 30, 25, 15, 25, 30, 15],
            ],
            symbol: 'circle',
            symbolSize: fontSize(0.06),
            itemStyle: {
                normal: {
                    color: '#4386f8'
                }
            },
            areaStyle: {
                normal: {
                    color: '#104aad',
                }
            },
            lineStyle: {
                color: '#0358b9'
            },
        }
    ],
    animationEasing: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    },
    animationEasingUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 300;
    }
};
Info5.setOption(Info5_option);
Info5timer = setInterval(function () {
    Info5.clear();
    Info5.setOption(Info5_option);
}, 5000);




