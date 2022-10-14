import { Options } from 'vue-class-component';
import template from "./invoices.vue";
import BaseVue from '@/utils/base-vue';
import Pager from '@/components/pager';
@Options({
    mixins: [template],
    name: 'Invoices',
    components: {
        Pager
    },
    props: {
        propMessage: String
    },
})
export default class Invoices extends BaseVue {
    public isShowMoudal:boolean = false;
    public searchParams:any = {};
    public isShowMoudle:string = 'Invoices';
    public paging: any = {
        pageSize: 10,
        currentPage: 1,
        totalSize: 2000,
        text: 'tasks'
    };
    public onShowMoudal(isShowMoudal:boolean):void{
        this.isShowMoudal=true;
    }

    public routerImportExport():void {
         this.isShowMoudle  = 'Import & Export';
         this.setRouter({name:'ImportExport'})
    }

    public mounted(){
        this.isShowMoudle  = 'Invoices';
    }

    public routeChange(routerName: any){
        if(routerName=='ImportExport' )  this.isShowMoudle  = 'Import & Export';
        if(routerName=='InvoicesList' )  this.isShowMoudle  = 'Invoices';
    }

  /*  public activated():void {
        if(this.getRouter().query.name == 'ImportExport')
        if(this.getRouter().query.name == 'InvoicesList') this.isShowMoudle  = 'Invoices';
    }*/

    public routerInvoices():void {
        this.isShowMoudle  = 'Invoices';
        this.setRouter({name:'Invoices'})
    }

    public getList(paging: any):void{
        console.log(paging);
    }


}
