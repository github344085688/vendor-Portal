import { Options } from "vue-class-component";
import template from "./invoice-history.vue";
import "./invoice-history.scss";
import BaseVue from "../../utils/base-vue";
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js";
import "highlight.js/styles/foundation.css";
import { marked } from "marked";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import sideNavigation from "./codes/side-nav";
@Options({
  mixins: [template],
  name: "InvoiceHistory",
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  props: {
    propMessage: String,
  },
})
export default class InvoiceHistory extends BaseVue {
  public htmlCode: any = "";
  public jsCode: any = "";
  public render: any = new marked.Renderer();

  public html: any = "";
  public mounted() {
    // this.$http.get("路径/文件名").then(
    //   (response) => {
    //     console.log(response.body);
    //   },
    //   (response) => {
    //     console.log("读取文件失败！");
    //   }
    // );
    this.htmlCode = sideNavigation.template;
    this.jsCode = sideNavigation.js;
    console.log("sideNav", sideNavigation);
    marked.setOptions({
      renderer: this.render, // 这是必填项
      gfm: true, // 启动类似于Github样式的Markdown语法
      pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
      sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
      // 高亮的语法规范
      highlight: (code: any, lang: any) =>
        hljs.highlight(code, { language: lang }).value,
    });
    this.html = marked(
      `## client-portal 
> client-portal 
`
    );
  }
}
