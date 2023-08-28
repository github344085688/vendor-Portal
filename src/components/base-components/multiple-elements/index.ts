import { Options } from 'vue-class-component';
import template from "./menu.vue";
import BaseVue from '@/utils/base-vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
@Options({
    mixins: [template],
    name: 'MultipleElements',
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
})
export default class MultipleElements extends BaseVue {

    public classNames(...classes:any) {
        return classes.filter(Boolean).join(' ')
    }
    public  resolveClass(active:any,disabled:any) {
        return this.classNames(
            'block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700',
            active && 'bg-gray-100 text-gray-900',
            disabled && 'cursor-not-allowed opacity-50'
        )
    }
}
