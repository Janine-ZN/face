<template>
  <div>
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="7">
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
          <el-row>
            <el-col>
              <label>
                <input type="radio" name="show">
                <span>仅显示已识别结果</span>
              </label>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="btn-group">
                <button class="btn-primary">选好了，确认统计</button>
                <button class="btn-dashed">重置</button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="17">
        <el-row>
          <el-col>
            <span class="title-font">对比信息</span>
          </el-col>
        </el-row>
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
.btn-group {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>
<style lang="scss">
// @import '@common/style/mixin.scss';
.date {
  .block {
    text-align: center !important;
  }
  .el-date-editor.el-input {
    width: 90% !important;
  }
  .el-input__inner {
    height: 30px !important;
    border-radius: 25px !important;
    border: 1px dashed $border_color !important;
    padding-left: 118px !important;
  }
  .el-input__prefix {
    left: 90px;
  }
  .el-icon-time:before {
    content: "\E608"; //date
    color: $main_color;
  }
  .el-input__icon {
    line-height: 0 !important;
  }
}
</style>
