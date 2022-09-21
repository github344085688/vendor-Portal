import { Options } from 'vue-class-component';
import template from "./layout.vue";
import './layout.scss';
import baseVue from '@/utils/base-vue';
import SideNav from './side-nav'
import TopBar from './top-bar'
@Options({
    mixins: [template],
    components: {
        SideNav,
        TopBar
    }
})
export default class Layouts extends baseVue {

}
