/*!
 * name: @jswork/next-weibo-to-pics
 * description: Sina weibo pics to array.
 * homepage: https://github.com/afeiship/next-weibo-to-pics
 * version: 1.0.0
 * date: 2020-11-22 16:47:50
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.weiboToPics = function (inPics) {
    var index;
    var result = [];

    nx.forIn(inPics, function (key, value) {
      //key:"pic_1".slice(4) -> 1
      index = key.slice(4) - 1;
      result[index] = value;
    });

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weiboToPics;
  }
})();
