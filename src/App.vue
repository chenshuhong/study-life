<template lang="pug">
  a-config-provider(:locale="zhCN")
    #app
      router-view
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Component, Vue } from 'vue-property-decorator'
moment.locale('zh-cn')
@Component({})
export default class App extends Vue {
    zhCN=zhCN
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  >*{
    min-height: 100vh;
  }
}
</style>
