import { Options } from "vue-class-component";
import template from "./side-nav.vue";
import "./side-nav.scss";
import BaseVue from "@/utils/base-vue";
import SideNavConfig from "@/router/main-routers";
import { find, forEach } from "lodash-es";
import { filterRouterTopMap } from "@/utils/utils";
import { ref } from "vue";

@Options({
  mixins: [template],
  name: "SideNav",
  components: {},
  props: {
    sideSpread: {},
  },
  watch: {
    "sideSpread.aaa": {
      handler: "countSideSpread",
      immediate: true,
      deep: true,
    },
  },
  inject: ["changeView"],
})
export default class SideNav extends BaseVue {
  public changeView!: any;

  public itemChildsLink: string = "Invoices";
  public isShowSidebar: boolean = false;
  public idShowCode: boolean = false;
  public isFold: boolean = false;
  public isLevelSmall: boolean = false;
  public isFoldDetails: boolean = false;
  public navName: string = "TMS";
  public parentLevel: any = "";
  public isClickParentLevel: boolean = false;
  public navLink: Array<any> = [];
  public countSideSpread(value: number, oldValue: number): void {}
  public mounted(): void {
    this.parentLevel = ref<any>(null);
    this.navLink = SideNavConfig;
    const routers: any = this.getRouter();
    let routerConfigs: Array<any> = [];
    filterRouterTopMap(SideNavConfig, routerConfigs, [
      "path",
      "name",
      "parentName",
    ]);
    let findRouter = find(routerConfigs, { name: routers.query.name });
    if (findRouter && findRouter.name) {
      this.itemChildsLink = findRouter.name;
      if (findRouter.parentName) this.navName = findRouter.parentName;
      else this.navName = findRouter.name;
    }
  }

  public childrenHeight(childrens: any) {
    let length: number = 0;
    forEach(childrens, (children) => {
      if (children.title) length++;
    });
    return 48 * length + "px";
  }

  public setItemChildren(childrens: any) {
    let itemChildren: Array<any> = [];
    forEach(childrens, (children) => {
      if (children.title) itemChildren.push(children);
    });
    return itemChildren;
  }

  public showCode() {
    this.idShowCode = !this.idShowCode;
  }

  public togoaside(isfold: any): void {
    this.isClickParentLevel = true;
    if (this.isFoldDetails) {
      this.isLevelSmall = true;
    }
    if (isfold) {
    }
    this.isFold = !isfold;
  }

  public foldDetails(isFoldDetails: any, item: any): void {
    if (this.navName == item.title) {
      this.navName = "";
      return;
    } else this.navName = item.title;
    if (item.path && item.name) this.setRouter({ name: item.name });
  }

  public foldChildetails(event: any, item: any): void {
    let botton: any = event.target.parentNode.parentNode.parentNode;
    if (botton) {
      botton.blur();
    }
    this.itemChildsLink = item.name;
    if (item.path && item.name) this.setRouter({ name: item.name });
  }

  public logOut(): void {
    this.setRouter({ name: "SignIn" });
  }
}
