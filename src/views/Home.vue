<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <div class="site-name">电影资源</div>
        </el-col>
        <el-col :span="6">
          <div class="user-name">管理员</div>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <!-- 添加 -->
      <el-row class="add-btn">
        <el-button type="primary" @click="dialogVisible = true">添加</el-button>
      </el-row>
      <!-- 弹框 -->
      <el-dialog title="添加" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="电影名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="图片地址">
            <el-input type="textarea" v-model="form.imgUrl"></el-input>
          </el-form-item>
          <el-form-item label="视频地址">
            <el-input type="textarea" v-model="form.movieUrl"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 列表 -->
      <el-table :data="tableData" :fit="true">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="imgUrl" label="地址"></el-table-column>
        <el-table-column prop="movieUrl" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button type="danger"  icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="pagination">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          background
          layout="prev, pager, next"
          :total="1000"
        ></el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.site-name {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}

.user-name {
  text-align: right;
}

.add-btn {
  text-align: left;
  margin-bottom: 15px;
}

.pagination {
  padding: 20px 0;
}
</style>


<script>
export default {
  name: "home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "流浪地球",
      imgUrl: "http://www.baidu.com",
      movieUrl: "http://www.baidu.com"
    };
    return {
      tableData: Array(10).fill(item),
      dialogVisible: false,
      form: {
        name: "",
        imgUrl: "",
        movieUrl: ""
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
