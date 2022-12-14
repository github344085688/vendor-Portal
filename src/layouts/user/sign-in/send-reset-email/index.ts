import { Options } from 'vue-class-component';
import template from "./send-reset-email.vue";
import BaseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
import { Field, Form, useField } from 'vee-validate';
@Options({
    mixins: [template],
    name: 'SendResetEmail',
    components: {
        Field,
        Form,
        useField
    }

})
export default class SendResetEmail extends BaseVue {
    public isLoding:boolean = false;
    public  returnToLogin():void{
        this.setRouter({ name: 'ChangeUserSignIn'})
    }
}
