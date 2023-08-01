import { Options } from 'vue-class-component';
import template from "./chart-line.vue";
import BaseVue from '@/utils/base-vue';
import { defineComponent, h, PropType } from 'vue'
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

@Options({
    mixins: [template],
    name:'Service',
    components: {
        Line
    },
    props: {
        chartId: {
            type: String,
            default: 'bar'
        },
        width: {
            type: String ,
            default: '100%'
        },
        height: {
            type: String ,
            default: '250'
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => {}
        },
        plugins: {
            type: Array as PropType<Plugin<'line'>[]>,
            default: () => []
        }
    },
})
export default class ChartLine extends BaseVue {


    public chartId!: string;
    public cssClasses!: string;
    public width!: string;
    public height!: string;
    public styles!: Object;
    public plugins!: any;
    public datasetIdKey: string = '';
    public chartData: any = {
        labels: ["April 1", "", "", "May 1", "", "", "", "June 1"],
        datasets: [
            {
                // type: 'line',
                label: 'circle',
                data: [5, 20, 35, 45, 80, 110, null, null],
                borderColor: '#488492',
                backgroundColor: '#488492',
                /* pointStyle: 'triangle',
                 pointRadius: 6,*/
            },
            {
                // type: 'line',
                label: 'aim',
                data: [2, 10, 25, 30, 50, 60, 65, 75],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                pointStyle: 'none',
                pointRadius: 0,
            },

        ]
    }

    private adjustRadiusBasedOnData(ctx: any) {
        // const v:any = ctx.parsed.y;
        const index: any = ctx.dataIndex;
        if (index == 0) return 2;
        else if (ctx.dataset.data && !ctx.dataset.data[index + 1]) return 5;
        else return 0;
        /*return v < 10 ? 5
            : v < 25 ? 7
            : v < 50 ? 9
            : v < 75 ? 11
            : 15;*/
    }

    private alternatePointStyles(ctx: any) {
        const index: any = ctx.dataIndex;
        // console.log(index);
        console.log('reality', !ctx.dataset.data[index + 1]);
        if (index == 1) return 'circle';
        else if (!ctx.dataset.data[index + 1]) return 'circle';
        else return 'none';
    }

    public chartOptions: any = {
        responsive: true, // 长宽，100%.如果要单设长和宽的话，要将responsive 设为false
        maintainAspectRatio: true,// 保持长宽比
        // borderColor:'#eee1e8',
        // color:'#d2dd7f',
        // indexAxis: 'y',
        events: ['null'],//对事件的反应，null是对任何事件都无反应的设置，默认为["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]
        /*  layout: {//线形图 位置
              padding: {
                  left: 0,
                  right:0,
                  top: 0,
                  bottom: 0
              }
          },*/
        animation: {//设置不做动画 （可以提高性能）
            duration: 0// general animation time
        },
        hover: {
            animationDuration: 0// duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize

        scales: {
            y: {
                min: 0,
                max: 150,
                display: true,//是显示
                beginAtZero: true,
                ticks: {   //对Y轴开始配置
                    //beginAtZero:true,//如果为true，则如果还没有包含，则标度将包括0。
                    // suggestedMin: 1,//计算最小数据值时使用的调整
                    //suggestedMax: 5,//计算最小数据值时使用的调整
                    //stepSize:1, //用户定义的比例尺的固定步长
                    //maxTicksLimit:1, //最大数量的刻度线和网格线显示
                    // min:200,  //用户定义的最小数量，覆盖数据的最小值
                    //max:1200,   //用户定义的最大数量，覆盖数据的最大值
                    display: false,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 200,
                    min: 200,
                    max: 1200,
                    padding: 25,
                    fontColor: "#6C7383"
                },
                gridLines: {//Y轴网格配置
                    color: "#f2f2f2",//网格线的颜色。如果指定为数组，第一种颜色适用于第一个网格线，第二个适用于第二个网格线，依此类推
                    drawBorder: true,//如果为true，则在轴和图表区域之间的边缘绘制边框
                    precision: 0,
                    display: true, //如果为false，则不显示该轴的网格线。


                    /*
                     borderDash:1,//网格线上的破折号的长度和间距
                     borderDashOffset:1,//折线为破折号
                     lineWidth:1, //网格线的行程宽度

                     drawOnChartArea:true, //如果为true，则在轴线内的图表区域绘制线条。当有多个轴时，这是很有用的，而且您需要控制绘制哪些网格线。
                     drawTicks:true,//如果为true，则在图表旁边的轴区域中的刻度线旁绘制线条
                     tickMarkLength:10, //网格线将绘制到轴区域的长度（以像素为单位）
                     zeroLineWidth:1, //第一个索引（索引0）的网格线的行程宽度
                     zeroLineColor:"red",  //第一个索引（索引0）的网格线的笔触颜色
                     zeroLineBorderDash:1, //第一个索引（索引0）的网格线的破折号的长度和间隔
                     zeroLineBorderDashOffset:1, //第一个索引（索引0）的网格线的折线偏移量
                     offsetGridLines:false, //如果为true，网格线将被移动到标签之间。这true在默认情况下设置在条形图中
                     //更多配置http://www.chartjs.org/docs/latest/axes/radial/linear.html*/
                },
                grid: {
                    borderColor: '#f6f3f3',
                    display: false,
                    offset: true,
                    tickLength: 10,
                },


            },
            x: {

                display: true,//是显示
                grid: {
                    display: true,
                    circular: true,
                    drawBorder: true,
                    offset: true,
                    // z:999999,
                    borderDash: [90, 200, 200],
                    borderColor: '#E0DDDD',
                    tickLength: -1,
                    tickWidth: 0,
                    lineWidth: 0.3,//**
                    borderDashOffset: 200,
                    borderWidth: 1,
                    color: '#E0DDDD',//网格颜色。
                    tickColor: '#E0DDDD',
                },
                ticks: {
                    display: true,
                    padding: 3,
                    fontColor: "#832828"
                },
                gridLines: {
                    borderColor: '#f6f3f3',
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#832828'
                }
            },
        },

        plugins: {
            legend: { // title下面的 小标题 和 小图的配置
                display: false, //是显示
                position: "top",//显示的位置
                fullWidth: "true", //标记此框应占据画布的整个宽度（按下其他框）。这在日常使用中不太可能需要改变
                onClick: function () {
                    console.log('sss');
                },//点击时的回调
                onHover: function () {
                }, //在标签项上注册“mousemove”事件时调用的回调函数
                reverse: false, //图例将以相反的顺序显示数据集。
                z: 100,
                labels: { //图例标签配置
                    boxWidth: 10,//彩色框的宽度
                    fontSize: "12", //文本的字体大小
                    fontStyle: "normal", //字体风格
                    fontColor: "red", // 文本的颜色
                    padding: 2, //填充行之间的彩色框
                    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", //字体家族
                    usePointStyle: false //标签样式将匹配相应的点样式（大小基于fontSize，在这种情况下不使用boxWidth）
                }
            },
            title: {
                display: false,//是否显示
                text: 'Custom Chart Title:0.38', //title内容
                position: "left",     //title位置
                fontSize: 20,   //字体大小 默认为12px
                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", //字体家族文本
                fontColor: '#666',
                fontStyle: 'bold', //字体样式
                padding: 10, //在标题文本上方和下方添加的像素数量
                lineHeight: 10 //单行文本的高度//对标题的配置

            },
            labels: {
                color: "#dd343b",
                boxWidth: '200',
                display: false,
            },


        },
        tooltips:{  //对点击提示框的配置
            enabled:false, //是否启用工具提示
            custom:null,   //类型是function 可以自定义提示框
            mode:"point"
            /*
             提示框可以出现那些数据  （
             1、point 点  查找与点相交的所有项目。
             2、nearest 最近的数据 获取距离该点最近的项目。最近的项目是根据到图表项目中心的距离（点，条）确定的。如果2个或更多项目在相同的距离，则使用面积最小的项目。如果intersect为true，则仅在鼠标位置与图形中的项目相交时触发。这对组合图表非常有用，其中点隐藏在条形图的后面。
             3、index 标签 在相同的索引处查找项目。如果intersect设置为true，则使用第一个相交项目来确定数据中的索引。如果为intersectfalse，则在x方向上最近的项目用于确定索引。
             4 dataset 数据集 在相同的数据集中查找项目。如果intersect设置为true，则使用第一个相交项目来确定数据中的索引。如果为intersectfalse，则使用最近的项目来确定索引
             5 x 仅返回基于X位置坐标相交的所有项目。对于垂直游标实现将是有用的
             6 y 根据Y位置的坐标返回所有相交的项目。这对于水平游标实现是有用的
             ）
             callbacks:{ //所有的回调函数 http://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
             }
             backgroundColor："red" //背景颜色等等
             详细配置参考 git http://www.chartjs.org/docs/latest/configuration/tooltip.html

             */
        },

        //events: ['null'],//对事件的反应，null是对任何事件都无反应的设置，默认为
        // ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]
        elements:{
            line:{
                tension:0.4,
            },
            point: {
                // radius: 2,
                backgroundColor: "#488492",
                // hoverBackgroundColor: "#a2ffa5",
                radius: this.adjustRadiusBasedOnData,
                // pointStyle: this.alternatePointStyles,
                // hoverRadius: 15,
            },
            arc: {
                borderWidth: 2
            },

        },




        // animation: {//设置不做动画 （可以提高性能）
        //     duration: 0// general animation time
        // },

        // hover: {
        //    animationDuration: 0// duration of animations when hovering an item
        // },

        // responsiveAnimationDuration: 0, // animation duration after a resize


    };
    public chartOptionssss: any = {
        responsive: true, // 长宽，100%.如果要单设长和宽的话，要将responsive 设为false
        maintainAspectRatio: true,// 保持长宽比
       // borderColor:'#eee1e8',
       // color:'#d2dd7f',
        // indexAxis: 'y',

        scales: {
            y: {
                min: 0,
                max: 150,
                display: true,//是显示
                beginAtZero: true,
                grid: {
                    borderColor: '#f6f3f3',
                    display:false,
                    offset:true,
                    tickLength:-1,
                },
                ticks: {
                    display: false,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 200,
                    min: 200,
                    max: 1200,
                    padding: 25,
                    fontColor:"#6C7383"
                },
                gridLines: {
                    display: true,
                    color:"#f2f2f2",
                    drawBorder: true,
                    precision:0
                }
            },
            x: {

                display: true,//是显示
                grid: {
                    borderColor: '#E0DDDD',
                    offset:true,
                    tickLength:-1,
                    tickWidth:0,
                    lineWidth:0.3,//**
                    borderDashOffset:1,
                    borderWidth:1,
                    circular:true,
                    color:'#E0DDDD',//网格颜色。
                    tickColor:'#E0DDDD',
                },
                ticks: {
                    display: true,
                    padding: 3,
                    fontColor:"#832828"
                },
                gridLines: {
                    borderColor: '#f6f3f3',
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#832828'
                }
            },
        },
        layout: {
           padding: {
               left: 50
           }
       },
        plugins: {

            legend: { // title下面的 小标题 和 小图的配置
                display: false,//是显示
                position: 'top',//显示的位置
                fullWidth: "true", //标记此框应占据画布的整个宽度（按下其他框）。这在日常使用中不太可能需要改变

                onClick: function () {
                },//点击时的回调
                onHover: function () {
                }, //在标签项上注册“mousemove”事件时调用的回调函数
                reverse: false, //图例将以相反的顺序显示数据集。
                labels: { //图例标签配置
                    boxWidth: 10,//彩色框的宽度
                    fontSize: "20", //文本的字体大小
                    fontStyle: "normal", //字体风格
                    fontColor: "red", // 文本的颜色
                    padding: 10, //填充行之间的彩色框
                    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", //字体家族
                    usePointStyle: false, //标签样式将匹配相应的点样式（大小基于
                }
            },
            title: {                //对标题的配置
                display: false,//是否显示
                text: 'Custom Chart Title:0.38', //title内容
                position:"left" ,    //title位置
                fontSize:20,   //字体大小 默认为12px
                fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", //字体家族文本
                fontColor:'#666',
                fontStyle:'bold', //字体样式
                padding:10, //在标题文本上方和下方添加的像素数量
                lineHeight:10 //单行文本的高度
            },
            labels:{
                color:"#dd343b",
                boxWidth:'200',
                // display: false,
            },

        },
        tooltips:{
           callbacks: {

           }
       },
        //events: ['null'],//对事件的反应，null是对任何事件都无反应的设置，默认为
        // ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]
        elements:{
            line:{
                tension:0.4,
            },
            point: {
                // radius: 2,
                backgroundColor: "#488492",
                // hoverBackgroundColor: "#a2ffa5",
                radius: this.adjustRadiusBasedOnData,
                // pointStyle: this.alternatePointStyles,
                // hoverRadius: 15,
            },
            arc: {
                borderWidth: 2
            },

        },

     /*   layout: {//线形图 位置
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },*/



       // animation: {//设置不做动画 （可以提高性能）
       //     duration: 0// general animation time
       // },

       // hover: {
        //    animationDuration: 0// duration of animations when hovering an item
       // },

       // responsiveAnimationDuration: 0, // animation duration after a resize


    }

}
