import { Options } from 'vue-class-component';
import template from "./change-user-sign-in.vue";
import baseVue from '@/utils/base-vue';
@Options({
    mixins: [template],
    name: 'ChangeUser',
    components: {
    },

})
export default class ChangeUser extends baseVue {
    public showPageName:string = 'login';
    public checkPageName(name:string ): void {
        this.showPageName = name;
    }

    public countChanged(value: number, oldValue: number): void {
        // this.$log(`countChanged`, { value, oldValue });
    }


    public changePage(name: string):void{
        this.showPageName = name;
    }

    public onChangeUser(name: string):void{
        this.setRouter({ name: 'Login'})
    }



    // 生命周期
    mounted(){
        const pathname = window.location.pathname.slice(1);
        console.log('pathname', pathname);
    }

    beforeUnmount(){

    }

}
