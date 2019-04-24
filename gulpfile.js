var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require("watchify");
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}))
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    });

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

function bundle() {
    return watchedBrowserify.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
}

gulp.task('default', ['copy-html'], bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);

/*
// 使用tsify插件调用Browserify,而不是gulp-typescript
gulp.task('default', ['copy-html'], function () {
    return browserify({
        basedir: '.',
        debug: true, // 让tsify在输出文件里生成source maps
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js')) // 调用bundle后，我们使用source（vinyl-source-stream的别名）把输出文件命名为bundle.js
        .pipe(gulp.dest('dist'))
});
*/
