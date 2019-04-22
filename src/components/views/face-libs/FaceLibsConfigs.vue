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
          <div class="operate">
            <button class="btn-dashed">
              <img src="@/assets/imgs/add.png" alt> 添加
            </button>
            <button class="btn-dashed">
              <img src="@/assets/imgs/delete.png" alt> 删除
            </button>
            <button class="btn-dashed">
              <img src="@/assets/imgs/edit.png" alt> 修改
            </button>
          </div>
          <div class="my-table" style="padding:0 15px">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              stripe
              border
              size="small"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="序号" width="120">
                <template slot-scope="scope">{{ scope.row.number }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="gender" label="性别"></el-table-column>
              <el-table-column prop="id" label="身份证号" show-overflow-tooltip></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
            </div>
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
      id: "",
      tableData: [
        {
          number: "2016-05-03",
          name: "王小虎1",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-02",
          name: "王小虎2",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-04",
          name: "王小虎3",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-01",
          name: "王小虎4",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-08",
          name: "王小虎5",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-08",
          name: "王小虎6",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-08",
          name: "王小虎7",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-08",
          name: "王小虎8",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-08",
          name: "王小虎9",
          gender: "女",
          id: "342001199212081121"
        },
        {
          number: "2016-05-06",
          name: "王小虎10",
          gender: "女",
          id: "342001199212081121"
        }
      ]
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.operate {
  padding: 15px;
}
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
.my-table {
  .el-table td,
  .el-table th {
    padding: 2px 0 !important;
  }
}

.pagination {
  float: right;
  .el-pagination {
    padding: 5px 0 !important;
  }
  .btn-next {
    margin: 0 0 0 5px !important;
  }
}
</style>
