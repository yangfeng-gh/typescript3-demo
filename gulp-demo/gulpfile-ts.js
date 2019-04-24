var gulp = require('gulp');
var ts = require('gulp-typescript');
var combiner = require('stream-combiner2');
var gutil = require('gulp-util');
var merge = require('merge2');  // Requires separate installation

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function() {
  var combined = combiner.obj([
    tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
  ]);

  // 任何在上面的 stream 中发生的错误，都不会抛出，
  // 而是会被监听器捕获
  // combined.on('error', console.error.bind(console));
  combined.on('error', gutil.log);

  return combined;
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('lib/**/*.ts')
        .pipe(ts({
            declaration: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});

gulp.task('default', function () {
  return gulp.src('*.ts')
      .pipe(ts({
          noImplicitAny: true,
          outFile: 'output.js'
      }))
      .pipe(gulp.dest('built/local'));
});
