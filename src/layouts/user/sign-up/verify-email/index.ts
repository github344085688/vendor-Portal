import { Options } from 'vue-class-component';
import template from "./verify-email.vue";
import BaseVue from '@/utils/base-vue';
import { Field, Form } from 'vee-validate';
@Options({
    mixins: [template],
    name:'VerifyEmail',
    components: {
        Field,
        Form
    },
})
export default class VerifyEmail extends BaseVue {
    public isSwitchWelcomeToUnis:boolean = false;
    public isSwitchTellUsAboutYourBusiness:boolean = false;
    public isSwitchComplete:boolean = false;

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

    public verifyEmail: any = {};
    public businessVerify: any = {};
    public moudleName: string = "welcomeToUnis";
    public moudleState: string = "operation";
    public isshowPassword: boolean = true;
    public isVerifyEmailToBusiness: boolean = false;
    public businessTypes: Array<any> = [
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
        if (this.isSwitchTellUsAboutYourBusiness) {
            this.isSwitchWelcomeToUnis =  true;
            this.isSwitchTellUsAboutYourBusiness = false;
            this.isSwitchComplete = false;

        }
    }


    public onTellUsAboutSubmit(tagName: string) {
        alert('ss')

    }

    public onSubmit(tagName: string) {

    }
    public onBusinessSubmit(msg:any) {
        this.isSwitchWelcomeToUnis = false;
        this.isSwitchTellUsAboutYourBusiness = false;
        this.isSwitchComplete = true;
    }

    public onInvalidSubmit(msg:any) {
        this.isSwitchWelcomeToUnis = false;
        this.isSwitchComplete = false;
        this.isSwitchTellUsAboutYourBusiness = true;
        this.moudleName = 'tellUsAboutYourBusiness';
    }

    activated() {
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
        this.isSwitchTellUsAboutYourBusiness = false;
        this.isSwitchComplete= false;
        this.isSwitchWelcomeToUnis = true;
    }

    returnToSignIn() {
        this.setRouter({ name: 'SignIn'})

    }

}