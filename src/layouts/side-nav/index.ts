import { Options } from 'vue-class-component';
import template from "./side-nav.vue";
import './side-nav.scss';
import BaseVue from '@/utils/base-vue';
import SideNavConfig from '@/router/main-routers';
import {find,forEach} from 'lodash-es';
import {filterRouterTopMap} from '@/utils/utils'
@Options({
    mixins: [template],
    name: 'SideNav',
    components: {
    },
    props: {
        sideSpread:{}
    },
    watch: {
        "sideSpread.aaa": { handler: 'countSideSpread', immediate: true ,deep: true},
    },
})
export default class SideNav extends BaseVue {

    public itemChildsLink: string = 'Invoices';
    public isShowSidebar: boolean = false;
    public idShowCode: boolean = false;
    public isFold: boolean = false;
    public isLevelSmall: boolean = false;
    public isFoldDetails: boolean = false;
    public navName: string = 'TMS';
    public navLink: Array<any> = [];
    public countSideSpread(value: number, oldValue: number): void {
        // console.log('ss',value);
    }
    public mounted() {
        this.navLink = SideNavConfig;
        const pathname = window.location.pathname.slice(1);
        let routerConfigs: Array<any> = [];
        filterRouterTopMap(SideNavConfig, routerConfigs, ['path', 'name', 'parentName'] );
        let findRouter = find(routerConfigs, {path: pathname});
        if (findRouter && findRouter.name) {
            this.itemChildsLink = findRouter.name;
            this.navName = findRouter.parentName;
        }

    }

    public childrenHeight(childrens: any) {
        let length: number = 0;
        forEach(childrens, children => {
            if (children.title) length++;
        });
        return (48 * length)+'px';
    }

    public setItemChildren(childrens: any) {
        let itemChildren: Array<any> = [];
        forEach(childrens, children => {
            if (children.title) itemChildren.push(children);
        });
        return itemChildren;
    }

    public showCode() {
        this.idShowCode = !this.idShowCode;
    }

    public togoaside(isfold: any) {
        if (this.isFoldDetails) this.isLevelSmall = true;
        this.isFold = !isfold;
        this.$emit("togoaside", isfold)
    }

    public foldDetails(isFoldDetails: any, item: any) {
        if (this.navName == item.name) this.navName = '';
        else this.navName = item.name;
        if (item.path && item.name) this.setRouter({name: item.name})
    }

    public foldChildetails(item: any) {
        this.itemChildsLink = item.name;
        if (item.path && item.name) this.setRouter({name: item.name})
    }

    public logOut() {
        this.setRouter({name: 'SignIn'})
    }

}