import { Options } from 'vue-class-component';
import template from "./user-routers-views.vue";
import BaseVue from '@/utils/base-vue';
import RouterViews from '../router-views';
@Options({
    mixins: [template],
    name: 'UserRouters',
    components: {
        RouterViews
    }
})
export default class UserRouters extends BaseVue {
    public isShowPageName: boolean =false;

    public mounted():void{
        this.isShowPageName = true;
    }
}
