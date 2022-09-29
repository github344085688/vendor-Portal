import { Options } from 'vue-class-component';
import template from "./invoices.vue";
import './invoices.scss';
import BaseVue from '../../utils/base-vue';
import PrimaryModal from '@/components/primary-modal';

@Options({
    mixins: [template],
    components: {
        PrimaryModal
    },
    props: {
        propMessage: String
    },
})
export default class InvoiceHistory extends BaseVue {
    public isShowMoudal:boolean = false;
    public onShowMoudal(isShowMoudal:boolean){
        this.isShowMoudal=true;
    }


}
