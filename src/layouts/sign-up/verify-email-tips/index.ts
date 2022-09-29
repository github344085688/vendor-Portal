import { Options } from 'vue-class-component';
import template from "./verify-email-tips.vue";
import baseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
@Options({
    mixins: [template],
})
export default class VerifyEmailTips extends baseVue {


    public onSubmit(values:any) {
        console.log(values); 
    }
    public resendEmail() {
        this.setRouter({ name: 'VerifyEmail'})
    }
    public mounted(){

    }

    public beforeUnmount(){
    }

 
}
