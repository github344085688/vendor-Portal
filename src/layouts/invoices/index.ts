import { Options } from 'vue-class-component';
import template from "./invoices.vue";
import './invoices.scss';
import baseVue from '../../utils/base-vue';

@Options({
    mixins: [template],
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class InvoiceHistory extends baseVue {


}
