import { Options } from 'vue-class-component';
import template from "./sidebar-navigation.vue";
import BaseVue from '@/utils/base-vue';
import './sidebar-navigation.scss';
interface MouseEventWithOffset extends MouseEvent {
    offsetX: number;
    offsetY: number;
}
@Options({
    mixins: [template],
    name: 'RouterViews',
    components: {
    },
})
export default class SidebarNavigation extends BaseVue {
    public sidebarItems:any =  [
        {
            label: 'Dashboard',
            submenu: null,
            submenuOpen: false,
        },
        {
            label: 'Projects',
            submenu: [
                { label: 'Project 1', link: '#' },
                { label: 'Project 2', link: '#' },
                { label: 'Project 3', link: '#' },
            ],
            submenuOpen: false,
        },
        {
            label: 'Tasks',
            submenu: [
                { label: 'Task 1', link: '#' },
                { label: 'Task 2', link: '#' },
                { label: 'Task 3', link: '#' },
            ],
            submenuOpen: false,
        },
        {
            label: 'Messages',
            submenu: null,
            submenuOpen: false,
        },
        {
            label: 'Settings',
            submenu: [
                { label: 'General', link: '#' },
                { label: 'Account', link: '#' },
                { label: 'Privacy', link: '#' },
            ],
            submenuOpen: false,
        },
    ];

    public toggleSubmenu(index: number) {
        this.sidebarItems[index].submenuOpen = !this.sidebarItems[index].submenuOpen;
    }



}
