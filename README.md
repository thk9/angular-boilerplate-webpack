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

## Attention
`karma.conf.js` provided, give you better test experience when use webstorm, a great web develop IDE.
Before start test, execute `gulp src-inject-karma` inject lib files first. 
Continuous sample provided, and you should modify the badge URL for your own repo, and start travis-ci
https://travis-ci.org/ and http://coveralls.io/ by yourself.

## Contact
**Email: hjj491229492@hotmail.com**