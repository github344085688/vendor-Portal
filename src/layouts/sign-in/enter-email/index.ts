import { Options } from 'vue-class-component';
import template from "./enter-email.vue";
import baseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
import { Field, Form, useField } from 'vee-validate';
@Options({
    mixins: [template],
    name: 'EnterEmail',
    components: {
        Field,
        Form,
        useField
    },
    props: {
        showPageName: String
    },
    watch: {
        showPageName: {handler: 'watchShowPageName'},
    },

})
export default class EnterEmail extends baseVue {
    public showPageName!:string;
    public isLoding:boolean = true;

    public isShowGroup: boolean = false;

    public formData: object = {
        email: "",
    };

    public schema = {
        email: (value: any) => {
            if (!value) {
                return 'This field is required';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        },
    }

    onSubmit(values:any) {
        console.log(values); 
    }
    onInvalidSubmit(msg:any) {
    }

    public watchShowPageName(value: string, oldValue: string): void {
        if (value=='forgotPassword') {
            this.isShowGroup = true;
        } else {
            this.isShowGroup = false;
        }

    }

    mounted(){
        this.isShowGroup = true;
    }

    beforeUnmount(){
        // alert('ssss');
        this.isShowGroup = false;
    }
    sendResetEmail(): void {
        this.setRouter({ name: 'SendResetEmail'})
    }

    returnToLogin(): void {
        this.setRouter({ name: 'LoginPage'})
    }
 
}
