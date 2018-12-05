# fis3-parser-translate-jst

## 安装

全局安装或者本地安装都可以。

```bash
npm install fis3-parser-translate-jst
```

## 启用

在 fis-conf.js 中加入以下代码。

```javascript
fis.match('/static/tmpl/**.jst', {
  parser: fis.plugin('translate-jst'),
  rExt: '.js'
}).match('/static/tmpl/**.{js, jst}', {
  isMod: true,
  packTo: '/static/components.js'
});
```
## 模板开发
hello.jst
```javascript
  var hellp = 'Hello';
  <div>
    <% if(hello){ %>
      <%=hello%>,<%=name%>
    <% } %>
  </div>
```
main.jst
```javascript
  var Hello = require('hello.jst');
  <div>
    <%=Hello({name:xu})%>
  </div>
```
