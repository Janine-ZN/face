# face
> 人脸识别前端页面，使用vue-cli脚手架，sass预处理语言

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 滞留问题
路由 #

### element-ui使用
1. 安装 element-ui 组件库 `npm i element-ui -S`
2. 在 main.js 中引入 element-ui
```
// 导入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用 element-ui
Vue.use(ElementUI);
```
