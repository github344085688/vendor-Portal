import { Options } from 'vue-class-component';
import template from "./router-views.vue";
import BaseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name: 'RouterViews',
})
export default class RouterViews extends BaseVue {
    public isShowShadows: boolean =true;
    public mounted(){
        console.log(this.getRouter());
    }

    public routeChange(routerName: any){
        if(routerName=='ExistingCustomerSignUp'||routerName=='VerifyEmailTips') this.isShowShadows = false;
        else this.isShowShadows = true;
    }
}
