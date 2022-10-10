import { Options } from 'vue-class-component';
import template from "./user-routers-views.vue";
import baseVue from '@/utils/base-vue';
import RouterViews from '@/components/router-views';
@Options({
    mixins: [template],
    name: 'UserRouters',
    components: {
        RouterViews
    }
})
export default class UserRouters extends baseVue {
    public isShowPageName: boolean =false;

    public mounted():void{
        this.isShowPageName = true;
    }
}
