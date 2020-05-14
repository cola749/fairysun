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
var myChart = echarts.init(document.getElementById('map'));
var option = {
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
myChart.setOption(option);
/*一级弹窗*/
myChart.on('click', function (e) {
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


/*完工达成提醒*/
var Info1 = echarts.init(document.getElementById('wangong_dacheng'));
var Info1_option = {
    color: ['#00b5ba', '#DD614A'],
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
    legend: {
        top: '0',
        right: '5%',
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
        boundaryGap: [0, 0.01],
        max: 400,
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
            name: '实际达成',
            type: 'bar',
            barCategoryGap: '60%',
            barGap: "-100%",
            silent: true,
            z: 11,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0aaeaf'
                    }, {
                        offset: 1,
                        color: '#2bffff'
                    }]),
                }
            },
            data: [200, 301, 320, 230, 333, 220, 321]
        },
        {
            type: 'bar',
            barCategoryGap: '60%',
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: "1",
                    borderColor: "#1b82aa"
                }
            },
            data: [400, 400, 400, 400, 400, 400, 400]
        },
        {
            name: '实际单数',
            type: 'line',
            barCategoryGap: '50%',
            symbol: 'circle',
            z: 13,
            symbolSize: fontSize(0.1),
            itemStyle: {
                normal: {
                    color: '#f1f887',
                }
            },
            data: [150, 220, 110, 200, 80, 220, 280]
        }
    ],
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

/*施工异常-施工数量*/
var Info2 = echarts.init(document.getElementById('yichang1'));
var Info2_option = {
    title: {
        text: '施工数量',
        left: 'center',
        bottom: '5%',
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
    },
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    color: ['#1f70cf', '#c0656e', '#009c84', '#7f6aad', '#3fc2e8', '#a0ce3a', '#5d99fc', '#dddb6f'],
    series: [{
        type: 'pie',
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{b}\n{c}',
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
        data: [
            {name: 'DIY苏皖公司', value: 70},
            {name: 'DIY华中公司', value: 60},
            {name: 'DIY中原公司', value: 58},
            {name: 'DIY江南公司', value: 77},
            {name: 'DIY南区公司', value: 86},
            {name: 'DIY华北公司', value: 48},
            {name: 'DIY西区公司', value: 30},
        ]
    }]
};
Info2.setOption(Info2_option);
var Info2_index = 0; // 高亮索引
function Info2_change(e) {
    Info2.dispatchAction({
        type: 'downplay'
    })
    Info2.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
    });
    Info2.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e
    });
}

Info2_change(Info2);
Info2timer = setInterval(function () {
    Info2_index++;
    if (Info2_index == Info2_option.series[0].data.length) {
        Info2_index = 0;
    }
    Info2_change(Info2_index)
}, 2400);

/*施工异常-施工预警*/
var Info3 = echarts.init(document.getElementById('yichang2'));
var Info3_option = {
    title: {
        text: '施工数量',
        left: 'center',
        bottom: '5%',
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
    },
    grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    color: ['#1f70cf', '#c0656e', '#009c84', '#7f6aad', '#3fc2e8', '#a0ce3a', '#5d99fc', '#dddb6f'],
    series: [{
        type: 'pie',
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{b}\n{c}',
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
        data: [
            {name: 'DIY苏皖公司', value: 70},
            {name: 'DIY华中公司', value: 60},
            {name: 'DIY中原公司', value: 58},
            {name: 'DIY江南公司', value: 77},
            {name: 'DIY南区公司', value: 86},
            {name: 'DIY华北公司', value: 48},
            {name: 'DIY西区公司', value: 30},
        ]
    }]
};
Info3.setOption(Info3_option);
var Info3_index = 0; // 高亮索引
function Info3_change(e) {
    Info3.dispatchAction({
        type: 'downplay'
    });
    Info3.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e
    });
    Info3.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e
    });
}

Info3_change(Info3);
Info3timer = setInterval(function () {
    Info3_index++;
    if (Info3_index == Info3_option.series[0].data.length) {
        Info3_index = 0;
    }
    Info3_change(Info3_index)
}, 2400);


var Info4 = echarts.init(document.getElementById('shigong_leixing'));
var Info4_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#3fc2e8', '#a0ce3a', '#1f70cf', '#7f6aad', '#009c84', '#c0656e', '#dddb6f', '#5d99fc'],
    legend: {
        data: ['方案一', '方案二', '方案三', '方案四', '方案五'],
        top: '2%',
        bottom: '2%',
        itemWidth: fontSize(0.15),
        itemHeight: fontSize(0.03),
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
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            }
        },
        axisLine: {
            show: false,
            // lineStyle: {
            //     color: '#4d5f93'
            // }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#4d5f93',
            // }
        }
    },
    yAxis: {
        type: 'category',
        data: ['DIY华中公司', 'DIY苏皖公司', 'DIY中原公司', 'DIY南区公司', 'DIY江南公司', 'DIY华北公司', 'DIY西区公司'],
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: fontSize(0.1)
            },
            interval: 0,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            // lineStyle: {
            //     color: '#4d5f93'
            // }
        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#4d5f93',
            // }
        }
    },
    series: [
        {
            name: '方案一',
            type: 'bar',
            stack: '总量',
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '方案二',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '方案三',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '方案四',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '方案五',
            type: 'bar',
            stack: '总量',
            data: [220, 432, 201, 334, 290, 330, 320]
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
Info4.setOption(Info4_option);
Info4timer = setInterval(function () {
    Info4.clear();
    Info4.setOption(Info4_option);
}, 5000);


//使用产品提醒
var Info5 = echarts.init(document.getElementById('chanpin_tixing'));

var datacptx = [
    {
        value: 9,
        name: "DIY南区公司",
        itemStyle: {
            color: '#23b5cc',
        },
        label: {
            position: 'inside',
            rotate: -30,
        },
        children: [{
            value: 3,
            name: "",
            itemStyle: {
                color: '#42d3f2',
            },
            children: [{
                name: "",
                value: 3,
                itemStyle: {
                    color: '#3598fe',
                },
            }]
        }, {
            value: 3,
            name: "",
            itemStyle: {
                color: '#25ffcc',
            },
            children: [{
                name: "",
                value: 3,
                itemStyle: {
                    color: '#32ccff',
                },
            }]
        }, {
            value: 3,
            name: "",
            itemStyle: {
                color: '#43c3cc',
            },
            children: [{
                name: "",
                value: 3,
                itemStyle: {
                    color: '#2dfffc',
                },
            }]
        }]
    }, {
        name: "DIY华中公司",
        value: 4,
        itemStyle: {
            color: '#2871b5',
        },
    }, {
        name: "DIY苏皖公司",
        value: 4,
        itemStyle: {
            color: '#dddb6f',
        },
    }, {
        name: "DIY中原公司",
        value: 4,
        itemStyle: {
            color: '#eb6b9e',
        },
    }, {
        name: "DIY江南公司",
        value: 4,
        itemStyle: {
            color: '#d19fd4',
        },
    }, {
        name: "DIY华北公司",
        value: 4,
        itemStyle: {
            color: '#25cd84',
        },
    }, {
        name: "DIY西区公司",
        value: 4,
        itemStyle: {
            color: '#d81d6e',
        },
    }];

var Info5_option = {
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: datacptx,
        radius: [0, '95%'],
        sort: null,
        levels: [
            {}, {
                r0: '35%',
                r: '65%',
            }, {
                r0: '65%',
                r: '75%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '75%',
                r: '90%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
            }],
        label: {
            color: '#fff',
            position: 'outside',
            rotate: 25,
            formatter: function (param) {
                return param.name + param.value
            }
        }
    },
    animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    },
    animationDelayUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 200;
    }
};


Info5.setOption(Info5_option);
Info5timer = setInterval(function () {
    Info5.clear();
    Info5.setOption(Info5_option);
}, 10000);


//风险预警--未使用方案
var Info6 = echarts.init(document.getElementById('fxyj_wg'));

let industry_data6 = 0.58;
// 处理旋转量
let startAngle6 = industry_data6 * 100 * 1.8 - 90;
var Info6_option = {
    title: {
        text: '完工',
        left: 'center',
        bottom: '5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    color: ['transparent'],
    legend: {
        show: true,
        itemGap: 12,
        subtext: '',
        data: []
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: true,
        radius: ['60%', '65%'],
        startAngle: startAngle6,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        data: [{
            value: industry_data6 * 100,
            name: '',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#f6f357' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#66d8bb'
                        }, {
                            offset: 1,
                            color: '#47d7d0' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                }
            }
        }, {
            name: '',
            value: (1 - industry_data6) * 100,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                }
            }
        }]
    }, {
        type: 'liquidFill',
        name: '未使用方案',
        data: [industry_data6, industry_data6],
        radius: '60%',
        itemStyle: {
            normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: '',
            }
        },
        label: {
            formatter: function (param) {
                console.log(param)
                return (param.value * 100).toFixed(2) + '%\n\n' + param.seriesName
            },
            textStyle: {
                color: '#18bdd0',
                fontSize: fontSize(0.1)
            },
            position: 'inside'
        },
        backgroundStyle: {
            color: '#0b54ab', // 水球未到的背景颜色
            opacity: 0.5
        },
        color: ['#18bdd0'],
        outline: {
            show: false
        },
    }]
};
Info6.setOption(Info6_option);
Info6timer = setInterval(function () {
    Info6.clear();
    Info6.setOption(Info6_option);
}, 5000);

// 风险预警--预警
var Info7 = echarts.init(document.getElementById('fxyj_gf'));

let industry_data7 = 0.03;
// 处理旋转量
let startAngle7 = industry_data7 * 100 * 1.8 - 90;
var Info7_option = {
    title: {
        text: '预警',
        left: 'center',
        bottom: '5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    color: ['transparent'],
    legend: {
        show: true,
        itemGap: 12,
        subtext: '',
        data: []
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: true,
        radius: ['60%', '65%'],
        startAngle: startAngle7,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        data: [{
            value: industry_data7 * 100,
            name: '',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#f6f357' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#66d8bb'
                        }, {
                            offset: 1,
                            color: '#47d7d0' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                }
            }
        }, {
            name: '',
            value: (1 - industry_data7) * 100,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                }
            }
        }]
    }, {
        type: 'liquidFill',
        name: '预警',
        data: [industry_data7, industry_data7],
        radius: '60%',
        itemStyle: {
            normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: '',
            }
        },
        label: {
            formatter: function (param) {
                console.log(param)
                return (param.value * 100).toFixed(2) + '%\n\n' + param.seriesName
            },
            textStyle: {
                color: '#18bdd0',
                fontSize: fontSize(0.1)
            },
            position: 'inside'
        },
        backgroundStyle: {
            color: '#0b54ab', // 水球未到的背景颜色
            opacity: 0.5
        },
        color: ['#18bdd0'],
        outline: {
            show: false
        },
    }]
};
Info7.setOption(Info7_option);
Info7timer = setInterval(function () {
    Info7.clear();
    Info7.setOption(Info7_option);
}, 5000);

// 风险预警--费用
var Info8 = echarts.init(document.getElementById('fxyj_fy'));

let industry_data8 = 0.165;
// 处理旋转量
let startAngle8 = industry_data8 * 100 * 1.8 - 90;
var Info8_option = {
    title: {
        text: '费用',
        left: 'center',
        bottom: '5%',
        textStyle: {
            fontSize: fontSize(0.1),
            fontWeight: 'normal',
            color: '#fff'                             // 主标题文字颜色
        }
    },
    color: ['transparent'],
    legend: {
        show: true,
        itemGap: 12,
        subtext: '',
        data: []
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: true,
        radius: ['60%', '65%'],
        startAngle: startAngle8,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        data: [{
            value: industry_data8 * 100,
            name: '',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#f6f357' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#66d8bb'
                        }, {
                            offset: 1,
                            color: '#47d7d0' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                }
            }
        }, {
            name: '',
            value: (1 - industry_data8) * 100,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                }
            }
        }]
    }, {
        type: 'liquidFill',
        name: '费用',
        data: [industry_data8, industry_data8],
        radius: '60%',
        itemStyle: {
            normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: '',
            }
        },
        label: {
            formatter: function (param) {
                console.log(param)
                return (param.value * 100).toFixed(2) + '%\n\n' + param.seriesName
            },
            textStyle: {
                color: '#18bdd0',
                fontSize: fontSize(0.1)
            },
            position: 'inside'
        },
        backgroundStyle: {
            color: '#0b54ab', // 水球未到的背景颜色
            opacity: 0.5
        },
        color: ['#18bdd0'],
        outline: {
            show: false
        },
    }]
};
Info8.setOption(Info8_option);
Info8timer = setInterval(function () {
    Info8.clear();
    Info8.setOption(Info8_option);
}, 5000);