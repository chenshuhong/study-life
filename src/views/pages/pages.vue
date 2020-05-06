<template lang="pug">
  Layout.pages
    Sider(v-model="collapsed")
      .logo(class="ma-4")
      Menu(theme="dark",mode="inline",:selectedKeys="['1']")
        MenuItem(key="1")
          a-icon(type="user")
          span nav 1
    Layout
      Header.header(class="pa-0")
        a-icon.trigger(class="px-6",:type="collapsed?'menu-unfold':'menu-fold'",@click="collapsed=!collapsed")
      Content(class="pa-4")
        router-view
      Footer this is footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Layout, Menu } from 'ant-design-vue'
const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content
const Footer = Layout.Footer
const MenuItem = Menu.Item
@Component({
  components: {
    Layout,
    Sider,
    Header,
    Content,
    Footer,
    Menu,
    MenuItem
  }
})
export default class Pages extends Vue {
  collapsed=false
}
</script>

<style scoped lang="less">
  .pages{
    .logo{
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
    }
    .header{
      background:white;
    }
    .trigger{
      font-size: 18px;
      line-height: 64px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover{
        color: @primary-color;
      }
    }
  }
</style>
