import { Options } from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
import BaseVue from '@/utils/base-vue';
import ChartLine from '@/components/chart-line';
import MixedChart  from '@/components/mixed-chart';

@Options({
    mixins: [template],
    name:'Service',
    components: {
        ChartLine,
        MixedChart
    },
})
export default class Service extends BaseVue {

}
