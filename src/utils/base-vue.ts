import { Vue } from 'vue-class-component';
import Session from '../shared/session';
import { useRouter,onBeforeRouteUpdate  } from 'vue-router'
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default class BaseVue extends Vue {
    useCurrentInstance() {
        const { appContext } = getCurrentInstance() as ComponentInternalInstance;
        const globalProperties = appContext.config.globalProperties;
        return globalProperties
    }

    gb_proxy:any = this.useCurrentInstance();
    gb_router:any = useRouter();
    $success(msg: any){
         this.gb_proxy.$message.success(msg) ;
    }

    $errors(msg: any){
         this.gb_proxy.$message.error(msg) ;
    }

    $warnings(msg: any){
         this.gb_proxy.$message.warning(msg) ;
    }

    $normals(msg: any){
        this.gb_proxy.$message.normal(msg) ;
    }

    $reconfirm(options: any){
       return this.gb_proxy.$reconfirm(options) ;
    }

    setRouter(params: any){
        this.gb_router.push(params);
    }

    getRouter(params: any){
       return {
           query: this.gb_router.currentRoute.value
       };
    }

}