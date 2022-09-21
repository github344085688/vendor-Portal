import { Options } from 'vue-class-component';
import template from "./side-nav.vue";
import './side-nav.scss';
import baseVue from '../../utils/base-vue';
import { onBeforeRouteUpdate, onBeforeRouteLeave  } from 'vue-router'
import {SideNavConfig} from '@/router';
import {forEach, find} from 'lodash-es';
import {filterRouterTopMap} from '../../utils/utils'
@Options({
    mixins: [template],
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class SideNav extends baseVue {
    itemChildsLink: string = 'Invoices';
    idShowCode: boolean = false;
    isFold:boolean = false;
    isLevelSmall:boolean = false;
    isFoldDetails:boolean = false;
    navName: string =  'TMS';
    isShowSidebar: boolean = false;
    navLink:Array<any> =  [ ];

    mounted() {
        this.navLink = SideNavConfig;
        const pathname = window.location.pathname.slice(1);
        let routerConfigs: Array<any> = [];
        filterRouterTopMap(SideNavConfig, routerConfigs, ['path', 'name', 'parentName']);
        let findRouter = find(routerConfigs, {path: pathname});
        if (findRouter && findRouter.name) {
            this.itemChildsLink = findRouter.name;
            this.navName = findRouter.parentName;
        }
        /* onBeforeRouteUpdate(async (to, from) => {
         console.log('to', to);
         console.log('from', from);
         });
         onBeforeRouteLeave((to, from) => {
         console.log('to', to);
         console.log('from', from);
         this.destroyWatch()
         })*/


    }
    destroyWatch () {
       /* watch(() => route.query, (newValue, oldValue) => {
            console.log('destroyWatch')
            data.searchInfo = {...data.searchInfo, ...newValue};
            data.timeArr = [Number(data.searchInfo.start_time)*1000,Number(data.searchInfo.end_time)*1000]
            getList()
        }, {immediate: true, deep: true})*/
    }

    showCode () {
        this.idShowCode = !this.idShowCode;
    }

    togoaside (isfold: any) {
        if (this.isFoldDetails) this.isLevelSmall = true;
        this.isFold = !isfold;
    }

    foldDetails (isFoldDetails: any, item: any) {
        console.log(item);
        if (this.navName == item.name) this.navName = '';
        else this.navName = item.name;
        if(item.path && item.name ) this.setRouter({ name: item.name, params: { userId: '123' }})
    }

    foldChildetails ( item: any) {
        this.itemChildsLink = item.name;
        if(item.path && item.name ) this.setRouter({ name: item.name, params: { userId: '123' }})
    }

    logOut ( ) {
        this.setRouter({ name: 'home'})
    }

}