import { Options } from 'vue-class-component';
import template from "./chart-bar.vue";
import BaseVue from '@/utils/base-vue';
import { defineComponent, h, PropType } from 'vue'
import { Bar  } from 'vue-chartjs'
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
        Bar
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
export default class ChartBar extends BaseVue {


    public chartId!:string;
    public cssClasses!:string;
    public width!: string;
    public height!: string;
    public styles!:Object;
    public plugins!: any;
    public datasetIdKey: string = '';
    public chartData: any = {
        labels: [
           'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        ],
        datasets: [
            {
                label: 'outstandingAchievement',
                data: [0, 0, 1, 2, 79, 82, 27, 14],
                backgroundColor: '#ffa0b4',
                borderColor: '#ff6384',
                borderWidth: 3,
                borderRadius: 5,
                borderSkipped: false,
            },
            {
                label: 'performanceRelativeX106',
                data: [
                    -16.6,
                    -208.1,
                    -300.3,
                    123,
                    954.792,
                    685.886,
                    243.662,
                    201.514,
                ],
                backgroundColor: '#9ad0f5',
                borderColor: '#36a2eb',
                borderWidth: 3,
            },
        ],
    };
    public chartOptions: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    private adjustRadiusBasedOnData(ctx: any) {
        // const v:any = ctx.parsed.y;
        const index:any = ctx.dataIndex;
        if(index == 0) return 2;
        else if(ctx.dataset.data && !ctx.dataset.data[index+1]) return 5;
        else return 0;

    }

    private alternatePointStyles(ctx: any) {
        const index:any = ctx.dataIndex;
        // console.log(index);
        console.log('reality', !ctx.dataset.data[index+1] );
        if(index == 1) return 'circle';
        else if(!ctx.dataset.data[index+1]) return 'circle';
        else return 'none';
    }


}
