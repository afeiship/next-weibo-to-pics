(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.weiboToPics = function (inPics) {
    var index, result = [];
    nx.each(inPics, function (key, value) {
      //key:"pic_1".slice(4) -> 1
      index = key.slice(4) - 1;
      result[index] = value;
    });
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weiboToPics;
  }

}());
