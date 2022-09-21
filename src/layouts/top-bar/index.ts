import { Options } from 'vue-class-component';
import template from "./top-bar.vue";
import './top-bar.scss';
import baseVue from '../../utils/base-vue';
import {forEach} from 'lodash-es';
@Options({
    mixins: [template],
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class topBar extends baseVue {
    isInSearchBox: boolean = false;
    isShowNrchBox: boolean = false;
    isShowNotif: boolean = false;
    isShowUser: boolean = false;
    isShowSidebar: boolean = false;

    mounted(){

    }

    handleFocus (el:any) {
        this.isInSearchBox = true;

    }
    handleBlur (el:any) {
        this.isInSearchBox = false;

    }
    onShowNotif (isfold:any) {
        this.isShowNotif = true;
        this.isShowUser = false;
    }
    onShowUser (isFoldDetails:any, item:any) {
        this.isShowNotif = false;
        this.isShowUser = true;

    }

}