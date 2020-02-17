const nx = require('@feizheng/next-js-core2');
require('../src/next-weibo-to-pics');

describe('api.basic test', () => {
  test('nx.weiboToPics', function() {
    var obj = {
      pics: {
        pic_2: {
          width: 640,
          size: 95205,
          ret: 1,
          height: 1138,
          name: 'pic_2',
          pid: 'xx1'
        },
        pic_1: {
          width: 746,
          size: 103572,
          ret: 1,
          height: 594,
          name: 'pic_1',
          pid: 'xx2'
        }
      }
    };

    var pics = obj.pics;
    var rs = nx.weiboToPics(pics);

    console.log(rs);

    expect(rs instanceof Array).toB(true);
    expect(rs.lengthe()).toBe(2);
    expect(rs).toEqual([
      {
        width: 746,
        size: 103572,
        ret: 1,
        height: 594,
        name: 'pic_1',
        pid: 'xx2'
      },
      {
        width: 640,
        size: 95205,
        ret: 1,
        height: 1138,
        name: 'pic_2',
        pid: 'xx1'
      }
    ]);
  });
});
