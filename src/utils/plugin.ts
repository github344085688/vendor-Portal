import { createApp } from "vue";
import Error from "../components/popup-head/popup-head";

var counts = 10;
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: any,
        $error: any
    }
}

export default {
    /*    install (app: any) {
     const MESSage_EXTEND = createApp(Error);
     const MESSage_CREATE_EL: any = MESSage_EXTEND.mount(
     document.createElement("div"),
     );
     document.body.appendChild(MESSage_CREATE_EL.$el);
     /!*  console.log(app);
     const MESSage_EXTEND = createApp(MESSage);
     const MESSage_CREATE_EL = MESSage_EXTEND.mount(
     document.createElement("div"),
     );


     document.body.appendChild(MESSage_CREATE_EL.$el);*!/

     const PUBLIC_FN = {
     name: '梅长苏',
     weapons: '长剑',
     title: '刺客'
     };

     const error = (msg: string, config: any = {}) =>{
     let instance: any;
     if (!instance) {
     console.log('MESSage_EXTEND', MESSage_CREATE_EL.show);
     MESSage_CREATE_EL.show = false;
     MESSage_CREATE_EL.set(MESSage_CREATE_EL,'show',true);
     // MESSage_CREATE_EL.show = true;

     }


     };


     app.config.globalProperties.$message = PUBLIC_FN;
     app.config.globalProperties.$error = error;
     },*/
    install (app: any) {
        // 1.实例化并绑定组件
        const MESSage_EXTEND = createApp(Error);
        const MESSage_CREATE_EL:any = MESSage_EXTEND.mount(
            document.createElement("div"),
        );


        document.body.appendChild(MESSage_CREATE_EL.$el);


        // 3.调用显示的方法
        const PUBLIC_FN = {

            hexToRgb (hex: any, opacity: any = 1) {
                return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
                    + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ') ';
            },

            success (content: any) {
                const UID = String(counts)
                var config:any = {}

                config.uid = UID;
                config.color = "#67C23A";
                config.background = this.hexToRgb("#e1f3d8");
                config.icon = "el-icon-success";
                config.borderColor = "#67C23A"
                config.content = content;

                this.show(config)
            },

            error (content: any) {

                var config:any = {}

                const UID = String(counts)
                config.uid = UID;
                config.color = "#F56C6C";
                config.background = this.hexToRgb("#fde2e2");
                config.icon = "el-icon-error";
                config.content = content;
                config.borderColor = "#F56C6C"

                this.show(config)
            },

            warning (content: any) {
                var config:any = {}
                const UID = String(counts)
                config.uid = UID;
                config.color = "#E6A23C";
                config.background = this.hexToRgb("#ffdaa4");
                config.icon = "el-icon-warning";
                config.content = content;
                config.borderColor = "#E6A23C"

                this.show(config)
            },

            normal (content: any) {
                var config:any = {}
                const UID = String(counts)
                config.uid = UID;
                config.color = "#303133";
                config.background = this.hexToRgb("#909399");
                config.icon = "el-icon-info";
                config.content = content;
                config.borderColor = "#303133"

                this.show(config)
            },

            self (content: any, color: any = "#303133", background : any= "#909399", icon : any= "el-icon-info", bgop: any = 1) {
                var config:any = {}
                config.show = true;
                config.color = color;
                config.background = this.hexToRgb(background, bgop);
                config.icon = icon;
                config.content = content;
                this.show(config)
            },

            show (config: any) {
                const UID = String(counts);
                MESSage_CREATE_EL.uid = UID;

                if (MESSage_CREATE_EL.msgOueue.length > 5) {
                    MESSage_CREATE_EL.msgOueue.shift()
                }

                console.log('config', config);

                counts++;
                MESSage_CREATE_EL.msgOueue.push({uid: counts, config: config});

                setTimeout(() => {
                    MESSage_CREATE_EL.onClose();
                }, 3000)
            },
        };

        app.config.globalProperties.$message = PUBLIC_FN;
    }
}