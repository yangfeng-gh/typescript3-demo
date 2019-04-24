# ts2 demo

## Browserify
把这个工程由Node.js环境移到浏览器环境里

## tsify
tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。

## vinyl-source-stream
inyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做 vinyl。

## Watchify
Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。

## Babel
Babel是个十分灵活的编译器，将ES2015及以上版本的代码转换成ES5和ES3。 你可以添加大量自定义的TypeScript目前不支持的转换器。

## Uglify
Uglify帮你压缩代码，将花费更少的时间去下载它们。