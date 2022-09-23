/**
 * Created by f on 2018/5/22.
 */
import { Options, Vue } from 'vue-class-component';
import WiseVue from "../../utils/base-vue";
import './popup-head.scss';
import template from "./popup-head.vue";
@Options({
    mixins: [template],
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
})
export default class PopupHead extends WiseVue {

    public show!: Boolean;
    public msgOueue: any = [];
    public type:any = 0;
    public onClose() {
        this.msgOueue.shift();
        this.type = 0;
    }
}



