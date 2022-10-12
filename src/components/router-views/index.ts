import { Options } from 'vue-class-component';
import template from "./router-views.vue";
import BaseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name: 'RouterViews',
})
export default class RouterViews extends BaseVue {

}
