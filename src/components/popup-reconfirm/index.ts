/**
 * Created by f on 2018/5/22.
 */
import { Options } from 'vue-class-component';
import WiseVue from "../../utils/base-vue";
import './popup-reconfirm.scss';
import template from "./popup-reconfirm.vue";
@Options({
    mixins: [template],
    name: 'PopupReconfirm',

})
export default class PopupReconfirm extends WiseVue {

    public msgOueue: any = [];
    public options: any = { };

    public  onClose() {
        this.options.show = false;
    }

    public onDetermine() {
        this.options.show = false;
    }

    public onCancel() {
        this.options.show = false;
    }
}


