import { Options } from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
import BaseVue from '@/utils/base-vue';
import ChartLine from '@/components/chart-line';
import ChartBar from '@/components/chart-bar';
import MixedChart  from '@/components/mixed-chart';
import {_DeepPartialArray} from "chart.js/types/utils";

@Options({
    mixins: [template],
    name:'Service',
    components: {
        ChartLine,
        MixedChart,
        ChartBar
    },
})
export default class Service extends BaseVue {
    public cartData:Array<any> =[];
    public isCartData:boolean =true;
    public setData(){
        this.isCartData =!this.isCartData;
       this.cartData = this.isCartData?[10, 15, 10, 25, 40, 80, null, null ]:[10, 15, 35, 45, 80, 110, 120, 135 ];
    }

}
