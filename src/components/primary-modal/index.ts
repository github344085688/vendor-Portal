import {Options} from 'vue-class-component';
import BaseVue from "../../utils/base-vue";
import './primary-modal.scss';
import template from "./primary-modal.vue";
@Options({
    mixins: [template],
    name: 'PrimaryModal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        width: {
            type: Number,
            default: 764,
        },
        height: '',
        cancel: {
            type: String,
            default: '',
        },
        upload: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        isShowClose: {
            type: Boolean,
            default: true,
        }

    },
    watch: {
        show: {handler: 'watchShow'},
    },
})
export default class PrimaryModal extends BaseVue {
    public show !: Boolean;
    public isShowMoudal: boolean = false;
    public isShowGroup: boolean = false;
    public setTime: any;

    public watchShow(value: boolean, oldValue: boolean): void {
        if (value) {
            this.isShowMoudal = value;
            this.setTime = setTimeout(() => {
                this.isShowGroup = value;
            }, 100);
        } else {
            this.isShowGroup = value;
            this.setTime = setTimeout(() => {
                this.isShowMoudal = value;
            }, 400);
        }
    }

    public onClose() {
        this.isShowGroup = false;
        this.$emit('cancel', false);
        this.setTime = setTimeout(() => {
            this.isShowMoudal = false;
            this.setTime = null;
        }, 500);
    }

    public onCancel() {
        this.isShowGroup = false;
        this.$emit('cancel', false);
        this.$emit('emitUpload', false);
        this.setTime = setTimeout(() => {
            this.isShowMoudal = false;
            this.setTime = null;
        }, 500);
    }

    public onUpload() {
        this.isShowGroup = false;
        this.$emit('cancel', false);
        this.$emit('emitUpload', false);
        this.setTime = setTimeout(() => {
            this.isShowMoudal = false;
            this.setTime = null;
        }, 500);
    }
}


