import { Options } from 'vue-class-component';
import template from "./chart-line.vue";
import BaseVue from '@/utils/base-vue';
import { chartLine } from '@/utils/chartOptions';
import { defineComponent, h, PropType } from 'vue'
import { Line } from 'vue-chartjs'
import {forEach,isArray} from 'lodash-es';
type CartConfig = {
    type?: string,
    label?: string,
    data:[],
    borderColor?: string,
    backgroundColor?: string,
    spot?: string,
};
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
        },
        datasets: {
            type: Array,
            default: () => [],
        }
    },
    watch:{
        datasets:{handler : 'watchDatasets', immediate: true ,deep: true}
    }
})
export default class ChartLine extends BaseVue {
    public chartId!:string;
    public cssClasses!:string;
    public width!: number;
    public height!: number;
    public styles!:Object;
    public plugins!: any;
    public datasets!: Array<any>;

    public chartData: any = {
        labels: ["April 1","","","May 1","","","","June 1" ],
        datasets:[],
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
    public watchDatasets(value: Array<number> ): void {
        this.fillCartData(value);

    }

    private fillCartData(datas:Array<number>){
        forEach(datas, (val: any, index: any) => {
            let cart: CartConfig = {
                type: val.type ? val.type : 'line',
                label: val.label ? val.label : '',
                data: val.data,
                borderColor: val.borderColor ? val.borderColor : '#488492',
                backgroundColor: val.backgroundColor ? val.backgroundColor : '#488492',
                spot: val.spot ? val.spot : '',
            };
            this.chartData.datasets.push(cart);
        });
    }

    public mounted():void{
        this.fillCartData(this.datasets);
        /* this.chartData.datasets[0].data = this.datasets.length>0 ? this.datasets:[5, 20, 35, 45, 80, 110, null, null ];*/
    }

}