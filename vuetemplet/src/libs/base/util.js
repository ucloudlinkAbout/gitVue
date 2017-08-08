/**
 * Created by wang.ding on 2017/8/7.
 * 工具类
 */
const util = {
  /**
   * Created by wang.ding on 2017/8/7.
   * 工具类
   * 根据值移除数组中的某个元素（仅仅针对非复杂对象的数组）
   * @param {array} dataList 数组
   * @param {string} value 值
   * @return {array} data 数组的值
   */
  arrRemoveByValue(dataList, value) {
    if (dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i] === value) {
          dataList[i] = dataList[i + 1];
        }
      }
      dataList.length--;
      return dataList;
    }
    return dataList
  },

}
