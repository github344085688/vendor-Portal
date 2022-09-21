import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../layouts/login'
import Layouts from '../layouts'
import Invoices from '../layouts/invoices'
import InvoiceHistory from '../layouts/invoice-history'
import {filterRouterTopMap} from '../utils/utils'
declare interface SideNavList {
    groupName: string;
    childs?: Array<SideNavChilds>;
}
declare interface SideNavChilds {
    title: string;
    icon: any;
    path?: string,
    name?: string,
    component?: any
    childs?: Array<any>;
}

export const SideNavConfig: Array<SideNavList> = [
    {
        groupName: '',
        childs: [{
            title: 'Dashboard',
            name:'Dashboard',
            icon: require('../assets/img/tms2.svg'),
            childs: [],

        },]
    },
    {
        groupName: 'MAIN MENU', childs: [
        {
            title: 'TMS',
            name:'TMS',
            icon: require('../assets/img/tms2.svg'),
            childs: [{
                parentName:'TMS',
                path: 'TMS/invoices',
                name: 'Invoices',
                component: Invoices,
                title: 'Invoices'
            }, {
                parentName:'TMS',
                path: 'TMS/invoice-history',
                name: 'InvoiceHistory',
                component: InvoiceHistory,
                title: 'Invoice History'
            }],
        }
    ]
    },
    {
        groupName: 'MY BUSINESS', childs: [
        {
            title: 'Payments ',
            name:'Payments',
            icon: require('../assets/img/tms2.svg'),
            childs: [{
                parentName:'Payments',
                path: 'payments/business',
                name: 'Business',
                component: Invoices,
                title: 'Business'
            }, {
                parentName:'Payments',
                path: 'payments/invoice-history',
                name: 'businessHistory',
                component: InvoiceHistory,
                title: 'Business History'
            }],
        }, {
            title: 'Business Info  ',
            name:'BusinessInfo',
            icon: require('../assets/img/tms2.svg'),
        },
    ]
    },
    {
        groupName: 'GENERAL', childs: [
        {
            title: 'Message Center ',
            name:'MessageCenter',
            icon: require('../assets/img/tms2.svg'),
        }, {
            title: 'Settings',
            name:'Settings',
            icon: require('../assets/img/tms2.svg'),
        },
    ]
    },

];

const childsRouter = ()=>{
    let childRouters:Array<any> = [];
    filterRouterTopMap(SideNavConfig, childRouters, ['path','name','component']);
    return childRouters;
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: Layouts,
    redirect: {name: 'Invoices'},
    children:childsRouter()
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
