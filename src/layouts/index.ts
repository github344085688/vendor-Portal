import { Options } from 'vue-class-component';
import template from "./layout.vue";
import './layout.scss';
import BaseVue from '@/utils/base-vue';
import SideNav from './side-nav';
import TopBar from './top-bar';
import { ref  } from "vue";
import { useEventbus } from '@/utils/useEventbus';
@Options({
    mixins: [template],
    name:'Layouts',
    components: {
        SideNav,
        TopBar
    },
    provide() {
        return {
            changeView: this.sideSpread
        }
    }

})
export default class Layouts extends BaseVue {
    public isSideSpread: boolean = true;
    public sideSpread: any = {};
    public routers: any = {};
    public treeRef: any ;
    public eventbus = useEventbus();
    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;
        this.sideSpread.bb = isSpread;
        this.sideSpread.aaa = 'bbb';
        this.treeRef.value?.test();


    }
    public beforeCreate():void {
        this.treeRef = ref<any>();
    }
    public  mounted() {
        this.eventbus.customOn('foo', (e:any) => console.log('foo', e) )

    }

    public changeView(router: any):void {
        this.routers = router;
    }


}
