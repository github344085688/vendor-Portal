import { Options } from 'vue-class-component';
import template from "./verify-email.vue";
import baseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
import { Field, Form } from 'vee-validate';
import DefaultSelect from '@/components/default-select';
import { forEach } from 'lodash-es';
@Options({
    mixins: [template],
    name:'VerifyEmail',
    components: {
        Field,
        Form,
        DefaultSelect
    },
})
export default class VerifyEmail extends baseVue {
    public isSwitchWelcomeToUnis:boolean = false;
    public isSwitchTellUsAboutYourBusiness:boolean = false;

    public schema = {
        firstName: (value: any) => {
            if (value && value.length) {
                if(value.length < 6) return 'User name is too simple';
                else return true;
            }
            return 'Incorrect email';
        },
        lastName: (value: any) => {
            if (value && value.length) {
                if(value.length < 6) return 'User name is too simple';
                else return true;
            }
            return 'Incorrect email';
        },
        password: (value: any) => {
            if (value && value.length) {
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                if(regex.test(value)) return true;
                else return 'At least 8 characters,Contain a numbe,Uppercase letter ,Lowercase letter';
            }
            return 'Incorrect password';
        },
    }

    verifyEmail: any = {};
    businessVerify: any = {};
    moudleName: string = "welcomeToUnis";
    // moudleName: string = "tellUsAboutYourBusiness";
    // moudleState: string = "complete";
    moudleState: string = "operation";
    confirmPassword: boolean = true;
    isshowPassword: boolean = true;
    isVerifyEmail: boolean = false;
    isTellBusinessLoding: boolean = false;
    isVerifyEmailToBusiness: boolean = false;
    businessTypes: Array<any> = [
        { key: 1, code: null, title: "Residential/End user" },
        { key: 2, code: "CON", title: "Sole Proprietor/Small business" },
        { key: 3, code: "SHOW", title: "Medium - Large business" },
        { key: 4, code: null, title: "Fortune 500/Global organization" },
        { key: 5, code: "RES", title: "Government/NGO" },
        { key: 6, code: null, title: "Trucking/Warehousiing" },
    ];

    created() {
    }

    onSubmitVerifyEmail(scope: any) {

    }

    linkBusiness() {
        if (this.isVerifyEmailToBusiness) {
            this.moudleName = 'welcomeToUnis';
        }
    }


    public onTellUsAboutSubmit(tagName: string) {

    }

    public onSubmit(tagName: string) {

    }
    public onInvalidSubmit(msg:any) {
        this.isSwitchWelcomeToUnis = false;
        this.isSwitchTellUsAboutYourBusiness = true;
        this.moudleName = 'tellUsAboutYourBusiness';
    }

    mounted() {
        let name, value, str = location.href, num = str.indexOf("?");
        str = str.substr(num + 1);
        let arr = str.split("&");
        let  parameter:any = {};
        for (let i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                if (name == 'email') value = unescape(value);
                parameter[name] = value;
            }
        }
        this.verifyEmail.email = parameter['email'];
        this.verifyEmail.code = parameter['code'];
        this.isSwitchWelcomeToUnis= true;
    }

    returnToSignIn() {

    }

}