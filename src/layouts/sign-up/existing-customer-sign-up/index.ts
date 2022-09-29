import { Options } from 'vue-class-component';
import template from "./existing-customer-sign-up.vue";
import baseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
import { Field, Form } from 'vee-validate';
import { forEach } from 'lodash-es';
@Options({
    mixins: [template],
    components: {
        Field,
        Form,
    },
    watch: {
        roleRelated: {handler: 'watchRoleRelated', immediate: true ,deep: true},
    },
})
export default class ExistingCustomerSignUp extends baseVue {
    public roleRelated: any = {};



    public showPageName!:string;
    public isLoding:boolean = false;
    public isShowGroup:boolean = false;
    public formData: object = {
        firstName: "",
        passWord: ""
    };
    public validate: any = {
        errors: {}
    };

    public watchRoleRelated(value: number, oldValue: number): void {


    }



    public schema = {
        firstName: (value: any) => {
            if (value && value.length) {
                if(value.length < 6) return 'User name is too simple';
                else return true;
            }
            return 'Incorrect email';
        },
        lastname: (value: any) => {
            if (value && value.length) {
                if(value.length < 6) return 'User name is too simple';
                else return true;
            }
            return 'Incorrect email';
        },
        email: (value: any) => {
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
                else return 'At least 8 character, Contain a number ,Uppercase letter,Uppercase letter';
            }
            return 'Incorrect password';
        },
        password_confirmation: (value: any) => {
            if (value && value.length) {
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                if(regex.test(value)) return true;
                else return 'At least 8 character, Contain a number ,Uppercase letter,Uppercase letter';
            }
            return 'Incorrect password';
        },
    }

    onSubmit(values:any) {

    }
    onInvalidSubmit(msg:any) {
        this.setRouter({ name: 'VerifyEmailTips'})

    }

    public checkPageName(name:string ): void {
        this.setRouter({ name: 'EnterEmail'})

    }

    public isshowPassword = true;
    public showPassword():void{
        this.isshowPassword = ! this.isshowPassword;
    }

    login = '';


    // 生命周期
    mounted(){
        this.isShowGroup = true;
    }
    beforeUnmount(){
        this.isShowGroup = false;
    }
    onSignInOrUps(ss:any){
        this.setRouter({ name: 'Main'});
    }
    public signIn(){


        this.$reconfirm({
            title: 'Remove Small Parcel',
            content: 'Are You Sure You Want To remove this small parcel? ',
            confirm: 'Yes',
            cancel: 'No',
        })
            .then((ord: any) => {
                this.isLoding = false;
                console.log(ord);
            })
            .catch((err: any) => {
                console.log(err);
            });
        /*
         this.$normals('normal');
         this.$errors('error');
         this.$warnings('warning');*/
        // ;
        // this.setRouter({ name: 'Layouts'})

    }



    private locationHrefSpId(demo: any, url: any, name: any) {
        LoginServers.getLocationHrefSpId(demo).subscribe(
            (res: any) => {
                if (res) {
                    if (name == "google") {
                        if (res.data) window.location.href = `${url}${res.data.google_sp_entity_id}`;
                    }
                    if (name == "facebook") {
                        if (res.data) window.location.href = `${url}${res.data.facebook_sp_entity_id}`;
                    }
                }
            },
            err => {
                if (err.response.data && err.response.data.message) {
                    if (err.response.data.message.company_id) {
                        this.$errors(err.response.data.message.company_id[0]);
                        return;
                    }
                    this.$errors(err.response.data.message);
                }
            }
        )

    }


    public getRegisterLoging(name: string) {
        const host = window.location.hostname;
        if (host === "localhost" || host === "shipdev.unisco.com" || host === "shipstage.unisco.com") {
            this.locationHrefSpId(0, 'https://stagesso.unisco.com/samlsso?spEntityID=', name);
        }
    }

}
