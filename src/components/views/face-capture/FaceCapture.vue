<template>
  <div>
    <!-- <div>
      第一行
      <div>左边时间</div>
      <div>右边</div>
    </div>-->
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="8">
        <!-- 左上 -->
        <el-row>
          <el-col>
            <!-- <img src="@/assets/imgs/title.png" alt> -->
            <span class="title-font">查询条件</span>
          </el-col>
        </el-row>
        <!-- 左下 -->
        <div class="date bg-white">
          <el-row>
            <el-col>55</el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">55</div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
// @import "@/common/style/index.scss";

.date {
  margin-top: 10px;
  border: 1px dashed $font_secondary_color;
  min-height: 190px;
}
.bg-white {
  background: $my_main_color;
}

// .title-font{
    // background: url("../../../assets/imgs/title.png") no-repeat;
// }
</style>
