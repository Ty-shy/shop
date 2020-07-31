<template>
  <div class="goods">
    <el-dialog :title="info.title" :visible.sync="info.show" @opened="createEditor">
      <el-form :model="form">
        <!-- ============================== 一级分类 =================================== -->
        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" placeholder="请选择" @change="frist">
            <!-- <el-option value disabled>--请选择--</el-option> -->
            <el-option
              v-for="item in catelist"
              v-show="item.pid==0"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- ============================== 二级分类 =================================== -->

        <el-form-item label="二级分类" label-width="80px">
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option v-for=" i in firstArr" :key="i.id" :label="i.catename" :value="i.id"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>

        <!-- ============================== 商品名称 =================================== -->

        <el-form-item label="商品名称" label-width="80px">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>

        <!-- ============================== 价格 =================================== -->

        <el-form-item label="价格" label-width="80px">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>

        <!-- ============================== 市场价格 =================================== -->

        <el-form-item label="市场价格" label-width="80px">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>

        <!-- ============================== 图片 =================================== -->

        <el-form-item label="图片" label-width="80px">
          <el-upload class="avatar-uploader" action :on-change="changeImg" :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <!-- ============================== 商品规格 =================================== -->

        <el-form-item label="商品规格" label-width="80px">
          <el-select v-model="form.region" placeholder="请选择" @change="attri">
            <el-option
              v-for="item in speciList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- ============================== 规格属性 =================================== -->

        <el-form-item label="商品属性" label-width="80px">
          <template>
            <el-select
              v-model="form.specsattr"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请选择"
            >
              <!-- <el-option>1</el-option> -->
              <el-option
                v-for="item in attriArr"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>

        <!-- ============================== 是否新品 =================================== -->

        <!-- <el-form-item label="是否新品" label-width="80px">
          <template>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </template>
        </el-form-item>-->

        <!-- ============================== 是否热卖 =================================== -->
        <!-- 
        <el-form-item label="是否热卖" label-width="80px">
          <template>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </template>
        </el-form-item>-->

        <!-- ============================== 状态 =================================== -->
        <!-- 
        <el-form-item label="状态" label-width="80px">
          <template>
            <el-switch :active-value="1" :inactive-value="2"></el-switch>
          </template>
        </el-form-item>

        <el-form-item label="商品描述" label-width="80px">
          <div id="desc"></div>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button type="primary" @click="add">添加</el-button>
        <!-- <el-button type="primary" @click="upDate" v-else>修改</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>
   


<script>
import E from "wangeditor";
import { mapGetters, mapActions } from "vuex";
import { requestGoodsAdd, requestCateList } from "../../../util/request";
import { successAlert, warningAlert } from "../../../util/alert";
export default {
  props: ["info"],
  // 计算属性
  computed: {
    ...mapGetters({
      catelist: "cate/list",
      speciList: "speci/list",
    }),
  },
  data() {
    return {
      imageUrl: "",
      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: "",
        isnew: 1,
        ishot: 1,
        status: 1,
      },
      firstArr: [],
      attriArr: [],
    };
  },
  // !!!!!!!!!!!! 方法 !!!!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestCateList: "cate/requestList",
      requestSpeciList: "speci/requestList",
    }),
    empty() {
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: 1,
        ishot: 1,
        status: 1,
      };
    },
    createEditor() {
      this.editor = new E("#desc");
      this.editor.create();
      //取值 设置值
      this.editor.txt.html(this.form.description);
      this.empty();
    },
    // ============ 一级 ===========
    frist() {
      this.catelist.forEach((item) => {
        if (item.id == this.form.first_cateid) {
          this.firstArr = item.children;
        }
      });
      console.log(this.firstArr);
    },
    attri() {
      this.speciList.forEach((item) => {
        console.log(item);
        if ((item.id = this.form.region)) {
          this.attriArr = item.attrs;
        }
      });

      console.log(this.attriArr);
    },
    // =========== 图片 ===========
    changeImg(e) {
      console.log(e);
      if (e.size > 2 * 1024 * 1024) {
        warningAlert("图片大小不能超过2M");
        return;
      }
      let extname = e.name.slice(e.name.lastIndexOf("."));
      let extArr = [".png", ".jpg", ".gif", ".jpeg"];
      if (!extArr.some((item) => item === extname)) {
        warningAlert(
          "上传的必须是图片,并且格式为png、jpg、gif、jpeg格式的图片"
        );
        return;
      }
      // file 是上传的文件
      let file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    // ============= 取消 ===============
    cencel() {
      this.info.show = false;
    },
    // =============== 添加 =====================

    add() {
      requestGoodsAdd().then((res) => {});
      console.log(this.catelist);
      console.log(this.attriArr);
    },
  },
  mounted() {
    this.requestCateList();
    this.requestSpeciList();
  },
};
</script>

<style scoped lang="stylus">
.goods >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.goods .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>