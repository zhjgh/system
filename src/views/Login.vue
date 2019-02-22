<template>
  <el-form :model="loginForm" status-icon ref="loginForm" label-width="60px" class="login-form">
    <el-row class="login-title">登陆</el-row>
    <el-form-item label="用户名" prop="name">
      <el-input type="type" v-model="loginForm.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.login-form {
  width: 400px;
  height: 210px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -220px;
  padding: 20px;
  border: 1px #dcdfe6 solid;
}

.login-title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
