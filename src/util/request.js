import axios from "axios"
import qs from "qs"
import store from "../store"
import {
  warningAlert
} from "./alert"
import router from "../router"
const baseUrl = "/api"

//请求拦截
// axios.interceptors.request.use(config => {
//   if (config.url != baseUrl + '/api/userlogin') {
//     config.headers.authorization = store.state.user.token;
//   }
//   return config
// })

//响应拦截
// axios.interceptors.response.use(res => {
//   console.group("本次路径：" + res.config.url)
//   console.log(res)
//   console.groupEnd()

//   if (res.data.msg === "登录已过期或访问权限受限") {
//     warningAlert("登录已过期或访问权限受限")
//     router.push("/login");
//     return;
//   }
//   return res;
// })



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

//菜单某一个条数据
export const requestMenuDetail = params => {
  return axios({
    url: baseUrl + "/api/menuinfo",
    method: "get",
    params
  })
}
//菜单修改
export const requestMenuUpdate = params => {
  return axios({
    url: baseUrl + "/api/menuedit",
    method: "post",
    data: qs.stringify(params)
  })
}

//菜单删除
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
    params
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

//登录
export const requestLogin = params => axios({
  url: baseUrl + "/api/userlogin",
  method: "post",
  data: qs.stringify(params)
})

//分类添加
export const requestCateAdd = (params) => {
  var formData = new FormData()
  for (let i in params) {
    formData.append(i, params[i])
  }
  return axios({
    url: baseUrl + "/api/cateadd",
    method: "post",
    data: formData
  })
}
//分类列表
export const requestCateList = (params) => {
  return axios({
    url: baseUrl + "/api/catelist",
    method: "get",
    params: params
  })
}

//分类某一个条数据
export const requestCateDetail = params => {
  return axios({
    url: baseUrl + "/api/cateinfo",
    method: "get",
    params
  })
}
//分类修改
export const requestCateUpdate = params => {
  var formData = new FormData()
  for (let i in params) {
    formData.append(i, params[i])
  }
  return axios({
    url: baseUrl + "/api/cateedit",
    method: "post",
    data: formData
  })
}

//分类删除
export const requestCateDelete = params => {
  return axios({
    url: baseUrl + "/api/catedelete",
    method: "post",
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
    data: form
  })
}

// 商品总数（分页）
export const requestGoodsCount = params => {
  return axios({
    url: baseUrl + "/api/goodscount",
    method: "get",
    params
  })
}

// 商品列表
export const requestGoodsList = params => {
  return axios({
    url: baseUrl + '/api/goodslist',
    method: 'get',
    params
  })
}

// 商品获取（一条）
export const requestGoodsDetail = params => {
  return axios({
    url: baseUrl + "/api/goodsinfo",
    method: "get",
    params
  })
}

// 商品修改
export const requestGoodsUpdate = params => {
  let form = new FormData();
  for (let i in params) {
    form.append(i, params[i])
  }
  return axios({
    url: baseUrl + "/api/goodsedit",
    method: "post",
    data: form
  })
}

// 商品删除
export const requestGoodsDelete = params => {
  return axios({
    url: baseUrl + "/api/goodsdelete",
    method: "post",
    data: params
  })
}

// ======================================= 会员管理 ==========================
//会员管理列表
export const requestMemberList = () => axios({
  url: baseUrl + "/api/memberlist"
})

//会员详情
export const requestMemberDetail = params => axios({
  url: baseUrl + "/api/memberinfo",
  params
})

//会员修改
export const requestMemberUpdate = params => axios({
  url: baseUrl + "/api/memberedit",
  method: "post",
  data: qs.stringify(params)
})

//轮播图添加
export const requestBannerAdd = params => axios({
  url: baseUrl + "/api/banneradd",
  method: "post",
  data: params
})

//轮播图列表
export const requestBannerList = () => axios({
  url: baseUrl + "/api/bannerlist",
})

//轮播图详情
export const requestBannerDetail = params => axios({
  url: baseUrl + "/api/bannerinfo",
  params
})
//轮播图修改
export const requestBannerUpdate = params => axios({
  url: baseUrl + "/api/banneredit",
  method: "post",
  data: params
})

//轮播图删除
export const requestBannerDelete = params => axios({
  url: baseUrl + "/api/bannerdelete",
  data: params,
  method: "post"
})


//秒杀添加
export const requestSeckillAdd = params => axios({
  url: baseUrl + "/api/seckadd",
  method: "post",
  data: qs.stringify(params)
})

//秒杀列表
export const requestSeckillList = () => axios({
  url: baseUrl + "/api/secklist",
})

//秒杀详情
export const requestSeckillDetail = params => axios({
  url: baseUrl + "/api/seckinfo",
  params
})
//秒杀修改
export const requestSeckillUpdate = params => axios({
  url: baseUrl + "/api/seckedit",
  method: "post",
  data: qs.stringify(params)
})

//秒杀删除
export const requestSeckillDelete = params => axios({
  url: baseUrl + "/api/seckdelete",
  data: qs.stringify(params),
  method: "post"
})
