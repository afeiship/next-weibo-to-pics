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
          format: 'jpg',
          url: 'https://tva1.sinaimg.cn/large/da432263gy1gqgpu3u0amj205k05k3yh.jpg'
        }
      ]);
    });


    test('bad response condition should get emtpy array', ()=>{
      const html = `'    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <script type="text/javascript">document.domain="sina.com.cn";</script>\n{"code":"A20001","data":{"count":-1,"data":"eyJhcHAiOiJtaW5pYmxvZyIsImNvdW50IjotMSwidGltZSI6MTYyMDg4OTIxOC4xMiwicGljcyI6eyJwaWNfMSI6eyJyZXQiOi0xLCJuYW1lIjoicGljXzEifX19","pics":{"pic_1":{"ret":-1,"name":"pic_1"}}}}'`;

      const items = nx.weiboToPics(html);
      expect(items).toEqual([])
    })

  });
})();
