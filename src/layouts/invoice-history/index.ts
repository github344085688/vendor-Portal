import { Options } from 'vue-class-component';
import template from "./invoice-history.vue";
import './invoice-history.scss';
import baseVue from '../../utils/base-vue';

@Options({
    mixins: [template],
    name: 'InvoiceHistory',
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class InvoiceHistory extends baseVue {


}
