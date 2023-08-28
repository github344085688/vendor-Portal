import { Options } from 'vue-class-component';
import template from "./router-views.vue";
import BaseVue from '@/utils/base-vue';
import SwitchBox from '@/components/base-components/switch'
import RadioGroup from '@/components/base-components/radio-group'
import MultipleElements from '@/components/base-components/multiple-elements'
import MenuBox from '@/components/base-components/base-menu'
import SelectMenus from '@/components/base-components/select-menus'
import sidebarNavigation from '../../sidebar-navigation'
import SimulationWindow from '@/components/simulation-window'
@Options({
    mixins: [template],
    name: 'RouterViews',
    components: {
        SwitchBox,
        RadioGroup,
        MultipleElements,
        MenuBox,
        SelectMenus,
        sidebarNavigation,
        SimulationWindow
    },
})
export default class RouterViews extends BaseVue {
    public isShowShadows: boolean =true;
    public mounted(){
        console.log(this.getRouter());
    }
    // public menuItems:any =  [
    //     { id: 1, label: 'Home', path: '/',icon: require("@/assets/img/nav-icons/2.svg"),  },
    //     { id: 2, label: 'Events', path: '/events',icon: require("@/assets/img/nav-icons/1.svg") },
    // ];
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

    public menus:any =   [
        {
            id: 1,
            title: 'Menu 1',
            isOpen: false,
            sub: [
                {
                    id: 11,
                    title: 'Submenu 1',
                    isOpen: false,
                    sub: [
                        {
                            id: 111,
                            title: 'Item 1'
                        },
                        {
                            id: 112,
                            title: 'Item 2'
                        }
                    ]
                },
                {
                    id: 12,
                    title: 'Submenu 2',
                    isOpen: false,
                    sub: [
                        {
                            id: 121,
                            title: 'Item 1'
                        },
                        {
                            id: 122,
                            title: 'Item 2'
                        }
                    ]
                }
            ]
        },
{
    id: 2,
    title: 'Menu 2',
    isOpen: false,
    sub: [
        {
            id: 21,
            title: 'Submenu 1',
            isOpen: false,
            sub: [
                {
                    id: 211,
                    title: 'Item 1'
                },
                {
                    id: 212,
                    title: 'Item 2'
                }
            ]
        }
    ]
}
];
    public routeChange(routerName: any){
        if(routerName=='ExistingCustomerSignUp'||routerName=='VerifyEmailTips') this.isShowShadows = false;
        else this.isShowShadows = true;
    }
    public toggleSubmenu(index: number) {
        this.sidebarItems[index].submenuOpen = !this.sidebarItems[index].submenuOpen;
    }

    public menuItems:any =  [
        {
            id: 1,
            label: 'Home',
            link: '/',
            icon: 'fas fa-home',
            active: true
        },
        {
            id: 2,
            label: 'Dashboard',
            link: '/dashboard',
            icon: 'fas fa-chart-line',
            active: false,
            subMenu: [
                {
                    id: 21,
                    label: 'Submenu 1',
                    link: '/dashboard/submenu1',
                    icon: 'fas fa-cogs',
                    active: false
                },
                {
                    id: 22,
                    label: 'Submenu 2',
                    link: '/dashboard/submenu2',
                    icon: 'fas fa-users',
                    active: false,
                    subMenu: [
                        {
                            id: 221,
                            label: 'Subsubmenu 1',
                            link: '/dashboard/submenu2/subsubmenu1',
                            icon: 'fas fa-file',
                            active: false
                        },
                        {
                            id: 222,
                            label: 'Subsubmenu 2',
                            link: '/dashboard/submenu2/subsubmenu2',
                            icon: 'fas fa-image',
                            active: false
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            label: 'Settings',
            link: '/settings',
            icon: 'fas fa-cog',
            active: false
        }
    ];

    public toggleSubMenu(item: any) {
        item.active = !item.active;
    }
    public toggle(id:any) {
        const toggleRecursively = (list:any) => {
            list.forEach((i:any) => {
                if (i.id === id) {
                    i.isOpen = !i.isOpen;
                }
                if (i.sub) {
                    toggleRecursively(i.sub);
                }
            });
        };
        toggleRecursively(this.menus);
    }
}
