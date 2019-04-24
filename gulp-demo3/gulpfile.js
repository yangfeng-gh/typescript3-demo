var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  pages: ['src/*.html']
};

var watchedBrowserify = watchify(
  browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
);

function bundle() {
  return watchedBrowserify
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
}

gulp.task('copy-html', function() {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-html'], bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);

/*
现在代码已经用Browserify和tsify捆绑在一起了，我们可以使用Browserify插件为构建添加一些特性。
1. Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。
2. Babel是个十分灵活的编译器，将ES2015及以上版本的代码转换成ES5和ES3。 你可以添加大量自定义的TypeScript目前不支持的转换器。
3. Uglify帮你压缩代码，将花费更少的时间去下载它们。
 */
