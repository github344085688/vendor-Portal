/**
 * Created by f on 2018/5/22.
 */
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from "vue-property-decorator";
import WiseVue from "../../utils/base-vue";
import template from "./popup-head.vue";
@Options({
    mixins: [template]
})
export default class Pops extends WiseVue {
    @Prop({ default: false })
    show!: Boolean;

    msgOueue: any = [];
    config: any = {
        uid: "",
        content: "内容", // 内容
        background: "#909399",
        color: "#303133",
        borderColor: "#303133",
        icon: "el-icon-info",
    };
    type:any = 0;
    options: any = {};

    @Watch("show")
    isErrorshow() {
        console.log('show', this.show);
        let tim: any;
        if (this.show && this.options.autoClose ) {
            tim = setTimeout(() => {
                this.show = false;
                setTimeout(() => {
                    let node = document.querySelector('.popup-head-box');
                    if (node && node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                }, 200);
            }, this.options.closeTime);
        }
        if (!this.show) clearTimeout(tim);
    }

    onClose() {
        this.msgOueue.shift();
        this.type = 0;
    }
}



/*


import { Component, Prop, Watch } from "vue-property-decorator";

import template from './popup-head.vue';
@Component({
  mixins: [template],
  name: 'PopupHead',
  components: {},
})
export default class PopupHead extends WiseVue {
  @Prop({ default: false })
  show!: boolean;
  options: any = {};

  @Watch("show")
  isErrorshow() {
    let tim: any;
    if (this.show && this.options.autoClose ) {
      tim = setTimeout(() => {
        this.show = false;
        setTimeout(() => {
          let node = document.querySelector('.popup-head-box');
          if (node && node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }, 200);
      }, this.options.closeTime);
    }
     if (!this.show) clearTimeout(tim);
  }


}


*/


