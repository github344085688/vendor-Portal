import { Options } from 'vue-class-component';
import template from "./sign-up.vue";
import baseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    components: {
    },

})
export default class SignUp extends baseVue {
    public setTime: any;
    public isShowPageName: boolean =false;

    public mounted():void{
    this.isShowPageName = true;
    }

}


