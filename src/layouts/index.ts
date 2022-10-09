import { Options } from 'vue-class-component';
import template from "./layout.vue";
import './layout.scss';
import baseVue from '@/utils/base-vue';
import SideNav from './side-nav'
import TopBar from './top-bar'
@Options({
    mixins: [template],
    name:'Layouts',
    components: {
        SideNav,
        TopBar
    }
})
export default class Layouts extends baseVue {
    public isSideSpread: boolean = true;
    public sideSpread: any = {};

    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;
        this.sideSpread.bb = isSpread;
        this.sideSpread.aaa = 'bbb';
    }

}
