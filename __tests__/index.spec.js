(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.weiboToPics should get array', function () {
      const html = `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript">document.domain="sina.com.cn";</script>
{"code":"A00006","data":{"count":1,"data":"eyJ1aWQiOjM2NjE4MzI4MDMsImFwcCI6Im1pbmlibG9nIiwiY291bnQiOjEsInRpbWUiOjE2MjA4ODIyNTQuNTMzLCJwaWNzIjp7InBpY18xIjp7IndpZHRoIjoyMDAsInNpemUiOjkzODksInJldCI6MSwiaGVpZ2h0IjoyMDAsIm5hbWUiOiJwaWNfMSIsInBpZCI6ImRhNDMyMjYzZ3kxZ3FncHUzdTBhbWoyMDVrMDVrM3loIn19fQ==","pics":{"pic_1":{"width":200,"size":9389,"ret":1,"height":200,"name":"pic_1","pid":"da432263gy1gqgpu3u0amj205k05k3yh"}}}}`;

      const items = nx.weiboToPics(html);
      expect(items).toEqual([
        {
          width: 200,
          size: 9389,
          ret: 1,
          height: 200,
          name: 'pic_1',
          pid: 'da432263gy1gqgpu3u0amj205k05k3yh',
          type: 'jpg',
          url: 'https://tva1.sinaimg.cn/large/da432263gy1gqgpu3u0amj205k05k3yh.jpg'
        }
      ]);
    });
  });
})();
