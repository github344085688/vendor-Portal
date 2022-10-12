import { Options } from 'vue-class-component';
import BaseVue from "../../utils/base-vue";
import template from "./status-bg-colors.vue";
@Options({
    mixins: [template],
    name:'StatusBgColors',
    props: {
        status: {
            type: String,
            default: '',
        },
        form: {
            type: String,
            default: '',
        },
    },
})
export default class StatusBgColors extends BaseVue {
    public status!: string;
    public form!: string;

}
