var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-weibo-to-pics');

describe('next/weiboToPics', function () {

  it('nx.weiboToPics', function () {
    var obj = {
      "pics": {
          "pic_2": {
              "width": 640,
              "size": 95205,
              "ret": 1,
              "height": 1138,
              "name": "pic_2",
              "pid": "xx1"
          },
          "pic_1": {
              "width": 746,
              "size": 103572,
              "ret": 1,
              "height": 594,
              "name": "pic_1",
              "pid": "xx2"
          }
      }
    };

    var pics = obj.pics;
    var rs = nx.weiboToPics(pics);

    // console.log(rs);

    assert.equal(rs instanceof Array, true);
    assert.equal(rs.length, 2);
    assert.deepEqual(rs, [
      {
        "width": 746,
        "size": 103572,
        "ret": 1,
        "height": 594,
        "name": "pic_1",
        "pid": "xx2"
      },
      {
        "width": 640,
        "size": 95205,
        "ret": 1,
        "height": 1138,
        "name": "pic_2",
        "pid": "xx1"
      }
    ]);

  });

});
