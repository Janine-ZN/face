<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="face-rep">
          <div class="face_rep_font">人脸库</div>
          <div class="various_libs">
            <div class="libs test">测试库</div>
            <div class="libs blacklist">黑名单</div>
            <div class="libs leader">领导人员库</div>
            <div class="libs employee">普通员工</div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <span class="title-font">查询条件</span>
        <div class="face-query">
          <el-row>
            <el-col>
              <div class="face-query-infos">
                <div class="face-query-info">
                  <span class="query-title">姓名：</span>
                  <el-input v-model="name" placeholder="输入姓名"></el-input>
                </div>
                <div class="face-query-info">
                  <span class="query-title">性别：</span>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="face-query-info">
                  <span class="query-title">身份证号：</span>
                  <el-input v-model="id" placeholder="输入身份证号" class="face-id"></el-input>
                </div>
                <button class="btn-primary">查询</button>
                <button class="btn-dashed">重置</button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="face-info-table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "0",
          label: "女"
        },
        {
          value: "2",
          label: "全部"
        }
      ],
      value: this.options,
      name: "",
      id: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
.face-query-infos {
  padding: 25px 15px;
  .el-input {
    display: inline !important;
    .el-input__inner {
      width: 140px !important;
      height: 30px !important;
      border-radius: 25px !important;
      border: 1px dashed $border_color !important;
      text-align: right !important;
    }
  }
  .el-input__icon {
    line-height: 0 !important;
  }
}
.face-query-info {
  position: relative;
  display: inline-block;
  .face-id {
    .el-input__inner {
      width: 225px !important;
      padding-left: 120px !important;
    }
  }
}
</style>
