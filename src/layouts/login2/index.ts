import { Options } from 'vue-class-component';
import template from "./login2.vue";
import baseVue from '@/utils/base-vue';
import { Field, Form, ErrorMessage, useField } from 'vee-validate';
import * as Yup from 'yup';
import TextInput from "./components";


@Options({
    mixins: [template],
    components: {
        Form,
        Field,
        ErrorMessage,
        TextInput
    }
})
export default class Login2 extends baseVue {

    schema = Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(8),
    });
    onSubmit(values:any) {
        console.log(values);
        // alert(JSON.stringify(values, null, 2));
    }
    onInvalidSubmit(msg:any) {
        console.log(msg.values); // current form values
        console.log(msg.errors); // a map of field names and their first error message
        console.log(msg.results); // a detailed map of field names and their validation results
    }
}
