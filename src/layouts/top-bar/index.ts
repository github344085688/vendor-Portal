import { Options } from 'vue-class-component';
import template from "./top-bar.vue";
import './top-bar.scss';
import baseVue from '../../utils/base-vue';
@Options({
    mixins: [template],
    name:'topBar',
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class topBar extends baseVue {
    public isInSearchBox: boolean = false;
    public isShowNotif: boolean = false;
    public isShowUser: boolean = false;


    public mounted() {

    }

    public handleFocus(el: any) {
        this.isInSearchBox = true;

    }

    public handleBlur(el: any) {
        this.isInSearchBox = false;

    }

    public  onShowNotif(isfold: any) {
        this.isShowNotif = true;
        this.isShowUser = false;
    }

    public onShowUser(isFoldDetails: any, item: any) {
        this.isShowNotif = false;
        this.isShowUser = true;

    }

}