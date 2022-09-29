import { Options } from 'vue-class-component';
import template from "../login/login.vue";
import '../login/login.scss';
import baseVue from '../../utils/base-vue';
import useVuelidate from '@vuelidate/core';
import { getCurrentInstance } from 'vue'
import { Watch } from "vue-property-decorator";
import LoginServers from "../../services/loginServers";
import { required, minLength, maxLength, email,sameAs } from '@vuelidate/validators'

@Options({
    validations: {
        formData: {
            firstName: {
                required,
                email,
            },
            passWord: {
                required,
                minLength: minLength(3),
            }
        }
    },
    mixins: [template],
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class Login extends baseVue {


    isLoding:boolean = true;
    formData: object = {
        firstName: "",
        passWord: ""
    };    /*  @Watch("message", { immediate: true, deep: true })
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     onChangeValue(newVal: number, oldVal: number) {
     // todo...
     // console.log(newVal);
     if (newVal > 110) {
     this.store.commit("testModule/updateTestData", newVal);
     // console.log(this.store.state.testModule.test);
     }
     }*/
    isshowPassword = true;
    showPassword():void{
        this.isshowPassword = ! this.isshowPassword;
    }
    login = '';
    v$: any = useVuelidate();

    // 生命周期
    mounted(){

    }
    /*    submitForm(){
     console.log(this.v$);
     this.v$.$validate();
     if(!this.v$.$error){
     alert('Form successfully submitted')
     }else{
     alert('Form failed validation')
     }

     }*/
    signIn(){
        this.v$.$validate();
        console.log(this.v$);
        /* if(!this.v$.$error){
         alert('Form successfully submitted')
         }else{
         alert('Form failed validation')
         }*/
        // this.$success('success');
        /* this.$reconfirm({
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
         });*/

        /*
         this.$normals('normal');
         this.$errors('error');
         this.$warnings('warning');*/
        // ;
        // this.setRouter({ name: 'Layouts'})

    }



    locationHrefSpId(demo: any, url: any, name: any) {
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


    getRegisterLoging(name: string) {
        const host = window.location.hostname;
        if (host === "localhost" || host === "shipdev.unisco.com" || host === "shipstage.unisco.com") {
            this.locationHrefSpId(0, 'https://stagesso.unisco.com/samlsso?spEntityID=', name);
        }
    }

}
