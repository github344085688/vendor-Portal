import { Options } from 'vue-class-component';
import template from "./sign-in.vue";
import baseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name: 'SignIn',
})
export default class SignIn extends baseVue {
    public setTime: any;
    public isShowPageName: boolean =false;

    public mounted():void{
        this.isShowPageName = true;
    }

}
