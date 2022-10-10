import { Options } from 'vue-class-component';
import template from "./invoices.vue";
import './invoices.scss';
import BaseVue from '../../utils/base-vue';
import PrimaryModal from '@/components/primary-modal';
import Pager from '@/components/pager';
@Options({
    mixins: [template],
    name: 'Invoices',
    components: {
        PrimaryModal,
        Pager
    },
    props: {
        propMessage: String
    },
})
export default class Invoices extends BaseVue {
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

    public getList(paging: any){
        console.log(paging);
    }


}
