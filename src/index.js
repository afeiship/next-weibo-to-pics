(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { baseURL: 'https://tva1.sinaimg.cn' };
  var JSON_RE = /\{.*\}/;

  nx.weiboToPics = function (inResponse, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var matches = JSON_RE.exec(inResponse);
    var response = JSON.parse(matches[0]);
    var pics = nx.get(response, 'data.pics', {});
    return nx.map(pics, (_, value) => {
      var pid = value.pid;
      value.type = pid.charAt(21) === 'g' ? 'gif' : 'jpg';
      value.url = [options.baseURL, '/large/', pid, '.', value.type].join('');
      return value;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weiboToPics;
  }
})();
