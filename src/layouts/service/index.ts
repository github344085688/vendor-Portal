import { Options } from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
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
            default: 'line-chart'
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 100
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
export default class Service extends BaseVue {


    public chartId!:string;
    public cssClasses!:string;
    public width!: Number;
    public height!: Number;
    public styles!:Object;
    public plugins!: any;


    public isSideSpread: boolean = true;
    public sideSpread: any = {};
    public chartData: any = {
        labels: ["10","","","20","","","30","","","40","","", "50","","", "60","","","70"],
        datasets: [
            {
                data: [200, 480, 700, 600, 620, 350, 380, 350, 850, "600", "650", "350", "590", "350", "620", "500", "990", "780", "650"],
                borderColor: [
                    '#c2c2c2'
                ],
                borderWidth: 2,
                fill: false,
                label: "Orders"
            },
            {
                data: [400, 450, 410, 500, 480, 600, 450, 550, 460, "560", "450", "700", "450", "640", "550", "650", "400", "850", "800"],
                borderColor: [
                    '#b0b0b0'
                ],
                borderWidth: 2,
                fill: false,
                label: "Downloads"
            }
        ]
    }

   /* chartOptions: LineControllerChartOptions;
    datasetOptions: LineControllerDatasetOptions & FillerControllerDatasetOptions;
    defaultDataPoint: ScatterDataPoint | number | null;
    metaExtensions: {};
    parsedDataType: CartesianParsedData;
    scales: keyof CartesianScaleTypeRegistry;*/

   public chartOptions: any = {
        responsive: true, // 长宽，100%.如果要单设长和宽的话，要将responsive 设为false
        maintainAspectRatio: true,// 保持长宽比
       // borderColor:'#eee1e8',
       // color:'#d2dd7f',
        // indexAxis: 'y',
        scales: {
            y: {
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
             /*   padding:50,
                labelOffset:50,
                autoSkipPadding:50,*/
               /* position:{
                    // left:-1250,
                    // top:-1250,

                },*/
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
            }
        },

        plugins: {

            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            grid: {
                row: {
                    colors: ['#4ef330', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
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
        //events: ['null'],//对事件的反应，null是对任何事件都无反应的设置，默认为
        // ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]
        elements:{
            line:{
                tension:0.4,
            },
            point: {
                radius: 0
            }
        },

        layout: {//线形图 位置
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },



       // animation: {//设置不做动画 （可以提高性能）
       //     duration: 0// general animation time
       // },

       // hover: {
        //    animationDuration: 0// duration of animations when hovering an item
       // },

       // responsiveAnimationDuration: 0, // animation duration after a resize


    }
   public chartOptionss: any =  {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            filler: {
                propagate: false
            },  tooltips: {
                enabled: true
            },
        },
        scales: {
            y: {
                display: true,//是显示
                beginAtZero: true,
                grid: {
                    borderColor: '#dd0100',
                    display:false,
                    z:100,
                    offset:true,
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
                    display: false,
                    color:"#f2f2f2",
                    drawBorder: false,
                    precision:0
                }
            },
            x: {
                display: true,//是显示
                grid: {
                    borderColor: '#03dd2f',
                    z:20,
                    offset:true,
                    tickLength:-1,
                },
                ticks: {
                    display: true,
                    padding: 3,
                    fontColor:"#6C7383"
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                }
            }
        },

        tooltips: {
            enabled: true
        },
        elements: {
            line: {
                tension: .35
            },
            point: {
                radius: 0
            }
        }
    }
    public mounted(): void {
        /*this.plugins = [{

        }]*/
    }
    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;
        this.sideSpread.bb = isSpread;
        this.sideSpread.aaa = 'bbb';
    }

}
