import nx from '@jswork/next';

const defaults = { baseURL: 'https://tva1.sinaimg.cn' };
const JSON_RE = /\{.*\}/;

nx.weiboToPics = function (inResponse, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  var matches = JSON_RE.exec(inResponse);
  var response = JSON.parse(matches[0]);
  var pics = nx.get(response, 'data.pics', {});
  var count = nx.get(response, 'data.count');
  if (count === -1) return [];
  return nx.map(pics, (_, value) => {
    var pid = value.pid;
    value.format = pid.charAt(21) === 'g' ? 'gif' : 'jpg';
    value.url = [options.baseURL, '/large/', pid, '.', value.format].join('');
    return value;
  });
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.weiboToPics;
}

export default nx.weiboToPics;
