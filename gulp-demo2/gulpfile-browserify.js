var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

/*
这里增加了copy-html任务并且把它加作default的依赖项。 这样，当 default执行时，copy-html会被首先执行。 我们还修改了 default任务，让它使用tsify插件调用Browserify，而不是gulp-typescript。 方便的是，两者传递相同的参数对象到TypeScript编译器。

调用bundle后，我们使用source（vinyl-source-stream的别名）把输出文件命名为bundle.js。

测试此页面，运行gulp，然后在浏览器里打开dist/index.html。 你应该能在页面上看到“Hello from TypeScript”。

注意，我们为Broswerify指定了debug: true。 这会让 tsify在输出文件里生成source maps。 source maps允许我们在浏览器中直接调试TypeScript源码，而不是在合并后的JavaScript文件上调试。 你要打开调试器并在 main.ts里打一个断点，看看source maps是否能工作。 当你刷新页面时，代码会停在断点处，从而你就能够调试 greet.ts。
*/
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});