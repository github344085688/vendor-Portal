import { Options } from 'vue-class-component';
import template from "./simulation-window.vue";
import BaseVue from '@/utils/base-vue';
import './simulation-window.scss';
import { forEach,clone } from 'lodash-es';
@Options({
    mixins: [template],
    name: 'RouterViews',
    components: {
    },
})
export default class SimulationWindow extends BaseVue {

   public width:any= 1216;
   public value:any= 100;
   public initializationWidth:any= 1216;
    public dragSimulationWindow: any = 4;

    public  mounted() {

    }

    public handleMouseDown  (event: MouseEvent)  {

    };

    public handleInput  (event: InputEvent)  {
        const target = event.target as HTMLInputElement;
        const inputValue = parseInt(target.value, 10);
        let distance = (this.initializationWidth+20) * (inputValue / 100)-20;
        if (distance < 440 ) {
            console.log(inputValue);
            this.value = 36.8;
            this.width=440;
        } else {
            this.value = inputValue;
            this.width =  distance;
        }
        if (distance < 440 ) this.dragSimulationWindow = 0;
        if (distance >440 ) this.dragSimulationWindow = 1;
        if (distance > 640 ) this.dragSimulationWindow = 2;
        if (distance > 768 ) this.dragSimulationWindow = 3;
        if (distance > 1024 ) this.dragSimulationWindow = 4;
        if (distance >  1280 ) this.dragSimulationWindow = 5;
    };

}
