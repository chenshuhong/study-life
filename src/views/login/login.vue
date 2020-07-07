<template lang="pug">
.login-wrap.d-flex.flex-column.align-center
  .form-wrap
    form-model.form(:model="form", :rules="rules", ref="form")
      form-model-item(prop="name")
        a-input(v-model="form.name", placeholder="用户")
          a-icon(slot="prefix", type="user")
      form-model-item(prop="password")
        a-input(v-model="form.password", placeholder="密码", type="password")
          a-icon(slot="prefix", type="lock")
    a-button(block, type="primary", @click="onSubmit") 登录
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {FormModel} from 'ant-design-vue';
const FormModelItem = FormModel.Item;
@Component({
  components: {
    FormModel,
    FormModelItem
  }
})
export default class Login extends Vue {
  form = {
    name: '',
    password: ''
  };

  rules = {
    name: [{required: true, message: '请输入用户名'}],
    password: [{required: true, message: '请输入密码'}]
  };

  onSubmit() {
    (this.$refs.form as FormModel).validate((valid) => {
      if (valid) {
        this.$store.commit('user', this.form);
        localStorage.setItem('user', JSON.stringify(this.form));

        this.$router.push({name: 'Home'});
      }
    });
  }
}
</script>

<style scoped lang="less">
.form-wrap {
  width: 400px;
  padding-top: 88px;
  .form {
    width: 100%;
  }
}
</style>
