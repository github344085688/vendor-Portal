/**
 * Created by f on 2022/9/28.
 */
import Invoices from '@/layouts/invoices'
import InvoicesList from '@/layouts/invoices/invoices-list'
import ImportExport from '@/layouts/invoices/import-export'
import Service from '@/layouts/service'
import Export from '@/layouts/invoices/export'
import InvoiceHistory from '@/layouts/invoice-history'
declare interface SideNavList {
    groupName: string;
    children?: Array<SideNavChildren>;
}
declare interface SideNavChildren {
    title: string;
    icon: any;
    path?: string,
    name?: string,
    component?: any;
    children?: Array<any>;
}
const SideNavConfig: Array<SideNavList> = [
    {
        groupName: '',
        children: [{
            title: 'Dashboard',
            name: 'Dashboard',
            icon: require('../assets/img/tms2.svg'),
            children: [],

        },]
    },
    {
        groupName: 'MAIN MENU',
        children: [
            {
                title: 'TMS',
                name: 'TMS',
                icon: require('../assets/img/tms2.svg'),
                children: [{
                    parentName: 'TMS',
                    path: 'TMS/invoices',
                    name: 'Invoices',
                    component: Invoices,
                    title: 'Invoices',
                    redirect: {name: 'Service'},
                    children: [{
                        path: 'invoices-list',
                        name: 'InvoicesList',
                        component: InvoicesList,
                    }, {
                        path: 'import-export',
                        name: 'ImportExport',
                        component: ImportExport,
                    }, {
                        path: 'export',
                        name: 'Export',
                        component: Export,
                    },]
                }, {
                    parentName: 'TMS',
                    path: 'TMS/invoice-history',
                    name: 'InvoiceHistory',
                    component: InvoiceHistory,
                    title: 'Invoice History'
                }],
            },
            {
                title: 'Service',
                name: 'Service',
                path: 'service',
                component: Service,
                icon: require('../assets/img/tms2.svg'),

            }
        ]
    },
    {
        groupName: 'MY BUSINESS', children: [
        {
            title: 'Payments ',
            name: 'Payments',
            icon: require('../assets/img/tms2.svg'),
            children: [{
                parentName: 'Payments',
                path: 'payments/business',
                name: 'Business',
                component: Invoices,
                title: 'Business'
            }, {
                parentName: 'Payments',
                path: 'payments/invoice-history',
                name: 'businessHistory',
                component: InvoiceHistory,
                title: 'Business History'
            }],
        }, {
            title: 'Business Info  ',
            name: 'BusinessInfo',
            icon: require('../assets/img/tms2.svg'),
        },
    ]
    },
    {
        groupName: 'GENERAL', children: [
        {
            title: 'Message Center ',
            name: 'MessageCenter',
            icon: require('../assets/img/tms2.svg'),
        }, {
            title: 'Settings',
            name: 'Settings',
            icon: require('../assets/img/tms2.svg'),
        },
    ]
    },

];

export default SideNavConfig;