# modify environment setting
PATH += node_modules/.bin

.PHONY: clean install inject start build ngdoc;

# just for production
all: clean build;

clean:
	gulp clean;
	
install:
	npm install --registry https://registry.npm.taobao.org;
	bower install;
	
inject:
	gulp src-inject;	

start:
	gulp server --live-reload;

# production static asset prepare
build:
	gulp image --production;
	gulp fonts --production;
	gulp src-inject-pro --production;

# karma unit test
karma:
	gulp src-inject-karma;
	karma start --single-run;

# generate current project document
ngdoc:
	gulp ngdoc;

# 合并压缩后，文件tar包
package:
	gulp package;

# 部署生产环境
deploy:
	ansible-playbook ansible/site.yml;