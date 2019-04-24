var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

/*
首先安装Babelify和ES2015的Babel预置程序。 和Uglify一样，Babelify也会混淆代码，因此我们也需要vinyl-buffer和gulp-sourcemaps。 默认情况下Babelify只会处理扩展名为 .js，.es，.es6和.jsx的文件，因此我们需要添加.ts扩展名到Babelify选项。

我们需要设置TypeScript目标为ES2015。 Babel稍后会从TypeScript生成的ES2015代码中生成ES5。
*/