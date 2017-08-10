/**
 * Created by wang.ding on 2017/8/7.
 * 工具类
 */
const util = {
  /**
   * Created by wang.ding on 2017/8/10.
   * 工具类
   * 数组根据其中某个值进行冒泡排序
   * @param {object} dataList 数组
   * @param {object} k 排序基准值
   * @param {object} desc 升序还是降序
   * @return {undefined || array} 数组的值或者为空
   */
  arraySortByTag(dataList, k, desc) {
      if (typeof  dataList !== 'object') {
          return;
      }
      var bubbleSort = function (a, b) {
          if (a === undefined) {
              return false;
          } else if (b === undefined) {
              return true;
          }
          return a > b;
      };
      if (k === undefined || k === '') {
          return;
      }
      for (let i = 0; i < dataList.length; i++) {
          for (let j = 0; i + j < dataList.length - 1; j++) {
              if (desc === false) {
                  if (bubbleSort(dataList[j][k], dataList[j + 1][k])) {
                      const dataCk = dataList[j];
                      dataList[j] = dataList[j + 1];
                      dataList[j + 1] = dataCk;
                  }
              } else {
                  if (bubbleSort(dataList[j + 1][k], dataList[j][k])) {
                    const dataCk = dataList[j];
                    dataList[j] = dataList[j + 1];
                    dataList[j + 1] = dataCk;
                  }
              }
          }
      }
      return dataList;
  },
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

exports.util = util;
