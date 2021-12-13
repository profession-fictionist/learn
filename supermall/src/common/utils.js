 // 防抖函数封装
 export function debouce(func, delay) {
   let timer = null;
   return function(...args) {
     if (timer) clearTimeout(timer);
     timer = setTimeout(() => {
       func.apply(this, args);
     }, delay);
   };
 }

 // setTimeout()的知识拓展
 // console.log('aaa');

 // setTimeout(()=>{
 //   console.log('bbb');
 // })
 // console.log('ccc');
 // 执行顺序：aaa -> ccc -> bbb


 //  正则表达式用于字符串匹配
 export function formatDate(date, fmt) {
   //  1.获取年份
   if (/(y+)/.test(fmt)) {
     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ' ').substr(4 - RegExp.$1.length))
   }
   //  2.获取
   let o = {
     'M+': date.getMonth() + 1,
     'd+': date.getDate(),
     'h+': date.getHours(),
     'm+': date.getMinutes(),
     's+': date.getSeconds()
   }
   for (let k in o) {
     if (new RegExp(`(${k})`).test(fmt)) {
       let str = o[k] + ''
       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
     }
   }
   return ftm
 }

 function padLeftZero(str) {
   return ('00' + str).substr(str.length)
 }