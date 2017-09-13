export function hasScrollToBtm() {
  const scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const height = document.documentElement.clientHeight || document.body.clientHeight;
  console.log('最大滚动距离 => ', scrollHeight - height, '已经滚动 => ', scrolltop);
  return scrollHeight - height === scrolltop;
}