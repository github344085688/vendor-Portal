import { Options } from 'vue-class-component';
import template from "./chart-line.vue";
import BaseVue from '@/utils/base-vue';
import { chartLine } from '@/utils/chartOptions';
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
            type: Number ,
            default: '100%'
        },
        height: {
            type: Number ,
            default: 250
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


    public chartId!:string;
    public cssClasses!:string;
    public width!: number;
    public height!: number;
    public styles!:Object;
    public plugins!: any;

    public chartData: any = {
        labels: ["April 1","","","May 1","","","","June 1" ],
        datasets: [
          {
                // type: 'line',
                label: 'circle',
                data: [5, 20, 35, 45, 80, 110, null, null ],
                borderColor: '#488492',
                backgroundColor: '#488492',
               /* pointStyle: 'triangle',
                pointRadius: 6,*/
            },
            {
                // type: 'line',
                label: 'aim',
                data: [2, 10, 25, 30,50, 60, 65, 75],
                borderColor: 'rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                pointStyle: 'none',
                pointRadius: 0,
            },

        ]
    }

    private alternatePointStyles(ctx: any) {
        const index:any = ctx.dataIndex;
        // console.log(index);
        console.log('reality', !ctx.dataset.data[index+1] );
        if(index == 1) return 'circle';
        else if(!ctx.dataset.data[index+1]) return 'circle';
        else return 'none';
    }
    public  chartOptions: any =  chartLine;


}