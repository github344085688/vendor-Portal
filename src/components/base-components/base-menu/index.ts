import { Options } from 'vue-class-component';
import template from "./menu.vue";
import BaseVue from '@/utils/base-vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
@Options({
    mixins: [template],
    name: 'BaseMenu',
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
    },
    props: {
        slots: {
            type: Number,
            default: 10,
        },
    }
})
export default class BaseMenu extends BaseVue {
  public  links: any = [
        { href: '/account-settings', label: 'Account settings' },
        { href: '/support', label: 'Support' },
        { href: '/license', label: 'License' },
        { href: '/sign-out', label: 'Sign out' },
    ]

}
