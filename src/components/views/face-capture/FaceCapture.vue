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
        <div class="date">
          <el-row>
            <el-col style="padding-top:5px">
              <span class="date-title">开始时间：</span>
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
              <span class="date-title">结束时间：</span>
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
              <label class="date-radio">
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
      <el-col :span="18">
        <el-row>
          <el-col>
            <span class="title-font">对比信息</span>
          </el-col>
        </el-row>
        <!-- 左下 -->
        <div class="date">
          <el-row :gutter="20">
            <!-- 左侧 -->
            <el-col :span="10">
              <div class="img-group">
                <div class="img-tip">相似度：0%</div>
                <img src="@/assets/imgs/similar1.jpg" alt srcset>
                <img src="@/assets/imgs/similar2.jpg" alt srcset>
              </div>
            </el-col>
            <el-col :span="14">
              <el-row>
                <el-col :span="12">
                  <el-row>
                    <el-col>
                      <ul class="ul-img-info">
                        <li>
                          <span class="img-info">姓名 :</span> 田思思
                        </li>
                        <li>
                          <span class="img-info">性别 :</span> 女
                        </li>
                        <li>
                          <span class="img-info">时间 :</span> 2017-09-05 14:03:25
                        </li>
                      </ul>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <ul class="ul-img-info">
                    <li>
                      <span class="img-info">人脸库 :</span> 黑名单
                    </li>
                    <li>
                      <span class="img-info">身份证 :</span> 342224199005261735
                    </li>
                    <li>
                      <span class="img-info">阈值 :</span> 2017-09-05 14:03:25
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-row>
        <el-col style="margin:18px 0">
          <span class="title-font">人脸抓拍结果</span>
        </el-col>
      </el-row>
      <div class="face-result">
        <el-row>
          <el-col>
            <div v-for="(o, index) in 100" :key="o" :offset="index > 0 ? 100 : 0" class="face-img">
              <img src="@/assets/imgs/no_pictures.png" class="image">
              <img src="@/assets/imgs/compare.png" class="compare">
              <div class="face-img-time">{{ currentDate | getDateTime}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  filters: {
    getDateTime: function(value) {
      if (!value) return "";
      let year = value.getFullYear();
      let month = value.getMonth() + 1 ;
      let date = value.getDate();
      let hours = value.getHours();
      let minutes = value.getMinutes();
      let seconds = value.getSeconds();
      return `时间：${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    }
  },
  data() {
    return {
      dateTime: "",
      currentDate: new Date()
    };
  }
};
</script>
<style lang="scss" scoped>
.date-radio {
  display: inline-block;
  font-size: 0.875em;
  padding: 1.071em 1.071em 0.357em;
}

/* 该 ul 只用在当前页 */
ul.ul-img-info {
  padding: 0;
  margin: 0.9375em 0;
  list-style: none;
  li {
    padding: 0.9375em 0;
  }
  .img-info {
    font-size: 0.875em;
    color: $font_secondary_color;
  }
}
</style>
<style lang="scss">
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
