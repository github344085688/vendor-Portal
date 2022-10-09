import { Options } from 'vue-class-component';
import template from "./invoices.vue";
import './invoices.scss';
import BaseVue from '../../utils/base-vue';
import PrimaryModal from '@/components/primary-modal';
import DefaultSelect from '@/components/default-select';
import Pager from '@/components/pager';
@Options({
    mixins: [template],
    components: {
        PrimaryModal,
        DefaultSelect,
        Pager
    },
    props: {
        propMessage: String
    },
})
export default class InvoiceHistory extends BaseVue {
    public isShowMoudal:boolean = false;
    public searchParams:any = {};
    public paging: any = {
        pageSize: 10,
        currentPage: 1,
        totalSize: 2000,
        text: 'tasks'
    };
    public onShowMoudal(isShowMoudal:boolean){
        this.isShowMoudal=true;
    }


}
