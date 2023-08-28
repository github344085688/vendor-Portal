/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;

  export default component;
}
declare module "marked";

declare module "@heroicons/vue/*" {
  const content: any
  export default content
}
