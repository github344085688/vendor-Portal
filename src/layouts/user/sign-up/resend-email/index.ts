import { Options } from 'vue-class-component';
import template from "./resend-email.vue";
import BaseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
@Options({
    mixins: [template],
    name:'ResendEmail',
})
export default class ResendEmail extends BaseVue {


    public onSubmit(values:any) {
        console.log(values); 
    }
    public onInvalidSubmit(msg:any) {
    }
    public mounted(){

    }

    public beforeUnmount(){
    }
    public verifyEmailAddress(): void {
        this.setRouter({ name: 'VerifyEmailTips'})
    }
 
}
