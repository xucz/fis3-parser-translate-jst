/**
 * Created by xuchaozheng on 2017/2/22.
 */
module.exports = function (content, file, options) {
  if(typeof content !== 'string') {
    try {
      content = content.toString();
    } catch (e) {
      throw new Error('file type is error!');
    }
  }
  var fn = new Function('obj', "var p=[];with(obj||{}){p.push('" + content.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(eval("/((^|%>)[^\\t]*)'/g"), "$1\r").replace(eval("/\\t=(.*?)%>/g"), "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
  content = 'module.exports = ' + fn.toString();
  return content; // 处理后的文件内容
}