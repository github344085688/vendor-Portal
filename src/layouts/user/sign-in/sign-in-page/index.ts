import { Options } from 'vue-class-component';
import template from "./sign-in-page.vue";
import baseVue from '@/utils/base-vue';
import LoginServers from "@/services/loginServers";
import { Field, Form, useField } from 'vee-validate';
@Options({
    mixins: [template],
    name: 'SignInPage',
    components: {
        Field,
        Form,
        useField
    }
})
export default class SignInPage extends baseVue {
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

    public schema = {
        firstName: (value: any) => {
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
                else return 'At least 8 characters,Contain a number, Uppercase letter ,Lowercase letter';
            }
            return 'Incorrect password';
        },
    }

    onSubmit(values:any) {
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
        console.log(values);
        // alert(JSON.stringify(values, null, 2));
    }
    onInvalidSubmit(msg:any) {
        this.setRouter({ name: 'Main'})
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
        this.validate = msg;
        // console.log(this.validate.errors);
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
