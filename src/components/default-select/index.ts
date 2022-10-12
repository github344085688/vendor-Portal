import { Options } from 'vue-class-component';
import BaseVue from "@/utils/base-vue";
import template from "./default-select.vue";
import { ref } from "vue";
@Options({
    mixins: [template],
    mame:'DefaultSelect',
    props: {
        name: {
            type: String,
            default: '',
        },
        selectdata: {
            type: Object,
            default: {},
        },
        placeholder: {
            type: String,
            default: '',
        },
        filterKey: {
            type: String,
            default: '',
        },
        syncKey: {
            type: String,
            default: '',
        },
        returnStructure: {
            type: String,
            default: '',
        },
        addClass: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [Object,String,Number],
            default: '',
        },
        addMes: {
            type: Object,
            default: {},
        },
        allowClear: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        error: '',
        multiple: {
            type: String,
            default: '',
        }
    },
    watch: {
        error: {handler : 'watchError'},
        selectdata: {handler : 'watchSelectdata'},
        modelValue: {handler : 'watchModelValue'},
    }
})
export default class DefaultSelect extends BaseVue {

    public name!: string;
    public selectdata!: any;
    public placeholder!: string;
    public modelValue!: any;
    public filterKey!: string;
    public syncKey!: string;
    public returnStructure!: string;
    public allowClear!: boolean;
    public error!: any;

    public priSelectdata: Array<any> = [];
    public transitionValue: any = '';
    public errorMsg: any = '';
    public defaultSelect: any = '';
    public isError: boolean = false;

    public filtersName(item: any){
        if (item && item[this.filterKey]) return item[this.filterKey];
        else return item;

    }

    public watchError(val: any, oldVal: any) {
    }

    public  watchSelectdata(val: any, oldVal: any) {
        if (val) {
            this.priSelectdata = val;
        }
        if (this.filterKey && val && val.length > 0) {
            this.assignmentTransitionValue(this.modelValue);
        }
    }

    public  watchModelValue(val: any, oldVal: any) {
        console.log('watchValue',val);
        if (!val) {
            this.transitionValue = '';
        }
        if (this.filterKey && this.selectdata && this.selectdata.length > 0) {
            this.assignmentTransitionValue(val);
        } else {
            this.transitionValue = val;
        }

    }

    private assignmentTransitionValue(value: any) {
        let keyByPriSelectdatas:any = {};
        this.selectdata.forEach((data: any) => {
            keyByPriSelectdatas[this.syncKey] = data;
        });
        if (keyByPriSelectdatas[value]) this.transitionValue = keyByPriSelectdatas[value][this.filterKey];
    }

    public  mounted() {
        this.defaultSelect = ref<any>(null);
        if (this.modelValue && typeof (this.modelValue) == 'object') this.transitionValue = this.modelValue[this.filterKey];
        else if (this.filterKey && this.selectdata && this.selectdata.length > 0) {
            this.assignmentTransitionValue(this.modelValue);
        } else {
            this.transitionValue = this.modelValue;
        }
        if (this.selectdata) this.priSelectdata = this.selectdata;

    }



    public handleFocus() {
        this.defaultSelect.focus();
    }

    public onItemSelect(item: any, el: any) {
        this.defaultSelect.blur();
        if (this.returnStructure === 'obj') {
            this.transitionValue = item[this.filterKey];
            this.$emit('update:modelValue', item);
            this.$emit('emitChoose', item);
            return;
        }
        if (item[this.filterKey]) this.transitionValue = item[this.filterKey];
        else this.transitionValue = item;
        if (item[this.syncKey]) this.$emit('update:modelValue', item[this.syncKey]);
        else if (item) this.$emit('update:modelValue', item);
        this.$emit('emitChoose', item);
    }

    public onAllowClear() {
        this.transitionValue = null;
        this.$emit('update:modelValue', null);
    }


}
