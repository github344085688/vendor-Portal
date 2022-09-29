import { Options } from 'vue-class-component';
import template from "./TextInput.vue";
import baseVue from '@/utils/base-vue';
import { Field, Form, ErrorMessage, useField } from 'vee-validate';
import * as yup from 'yup';

@Options({
    mixins: [template],
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        successMessage: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
})
export default class TextInput extends baseVue {
    type!: string ;
    value!: string ;
    name!: string ;
    label!: string ;
    placeholder!: String ;
    successMessage!: string ;
    useFielddata:any= useField(this.name, undefined, {
        initialValue: this.value,
    });
    errorMessage:any = this.useFielddata.errorMessage;
    handleBlur:any = this.useFielddata.handleBlur;
    handleChange:any = this.useFielddata.handleChange;
    meta:any = this.useFielddata.meta;

}
