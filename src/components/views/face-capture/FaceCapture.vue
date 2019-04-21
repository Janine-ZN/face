<template>
  <div>
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="6">
        <!-- 左上 -->
        <el-row>
          <el-col>
            <span class="title-font">查询条件</span>
          </el-col>
        </el-row>
        <!-- 左下 -->
        <div class="date bg-white">
          <el-row>
            <el-col>
              <span class="input-title">开始时间：</span>
              <div class="block">
                <el-date-picker
                  v-model="dateTime"
                  type="datetime"
                  placeholder="请选择开始时间"
                  format="yyyy-MM-dd hh:mm:ss"
                  value-format="yyyy-MM-dd hh:mm:ss"
                ></el-date-picker>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span class="input-title">结束时间：</span>
              <div class="block">
                <el-date-picker
                  v-model="dateTime"
                  type="datetime"
                  placeholder="请选择结束时间"
                  format="yyyy-MM-dd hh:mm:ss"
                  value-format="yyyy-MM-dd hh:mm:ss"
                ></el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">55</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateTime: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.date {
  margin-top: 10px;
  border: 1px dashed $border_color;
  min-height: 190px;
}
.bg-white {
  background: $my_main_color;
}
.input-title {
  position: relative;
  left: 35px;
  top: 10px;
  font-size: 12px;
  color: $font_secondary_color;
  background: $my_main_color;
  z-index: 999;
}
</style>
<style lang="scss">
.date {
  .block {
    text-align: center !important;
  }
  .el-date-editor.el-input {
    width: 90% !important;
    // margin: 15px auto !important;
  }
  .el-input__inner {
    height: 30px !important;
    // background-color: transparent !important;
    border-radius: 25px !important;
    border: 1px dashed $border_color !important;
    padding-left: 118px !important;
  }
  .el-input__prefix {
    left: 90px;
  }
  .el-icon-time:before {
    content: "\E608";//date
    color: $main_color;
  }
  .el-input__icon {
    line-height: 0 !important;
  }
}
</style>
