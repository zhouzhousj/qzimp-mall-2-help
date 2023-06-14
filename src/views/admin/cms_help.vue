<template>
  <div class="root">
    <div style="display:flex;">
      <el-button type="primary"  size="normal" @click="add">
        <span>添加</span>
      </el-button>
      <el-input v-model="searchText" placeholder="请输入搜索categoryId" clearable @clear="clearSearch" @keyup.enter="performSearch"
      style="margin-bottom: 20px;"></el-input>
    </div>

    <el-table :data="paginatedData" :header-cell-style="{
      background: '#feeeed',
      color: '#606266'
    }" borde>
      <el-table-column width="70rpx" prop="id" label="id"></el-table-column>
      <el-table-column width="120rpx" prop="categoryId" label="categoryId"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column width="240rpx" prop="content" label="内容"></el-table-column>
      <el-table-column width="240rpx" prop="icon" label="图标">
        <template #default="{ row }">
          <el-image :src="row.icon"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="readCount" label="阅读数量"></el-table-column>
      <!-- <el-table-column prop="showStatus" label="状态"></el-table-column> -->
      <el-table-column width="200rpx" prop="createTime" :formatter="formatDate" label="创建时间"></el-table-column>
      <el-table-column width="200rpx" label="操作">
        <template #default="{ row }">
          <el-button type="info" size="mini"   @click="openEditDialog(row)">
            <span>编辑</span>
          </el-button>
          <el-button type="danger" size="mini" @click="Del(row)">
            <span>删除</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-pagination :current-page="currentPage" :page-size="pageSize" :total="filteredtableData.length"
      @current-change="handlePageChange">
    </el-pagination>

    <el-dialog class="form" v-model="editDialogVisible" @close="editDialogVisible = false">
      <el-form>
        <el-form-item label="categoryId">
          <el-input v-model="editItem.categoryId"></el-input>
        </el-form-item>
        <!-- <el-form-item label="名称">
          <el-input v-model="editItem.name"></el-input>
        </el-form-item> -->
        <el-form-item label="标题">
          <el-input v-model="editItem.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="editItem.content"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="editItem.icon"></el-input>
        </el-form-item>
        <el-form-item label="阅读数量">
          <el-input v-model="editItem.readCount"></el-input>
        </el-form-item>
        <!-- <el-form-item label="状态">
          <el-input v-model="editItem.showStatus"></el-input>
        </el-form-item> -->

      </el-form>

      <div slot="footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="choose">{{ isEdit? '更新':'添加'}}</el-button>
      </div>
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
      editDialogVisible: false,
      editItem: {},
      selectedRow: null,
      isEdit: false
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
          return String(item.categoryId)===String(this.searchText);
        });
      } else {
        return this.tableData || [];
      }
    }

  },
  methods: {
    formatDate(row, column, cellValue, index){
      const s = new Date(cellValue).toLocaleString();
	    return s;
    },
    openEditDialog(row) {
      this.isEdit = true
      this.editItem = {
        ...row
      }; // 创建一个副本以防止直接修改原始数据
      this.editDialogVisible = true;
    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },


    saveEdit() {
      console.log(this.editItem);
      ElMessageBox.confirm('确定修改吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          const index = this.tableData.findIndex(item => item.id === this.editItem.id);
          if (index !== -1) {
            // 替换原有的数据
            this.tableData.splice(index, 1, this.editItem);
          } else {
            // 添加编辑后的数据
            this.tableData.push(this.editItem);
          }
          this.editDialogVisible = false;
          this.Alter(this.editItem)
          ElMessage.success('修改成功！');
          this.editItem = {}; // 将编辑项重置为空对象
        })
        .catch(() => {
          // 取消保存操作
          ElMessage.info('修改取消！');
        });
    },


    fetchData() {
      api.Page(this.json)
        .then(response => {
          this.tableData = response.data.data.page.records || response.data.records;
          console.log(this.tableData);
          // ElMessage.success('刷新成功！');
        })
        .catch(error => {
          // ElMessage.error('刷新失败，请检查网络！');
          console.error('Error fetching data:', error);
        });
    },

    Insert(row) {
      api.Add(row)
        .then((response) => {
          ElMessage.success('插入数据成功！');
          console.log(response)
        })
        .catch((error) => {
          ElMessage.error('插入数据失败！');
          console.error('保存修改失败:', error);
        });
    },
    Alter(row) {
      api.Edit(row)
        .then((response) => {
          // 修改保存成功，可以进行一些操作，例如提示用户保存成功或更新本地数据
          console.log('修改保存成功:', response.data);
          // ElMessage.success('修改数据成功！');
        })
        .catch((error) => {
          // ElMessage.error('修改数据失败！');
          console.error('保存修改失败:', error);
          // 处理保存失败的情况
        })
      this.fetchData()
    },

    Del(row) {
      ElMessageBox.confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        api.Del(row.id)
          .then(response => {
            const index = this.tableData.findIndex(api => api.id === row.id);
            if (index !== -1) {
              this.tableData.splice(index, 1);
            }
            ElMessage.success('删除成功！');
          })
          .catch(error => {
            ElMessage.error(response.msg);
          });
      }).catch(() => {
      });
    },
    add() {
      this.isEdit = false
      this.editDialogVisible = true
      this.editItem = {}
    },
    addAPI() {
      this.Insert(this.editItem)
      const lastPage = Math.ceil(this.tableData.length / this.pageSize);
      this.handlePageChange(lastPage);
      this.editDialogVisible = false
      this.fetchData()
    },
    choose() {
      this.isEdit?this.saveEdit():this.addAPI()
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
