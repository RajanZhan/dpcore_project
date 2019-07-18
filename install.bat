@echo off
call npm config set registry https://registry.npm.taobao.org  
call npm i yarn -g 
call git clone git@github.com:RajanZhan/dpcore-core
call npm i @types/node 
call tsc 
call node ./bin/dpcore-core/devTool/cppackage.js
call cd bin
call yarn install  
call cd ../