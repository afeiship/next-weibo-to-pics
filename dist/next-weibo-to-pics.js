/*!
 * name: @feizheng/next-weibo-to-pics
 * description: Sina weibo pics to array.
 * url: https://github.com/afeiship/next-weibo-to-pics
 * version: 1.0.0
 * date: 2020-02-17 18:08:14
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.weiboToPics = function(inPics) {
    var index;
    var result = [];

    nx.forIn(inPics, function(key, value) {
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

//# sourceMappingURL=next-weibo-to-pics.js.map
