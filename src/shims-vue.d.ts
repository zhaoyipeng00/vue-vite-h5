import dayjs from "dayjs";

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $dayjs: dayjs.Dayjs
  }
}
