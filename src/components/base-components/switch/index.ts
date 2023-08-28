import { Options } from 'vue-class-component';
import template from "./switch.vue";
import BaseVue from '@/utils/base-vue';
import { SwitchGroup, Switch, SwitchLabel } from '@headlessui/vue'
@Options({
    mixins: [template],
    name: 'SwitchBox',
    components: {
        SwitchGroup,
        Switch,
        SwitchLabel,
    },
})
export default class SwitchBox extends BaseVue {
    public state: boolean =false;
    public classNames(...classes:any) {
        return classes.filter(Boolean).join(' ')
    }
    public  resolveSwitchClass( checked:any ) {
        return this.classNames(
            'focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
            checked ? 'bg-indigo-600 hover:bg-indigo-800' : 'bg-gray-200 hover:bg-gray-400'
        )
    }
}
