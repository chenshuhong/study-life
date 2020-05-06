import Vue from 'vue'
import {
  message,
  ConfigProvider,
  Button,
  Icon
} from 'ant-design-vue'

Vue.use(Icon)
Vue.use(Button)
Vue.use(ConfigProvider)

Vue.prototype.$message = message
