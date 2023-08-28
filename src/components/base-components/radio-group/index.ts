import { Options } from 'vue-class-component';
import template from "./radio-group.vue";
import BaseVue from '@/utils/base-vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
@Options({
    mixins: [template],
    name: 'RadioGroupBox',
    components: {
        RadioGroup,
        RadioGroupOption,
    },
})
export default class RadioGroupBox extends BaseVue {

    public active :any='';
    public access:Array<any>=[
        {
            id: 'access-1',
            name: 'Public access',
            description: 'This project would be available to anyone who has the link',
        },
        {
            id: 'access-2',
            name: 'Private to Project Members',
            description: 'Only members of this project would be able to access',
        },
        {
            id: 'access-3',
            name: 'Private to you',
            description: 'You are the only one able to access this project',
        },
    ];
}
