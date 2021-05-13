# next-weibo-to-pics
> Sina weibo response to array.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-weibo-to-pics
```

## usage
```js
import '@jswork/next-weibo-to-pics';

const html = `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript">document.domain="sina.com.cn";</script>
{"code":"A00006","data":{"count":1,"data":"eyJ1aWQiOjM2NjE4MzI4MDMsImFwcCI6Im1pbmlibG9nIiwiY291bnQiOjEsInRpbWUiOjE2MjA4ODIyNTQuNTMzLCJwaWNzIjp7InBpY18xIjp7IndpZHRoIjoyMDAsInNpemUiOjkzODksInJldCI6MSwiaGVpZ2h0IjoyMDAsIm5hbWUiOiJwaWNfMSIsInBpZCI6ImRhNDMyMjYzZ3kxZ3FncHUzdTBhbWoyMDVrMDVrM3loIn19fQ==","pics":{"pic_1":{"width":200,"size":9389,"ret":1,"height":200,"name":"pic_1","pid":"da432263gy1gqgpu3u0amj205k05k3yh"}}}}`;

const items = nx.weiboToPics(html);
/*
[
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
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-weibo-to-pics/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-weibo-to-pics
[version-url]: https://npmjs.org/package/@jswork/next-weibo-to-pics

[license-image]: https://img.shields.io/npm/l/@jswork/next-weibo-to-pics
[license-url]: https://github.com/afeiship/next-weibo-to-pics/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-weibo-to-pics
[size-url]: https://github.com/afeiship/next-weibo-to-pics/blob/master/dist/next-weibo-to-pics.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-weibo-to-pics
[download-url]: https://www.npmjs.com/package/@jswork/next-weibo-to-pics
