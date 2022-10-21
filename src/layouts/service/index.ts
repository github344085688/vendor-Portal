import { Options } from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
import BaseVue from '@/utils/base-vue';
import ChartLine from '@/components/chart-line';
import MixedChart  from '@/components/mixed-chart';
import BaseDatePicker  from '@/components/base-date-picker';

@Options({
    mixins: [template],
    name:'Service',
    components: {
        ChartLine,
        MixedChart,
        BaseDatePicker
    },
})
export default class Service extends BaseVue {
    public cartData: Array<any> = [{
        type: 'line',
        label: 'circle',
        borderColor: '#488492',
        backgroundColor: '#488492',
        spot:'last',
        data: [10, 15,20, 40, 100, 120, null, null],
    }, {
        type: 'line',
        label: 'circle',
        borderColor: '#b0b0b0',
        backgroundColor: '#b0b0b0',
        spot:'none',
        data: [2, 10, 25, 30, 50, 60, 65, 75],
    }


    ];
    public isCartData:boolean =true;
    public service:any = {
        business:'Gross Volume',
        month:'June 1,2022'
    };
    public setData(){
       this.isCartData =!this.isCartData;
       this.cartData = this.isCartData?[[10, 15, 10, 25, 40, 80, null, null ]]:[[10, 15, 35, 45, 80, 110, 120, 135 ]];
    }

}
