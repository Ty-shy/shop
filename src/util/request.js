import axios from "axios";
import qs from "qs";

//响应拦截
axios.interceptors.response.use(res => {
  console.group("本次路径" + res.config.url);
  console.log(res);
  console.groupEnd()
  return res;
})

const baseUrl = "/api";

// ======================================== 菜单管理 ==========================================

//菜单添加
export const requestMenuAdd = (params) => {
  return axios({
    url: baseUrl + "/api/menuadd",
    method: "post",
    data: qs.stringify(params)
  })
}

//菜单列表
export const requestMenuList = (params) => {
  return axios({
    url: baseUrl + "/api/menulist",
    method: "get",
    params: params
  })
}

//菜单获取某一条数据
export const requestMenuDetail = params => {
  return axios({
    url: baseUrl + "/api/menuinfo",
    method: 'get',
    params
  })
}

//菜单的修改
export const requestMenuUpdate = params => {
  return axios({
    url: baseUrl + '/api/menuedit',
    method: 'post',
    data: qs.stringify(params)
  })
}

//菜单的删除
export const requestMenuDelete = params => {
  return axios({
    url: baseUrl + "/api/menudelete",
    method: "post",
    data: qs.stringify(params)
  })
}

// ============================================ 角色管理 ======================================

//角色添加
export const requestRoleAdd = params => {
  return axios({
    url: baseUrl + '/api/roleadd',
    method: "post",
    data: qs.stringify(params)
  })
}

//角色列表
export const requestRoleList = params => {
  return axios({
    url: baseUrl + "/api/rolelist",
    method: 'get',
  })
}

//角色获取(一条)
export const requestRoleDeteil = params => {
  return axios({
    url: baseUrl + "/api/roleinfo",
    method: "get",
    params
  })
}

//角色修改
export const requestRoleAmend = params => {
  return axios({
    url: baseUrl + "/api/roleedit",
    method: "post",
    data: qs.stringify(params)
  })
}

//角色删除
export const requestRoleDelete = params => {
  return axios({
    url: baseUrl + "/api/roledelete",
    method: 'post',
    data: qs.stringify(params)
  })
}

//============================================== 管理员管理 ===================================

//管理员添加
export const requestManageAdd = params => {
  return axios({
    url: baseUrl + "/api/useradd",
    method: 'post',
    data: qs.stringify(params)
  })
}

//管理员总数
export const requestManageTotal = params => {
  return axios({
    url: baseUrl + "/api/usercount",
    method: 'get',
    params,
  })
}

//管理员列表(分页)
export const requestManageList = params => {
  return axios({
    url: baseUrl + "/api/userlist",
    method: "get",
    params,
  })
}

//管理员获取(一条)
export const requestManageInfo = params => {
  return axios({
    url: baseUrl + '/api/userinfo',
    method: "get",
    params,
  })
}

//管理员修改
export const requestManageRedit = params => {
  return axios({
    url: baseUrl + '/api/useredit',
    method: 'post',
    data: qs.stringify(params),
  })
}

//管理员删除
export const requestManageDelete = params => {
  return axios({
    url: baseUrl + '/api/userdelete',
    method: "post",
    data: qs.stringify(params),
  })
}

//管理员登录
export const requestManageLogin = params => {
  return axios({
    url: baseUrl + '/api/userlogin',
    method: 'post',
    data: qs.stringify(params)
  })
}

// ============================================== 商品分类管理 ==================================

// 商品添加
export const requestCateAdd = params => {
  let form = new FormData();
  for (let i in params) {
    form.append(i, params[i])
  };
  return axios({
    url: baseUrl + '/api/cateadd',
    method: 'post',
    data: form
  })
}

// 商品分类列表
export const requestCateList = params => {
  return axios({
    url: baseUrl + "/api/catelist",
    method: 'get',
    params,
  })
}

// 商品分类获取
export const requestCateInfo = params => {
  return axios({
    url: baseUrl + '/api/cateinfo',
    method: 'get',
    params,
  })
}

// 商品分类修改
export const requestCateEdit = params => {
  let form = new FormData();
  for (let i in params) {
    form.append(i, params[i])
  };
  return axios({
    url: baseUrl + '/api/cateedit',
    method: 'post',
    data: form,
  })
}

// 商品分类删除
export const requestCateDelete = params => {
  return axios({
    url: baseUrl + '/api/catedelete',
    method: 'post',
    data: qs.stringify(params)
  })
}

// ======================================= 商品规格管理 ==========================

// 商品规格添加
export const requestSpecsAdd = params => {
  return axios({
    url: baseUrl + "/api/specsadd",
    method: "post",
    data: qs.stringify(params),
  })
}

// 商品规格总数
export const requestSpecsCount = params => {
  return axios({
    url: baseUrl + "/api/specscount",
    method: "get",
    params,
  })
}

// 商品规格列表（分页）
export const requestSpecsList = params => {
  return axios({
    url: baseUrl + "/api/specslist",
    method: "get",
    params,
  })
}

// 商品规格获取
export const requestSpecsInfo = params => {
  return axios({
    url: baseUrl + "/api/specsinfo",
    method: "get",
    params
  })
}

// 商品规格修改
export const requestSpecsEdit = params => {
  return axios({
    url: baseUrl + "/api/specsedit",
    method: "post",
    data: qs.stringify(params)
  })
}

// 商品规格删除
export const requestSpecsDelete = params => {
  return axios({
    url: baseUrl + "/api/specsdelete",
    method: "post",
    data: qs.stringify(params)
  })
}

// ================================ 商品管理 ======================================

// 商品添加
export const requestGoodsAdd = params => {
  let form = new FormData();
  for (let i in params) {
    form.append(i, params[i])
  };
  return axios({
    url: baseUrl + "/api/goodsadd",
    method: "post",
    data:form
  })
}

// 商品列表（分页）
export const requestGoodsCount = params => {
  return axios({
    url: baseUrl + "/api/goodscount",
    method: "get",
    params
  })
}

// 商品获取（一条）
export const requestGoodsInfo = params => {
  return axios({
    url: baseUrl + "/api/goodsinfo",
    method: "get",
    params
  })
}

// 商品修改
export const requestGoodsEdit = params => {
  let form = new FormData();
  for(let i in params){
    form.append(i,params[i])
  }
  return axios({
    url: baseUrl + "/api/goodsedit",
    method: "post",
    data:form
  })
}

// 商品删除
export const requestGoodsDelete = params => {
  return axios({
    url: baseUrl + "/api/goodsdelete",
    method: "post",
    data:params
  })
}

// ========================================= 会员管理 =======================================

// 会员列表
export const requestMemberList = params => {
  return axios({
    url: baseUrl + "/api/memberlist",
    method: "get",
    params
  })
}

// 会员获取（一条）
export const requestMemberInfo = params => {
  return axios({
    url: baseUrl + "/api/memberinfo",
    method: "get",
    params
  })
}

// 会员修改
export const requestMemberEdit = params => {
  return axios({
    url: baseUrl + "/api/memberedit",
    method: "post",
    data:qs.stringify(params)
  })
}

// ========================================== 轮播图管理 ===================================

// 轮播图添加
export const requestBannerAdd = params => {
  let form = new FormData();
  for(let i in params){
    form.append(i,params[i])
  }
  return axios({
    url: baseUrl + "/api/banneradd",
    method: "post",
    data:form
  })
}

// 轮播图列表
export const requestBannerList = params => {
  return axios({
    url: baseUrl + "/api/bannerlist",
    method: "get",
    params
  })
}

// 轮播图修改
export const requestBannerEdit = params => {
  let form = new FormData();
  for(let i in params){
    form.append(i,params[i])
  }
  return axios({
    url: baseUrl + "/api/banneredit",
    method: "post",

  })
}

// 轮播图删除
export const requestBannerDelete= params => {
  return axios({
    url: baseUrl + "/api/bannerdelete",
    method: "post",
    data:qs.stringify(params)
  })
}

// ================================================== 限时秒杀管理 ======================================

// 限时秒杀添加
export const requestSeckAdd = params => {
  return axios({
    url: baseUrl + "/api/seckadd",
    method: "post",
    data:qs.stringify(params)
  })
}
// 限时秒杀列表
export const requestSeckList = params => {
  return axios({
    url: baseUrl + "/api/secklist",
    method: "get",
    params
  })
}
// 限时秒杀获取（一条）
export const requestSeckInfo = params => {
  return axios({
    url: baseUrl + "/api/seckinfo",
    method: "get",
    params
  })
}

// 限时秒杀修改
export const requestSeckEdit = params => {
  return axios({
    url: baseUrl + "/api/seckedit",
    method: "post",
    data:qs.stringify(params)
  })
}

// 限时秒杀删除
export const requestSeckDelete = params => {
  return axios({
    url: baseUrl + "/api/seckdelete",
    method: "post",
    data:qs.stringify(params)
  })
}

