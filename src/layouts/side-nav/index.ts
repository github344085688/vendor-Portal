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
    inject: ['changeView']
})
export default class SideNav extends BaseVue {
    public changeView!:any;

    public itemChildsLink: string = 'Invoices';
    public isShowSidebar: boolean = false;
    public idShowCode: boolean = false;
    public isFold: boolean = false;
    public isLevelSmall: boolean = false;
    public isFoldDetails: boolean = false;
    public navName: string = 'TMS';
    public navLink: Array<any> = [];
    public countSideSpread(value: number, oldValue: number): void {
    }
    public mounted(): void {
        this.navLink = SideNavConfig;
        const routers: any= this.getRouter();
        let routerConfigs: Array<any> = [];
        filterRouterTopMap(SideNavConfig, routerConfigs, ['path', 'name', 'parentName'] );
        let findRouter = find(routerConfigs, {name: routers.query.name});
        if (findRouter && findRouter.name) {
            this.itemChildsLink = findRouter.name;
            if(findRouter.parentName) this.navName = findRouter.parentName;
            else this.navName = findRouter.name;
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

    public togoaside(isfold: any): void {
        if (this.isFoldDetails) this.isLevelSmall = true;
        this.isFold = !isfold;
        this.$emit("togoaside", isfold);
    }

    public foldDetails(isFoldDetails: any, item: any): void {
        if(this.navName==item.name){
            this.navName = '';

            return;
        }
        else this.navName = item.name;
        if (item.path && item.name) this.setRouter({name: item.name})
    }

    public foldChildetails(item: any): void {
        this.itemChildsLink = item.name;
        if (item.path && item.name) this.setRouter({name: item.name});
    }

    public logOut(): void {
        this.setRouter({name: 'SignIn'})
    }



}
