/**
 * Created by f on 2018/5/22.
 */
import { Options, Vue } from 'vue-class-component';
import './popup-reconfirm.scss';
import template from "./popup-reconfirm.vue";
@Options({
    mixins: [template],
    name: 'PopupReconfirm',

})
export default class PopupReconfirm extends Vue {

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


