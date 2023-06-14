<template>
      <el-container style="height:100%;">
        <el-aside width="200px" >
          <el-menu style="height: 100%" :default-active="$route.path" background-color="#4e72b8" text-color="#fff">
            <template v-if="role">
              <template v-for="menu in menus" :key="menu">
              <el-menu-item @click="$router.push(menu.path)">
                <span>{{ menu.name }}</span>
              </el-menu-item>
              </template>
            </template>
            <template v-else>
              <el-menu-item>
                常见帮助信息
              </el-menu-item>
            </template>
            <el-menu-item @click="changeRole">
              <template v-if="role">
                <span>用户端</span>
              </template>
              <template v-else>
                <span>管理员端</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
</template>

<script>
import {routes} from '@/router/index.js'
export default {
  data() {
    return {
      menus: [],
      role: true
    }
  },
  methods: {
    getMenu() {
      this.menus = routes[0].children.slice(0, -1)
    },
    changeRole() {
      this.role = !this.role
      if (this.role) {
        this.$router.push('/')
      } else {
        this.$router.push('/common_question')
      }
    }
  },
  mounted() {
    this.getMenu()
  }
}
</script>