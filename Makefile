# modify environment setting
PATH += node_modules/.bin

.PHONY: clean install start build ngdoc;

# just for production
all: clean build;

clean:
	@rm -rf dist/
	
install:
	@npm install --registry https://registry.npm.taobao.org;

start:
	@webpack-dev-server --config webpack.dev.js

# production static asset prepare
build:
	@webpack --config webpack.prod.js

# karma unit test
karma:
	@karma start --single-run;

# generate current project document
# pending
ngdoc:
	@gulp ngdoc;

# 合并压缩后,文件tar包,此处明显使用gulp更符合语义化
package:
	@gulp package;

# 部署生产环境
deploy:
	@ansible-playbook ansible/site.yml;