import Vue from 'vue';
import {message, ConfigProvider, Button, Icon, Input} from 'ant-design-vue';

Vue.use(Icon);
Vue.use(Button);
Vue.use(ConfigProvider);
Vue.use(Input);

Vue.prototype.$message = message;
