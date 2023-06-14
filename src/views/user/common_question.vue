<template>
  <div class="root">
    <div style="display:flex;">
      <el-input v-model="searchText" placeholder="请输入搜索关键字" clearable @clear="clearSearch" @keyup.enter="performSearch"
      style="margin-bottom: 20px;"></el-input>
    </div>

    <el-table :data="paginatedData" :header-cell-style="{
      backg: '#eef1f6',
      color: '#606266'
    }" borde>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column width="200rpx" label="操作">
        <template #default="{ row }">
          <el-button type="primary" size="mini"   @click="openDialog(row)">
            <span>详情</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-pagination :current-page="currentPage" :page-size="pageSize" :total="filteredtableData.length"
      @current-change="handlePageChange">
    </el-pagination>

    <el-dialog class="form" v-model="isVisible" @close="isVisible = false" :title="editItem.title">
      <span>{{ editItem.content }}</span>
      <el-image :src="editItem.icon"></el-image>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/http/cms_help.js'
import {
  ElMessage,
  ElMessageBox,
  roleTypes
} from 'element-plus';


export default {
  data() {
    return {
      json: {
        "current": 1,
        "size": 99
      },
      searchText: '',
      currentPage: 1, // 当前页码
      pageSize: 6, // 每页显示的数据条数
      total: 0,
      tableData: [],
      isVisible: false,
      editItem: {}
    }
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredtableData.slice(startIndex, endIndex);
    },
    filteredtableData() {
      if (this.searchText && this.tableData && this.tableData.length > 0) {
        return this.tableData.filter(item => {
          return String(item.title).includes(String(this.searchText));
        });
      } else {
        return this.tableData || [];
      }
    }

  },
  methods: {
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
    fetchData() {
      api.Page(this.json)
        .then(response => {
          this.tableData = response.data.data.page.records || response.data.records;
          console.log(this.tableData);
          ElMessage.success('刷新成功！');
        })
        .catch(error => {
          ElMessage.error('刷新失败，请检查网络！');

          console.error('Error fetching data:', error);
        });
    },
    openDialog(row) {
      this.editItem = {
        ...row
      }
      this.isVisible = true
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-size: cover;
  opacity: 0.9 !important;
  /* 使用 !important 提高优先级 */
  background-repeat: no-repeat;
}
</style>
