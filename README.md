# Angular-Boilerplate
![Build Status](https://img.shields.io/travis/bornkiller/angular-boilerplate/master.svg?style=flat)
![Coverage Report](http://img.shields.io/coveralls/bornkiller/angular-boilerplate.svg?style=flat)
![Package Dependency](https://david-dm.org/bornkiller/angular-boilerplate.svg?style=flat)
![Package DevDependency](https://david-dm.org/bornkiller/angular-boilerplate/dev-status.svg?style=flat)

A boilerplate for easier angularjs development, integrate with few necessary tools.

## Usage
Assume that, you already have nodejs environment as well as NPM. Also, you had installed globally bower, the individual browser side package manager. since v0.5.5, remove grunt dependency, if you need build task,  you can choose `gulp`, `webpack` or whatever you like.

Install dependencies first:

```shell
make install;
```

Now, you have enough environment for angular project development.

Pre-imported task based on gulp:

```shell
# start static server based on browser-sync
make tart;
# karma unit test
make karma;
# generate angular document
make ngdoc;
# ansible remote task
make deploy;
```

Some useful tools for development above. also, there's perhaps lots of tools necessary for you not imported, like `html2js`,  `concat` and so on. considering about simplifying project, I leave that standalone.

## Code split
+ 以二级菜单划分子模块,所有子模块不声明任何依赖
+ 二级子模块拥有独立`*.route.js`, `*.module.js`声明文件
+ 共享内容在`SHARE_MODULE`内部实现,模块内不包含路由(注意`拦截器`并不作为全局共享,而是全局配置)
+ 基准路由`LAYOUT_MODULE`单独模块

## 应用入口文件
+ 第三方模块统一在根模块引入,子模块无需单独引入,模式可以理解为`寄生`
+ 应用`config`内容在入口文件内部执行,主要包括`拦截器`, `Provider`两种类型
+ 应用`run`内容在入口内部执行,主要内容自行考量
+ 需求进一步开发,尽量避免直接改动应用入口文件
+ 应用入口文件仅依赖模块,`LAYOUT_MODULE`, `SHARE_MODULE`, `PAGE_MODULE`,避免过多子模块入口文件依赖暴涨,避免混乱
+ `LAYOUT_MODULE`主要包括`登录`, `注册`, `主体布局`三部分组成,仅`controller`使用内敛模式
+ `SHARE_MODULE`不再继续内部切割,允许文件依赖较多
+ `PAGE_MODULE`仅作为子模块统一出口文件,类似于`barrel`使用方式

## 考量
+ `angularjs`本身并不是`ES6`模块化的产物,第三方模块同样,所以为减少`webpack`复杂度
+ 不少`none-angularjs`模块符合`ES6`模块化规范,顺利引入可以减少代码维护难度

## Attention
`karma.conf.js` provided, give you better test experience when use webstorm, a great web develop IDE.
Before start test, execute `gulp src-inject-karma` inject lib files first. 
Continuous sample provided, and you should modify the badge URL for your own repo, and start travis-ci
https://travis-ci.org/ and http://coveralls.io/ by yourself.

## Contact
**Email: hjj491229492@hotmail.com**