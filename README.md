# next-weibo-to-pics
> Sina weibo pics to array.

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

// input
const obj = {
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


// output:
[
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
]

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
