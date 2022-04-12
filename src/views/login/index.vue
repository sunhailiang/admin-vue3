<template>
  <div class="login el-icon-circle-cross">
    <el-form :model="loginForm" :rules="loginValidate" ref="loginFormRef">
      <el-form-item prop="username">
        <span class="svg-container">
          <Icon icon="user" />
        </span>
        <el-input v-model="loginForm.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <Icon icon="lock" />
        </span>
        <el-input
          :type="pwdState ? 'text' : 'password'"
          v-model="loginForm.password"
          maxLength="18"
          placeholder="清输入密码"
        />
        <span class="svg-container pwd-show">
          <Icon
            :icon="pwdState ? 'eye' : 'no_eye'"
            @iconClick="changePwdState"
          />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { validatePwd } from './rules.js'
import { useStore } from 'vuex'
import api from '@/api'
// 登录
const loginForm = ref({
  username: 'admin',
  password: '123456'
})
// 登录验证规则
const loginValidate = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePwd()
    }
  ]
})
const store = useStore()
console.log('啥玩意儿？ ', useStore().state)
// store.commit('user/setToken', 'xx134cv1231vc2312vchjghjg1231312')
const pwdState = ref(false)
const changePwdState = () => {
  console.log('pwdState', pwdState)
  if (pwdState.value) {
    pwdState.value = false
    console.log('模拟token', store.state.user.token)
  } else {
    pwdState.value = true
  }
}

// 登录操作

const loginFormRef = ref(null)
const onSubmit = () => {
  loginFormRef.value.validate((validateRes) => {
    if (validateRes) {
      // 登录
      api.login(loginForm).then((res) => {
        console.log('res', res)
      })
    }
  })
}
</script>
<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background-color: #2d3a4b;
  padding: 30vh;
  .el-form {
    width: 360px;
    position: relative;
    margin: 0 auto;
    .svg-container {
      position: absolute;
      top: 0;
      left: 5px;
      z-index: 999;
    }
    .pwd-show {
      left: 330px;
    }

    .el-input {
      ::v-deep .el-input__inner {
        padding-left: 30px;
      }
    }
  }
}
</style>
