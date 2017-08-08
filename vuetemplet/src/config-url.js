/**
 * Created by wang.ding on 2017/8/8.
 */
var SystemGlobe = window.SystemGlobe || {};
//扫描开始标记
//@scanStart

SystemGlobe.url = {
  // 查询字典
  //暂定项目名为 @project
  dictionary: {
    queryByCode: '/project/dictionary/queryDicByCode',
    queryByType: '/project/distionary/queryDictionaryType'
  },
  // 登录相关
  loginforoms: {
    loginByBssaccount: '/project/partner/SassLogin',
    login: '',
    login: ''
  },
  // 各个页面相关接口
  // page1
  page1: {
    getPageinfo: '/project/pageinfo',
    deletePageInfo: '/project/pageinfo/delete',
    changePageInfo: '/project/pageinfo/update',
    addPageInfo: '/project/pageinfo/save',
  },
  pagen: {
    getPageinfon: '/project/pageinfon',
    deletePageInfon: '/project/pageinfon/delete',
    changePageInfon: '/project/pageinfon/update',
    addPageInfon: '/project/pageinfon/save',
  }
};
//@scanEnd
//扫描结束标记
