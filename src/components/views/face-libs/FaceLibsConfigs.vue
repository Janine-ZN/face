<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="face-rep">
          <div class="face-rep-font">
            <span class="face-rep-title">人脸库</span>
            <img src="~@/assets/imgs/add_rep.png" @click="addFaceRep = true">
          </div>
          <div class="various_libs">
            <ul>
              <li v-for="(rep,index) in reps" :key="'reps'+index">
                {{ rep.title }}
                <img :src="imgEdit" alt>
                <img :src="imgDelete" alt>
              </li>
            </ul>
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
            <button class="btn-dashed" @click="addPersonFace = true">
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
    <!-- 添加人脸库 -->
    <el-dialog title="添加人脸库" :visible.sync="addFaceRep" left width="30%">
      <div class="face-modal">
        <span class="query-title">人脸库名称：</span>
        <el-input v-model="id" placeholder="输入人脸库名称" class="face-id"></el-input>
      </div>
      <div class="face-modal">
        <span class="query-title">阈值：</span>
        <el-input v-model="name" placeholder="20~100之间"></el-input>
      </div>
      <div class="face-modal">
        <span class="query-title">备注：</span>
        <el-input v-model="name" placeholder="输入备注信息"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <button class="btn-primary" @click="addFaceRep = false">填好了，确认</button>
        <button class="btn-dashed" @click="addFaceRep = false">重置</button>
      </div>
    </el-dialog>
    <!-- 添加人员信息 -->
    <el-dialog title="添加人员信息" :visible.sync="addPersonFace" left width="30%">
      <el-row>
        <el-col :span="12">
          <div class="face-modal">
            <span class="query-title">姓名：</span>
            <el-input v-model="id" placeholder="输入人员姓名" class="face-id"></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="face-modal">
            <span class="query-title">性别：</span>
            <el-select v-model="value" placeholder="选择性别">
              <el-option
                v-for="gender in genders"
                :key="gender.value"
                :label="gender.label"
                :value="gender.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <div class="face-modal">
        <span class="query-title">身份证号：</span>
        <el-input v-model="name" placeholder="输入身份证号"></el-input>
      </div>
      <div class="upload">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </div>
      <div slot="footer" class="dialog-footer">
        <button class="btn-primary" @click="addPersonFace = false">填好了，确认</button>
        <button class="btn-dashed" @click="addPersonFace = false">重置</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      addFaceRep: false,
      addPersonFace: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      imgEdit: "@/assets/imgs/edit.png",
      imgDelete: "@/assets/imgs/delete.png",
      reps: [
        { title: "测试库" },
        { title: "黑名单" },
        { title: "领导人员库" },
        { title: "普通员工" }
      ],
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
      genders: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "0",
          label: "女"
        }
      ],
      gender: this.genders,
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
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.operate {
  padding: 15px;
}

.various_libs {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 10px;
      &:hover {
        border-left: 3px solid $main_color;
        background: #f0fbff;
      }
    }
  }
}

.dialog-footer,
.upload {
  text-align: center;
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

.face-modal {
  position: relative;
  padding: 25px 15px;
  .el-input {
    .el-input__inner {
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
