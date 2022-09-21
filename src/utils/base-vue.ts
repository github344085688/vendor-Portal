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

    proxy:any = this.useCurrentInstance();
    $router:any = useRouter();
    $success(msg: any){
         this.proxy.$message.success(msg) ;
    }

    $errors(msg: any){
         this.proxy.$message.error(msg) ;
    }

    $warnings(msg: any){
         this.proxy.$message.warning(msg) ;
    }

    $normals(msg: any){
        this.proxy.$message.normal(msg) ;
    }

    setRouter(params: any){
        this.$router.push(params);
    }

    getRouter(params: any){
       return {
           query: this.$router.currentRoute.value
       };
    }

}