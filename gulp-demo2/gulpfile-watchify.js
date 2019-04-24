var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);

/*
共有三处改变，但是需要你略微重构一下代码。

将browserify实例包裹在watchify的调用里，控制生成的结果。
调用watchedBrowserify.on("update", bundle);，每次TypeScript文件改变时Browserify会执行bundle函数。
调用watchedBrowserify.on("log", gutil.log);将日志打印到控制台。
(1)和(2)在一起意味着我们要将browserify调用移出default任务。 然后给函数起个名字，因为Watchify和Gulp都要调用它。 (3)是可选的，但是对于调试来讲很有用。

现在当你执行gulp，它会启动并保持运行状态。 试着改变 main.ts文件里showHello的代码并保存。
*/