<template>
  <div class="navbar">
    <hamburg />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 全局搜索 -->
      <HeaderSearch class="header-search" />
      <!-- 全屏 -->
      <ScreenFull class="screen-full-container" />
      <!-- 换肤 -->
      <ThemeSelect class="theme-container" />
      <!-- 国际化 -->
      <LangSelect class="lang-container" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <Icon icon="s-tools" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import api from '@/api'
import hamburg from './components/hamburg.vue'

const logout = () => {
  api.logout()
}
// const getUserInfo = () => {
//   api.getUserInfo()
// }
// getUserInfo()
</script>

<style lang="scss" scoped>
.el-avatar {
  font-size: 40px !important;
}

.navbar {
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: inline-block;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .header-guide,
    .screen-full-container,
    .lang-container,
    .theme-container,
    .header-search {
      font-size: 26px;
      position: relative;
      top: 14px;
      margin-right: 16px;
    }
    .header-guide {
      font-size: 22px;
      top: 8px;
    }
    .theme-container {
      top: 16px;
    }
    .theme-container,
    .header-guide {
      display: inline-block;
    }
    .screen-full-container,
    .header-search {
      top: 10px;
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
