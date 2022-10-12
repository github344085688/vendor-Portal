import { Options } from 'vue-class-component';
import template from "./change-user-sign-up.vue";
import BaseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name:'ChangeUserSignUp',
    components: {
    },

})
export default class ChangeUserSignUp extends BaseVue {
    public onChangeUser(name: string):void{
        this.setRouter({ name: 'ExistingCustomerSignUp'})
       /* this.showPageName = 'loginPage';*/
    }



    // 生命周期
    mounted(){
        const pathname = window.location.pathname.slice(1);
        // console.log('pathname', pathname);
    }

    beforeUnmount(){

    }

}
