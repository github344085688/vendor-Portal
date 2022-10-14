import { Options } from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
import BaseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name:'Service',
    components: {
    }
})
export default class Service extends BaseVue {
    public isSideSpread: boolean = true;
    public sideSpread: any = {};

    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;
        this.sideSpread.bb = isSpread;
        this.sideSpread.aaa = 'bbb';
    }

}
