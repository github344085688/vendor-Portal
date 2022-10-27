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
    public cartData: Array<any> = [
        [10, 15,20, 40, 100, 120, null, null],
        [2, 10, 25, 30, 50, 60, 65, 75]
    ];
    public cartOptions: Array<any> = [
        {
        type: 'line',
        label: 'circle',
        borderColor: '#488492',
        backgroundColor: '#488492',
        spot:'last',
       },
        {
        type: 'line',
        label: 'circle',
        borderColor: '#b0b0b0',
        backgroundColor: '#b0b0b0',
        spot:'none',
    }
    ];
    public chartLabels: Array<any> =  ["April 1","","","May 1","","","","June 1" ];
    public isCartData:boolean =true;
    public service:any = {
        business:'Gross Volume',
        month:'December 1,2022 ~ November 1,2022'
    };
    private setData(): void{
       this.isCartData =!this.isCartData;
       this.cartData =  [
           [10, 20,15, 35, 110, 130, 135, 140],
           [2, 10, 25, 30, 50, 60, 65, 75],
           [10, 20,20, 25, 95, 100, 110, 115],
       ];
    }

    public onSelectChartDate(date: string): void {
        this.setData();
    }

}
