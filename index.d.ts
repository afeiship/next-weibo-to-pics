interface ResponseItem {
  width: number;
  size: number;
  ret: number;
  height: number;
  name: string;
  pid: string;
  format: string;
  url: string;
}

interface Options {
  baseURL?: string;
}

interface NxStatic {
  weiboToPics(html: string, opts?: Options): ResponseItem[];
}
