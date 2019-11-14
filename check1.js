// 校验中文
export let checkChinese = function(str) {
  return /[\u4e00-\u9fa5]/g.test(str)
}
// 校验英文
export let checkEnglish = function(str) {
  return /[A-Za-z]/g.test(str)
}
// 校验小写英文
export let checkLowerCaseEnglish = function(str) {
  return /[a-z]/g.test(str)
}
// 校验大写英文
export let checkUpperCaseEnglish = function(str) {
  return /[A-Z]/g.test(str)
}
// 校验数字
export let checkNumber = function(str) {
  return /\d/g.test(str)
}
// 把非中英文数字的字符过滤
export let filterEmoji = function(str) {
  return str.split(/[^a-zA-z\u4e00-\u9fa5\d]/).join('')
}

// 判断是否为手机号
export let isPoneAvailable = function(str) {
  return /^[1][0-9]{10}$/.test(str)
}

// 过滤表情
export let filterEmojis = function(str) {
  return str.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, '')
}

// 去除空格
export let removeAllSpace = function(str) {
  return str.replace(/\s+/g, '')
}
// 校验字符整个是否由中英文数字组成
export let checkCN = function(str) {
  return /^[a-zA-z\u4e00-\u9fa5\d]+$/.test(str)
}

// 不可输入的符号校验
export let invalidated = function(str) {
  return /[^\\/{}[\]&*^]/g.test(str)
}
