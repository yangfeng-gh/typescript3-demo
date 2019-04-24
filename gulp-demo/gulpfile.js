var gulp = require('gulp');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");

var watched = watchify(gulp.src('*.ts'))

function compile() {
  return watched.plugin(tsify).pipe(gulp.dest('.'));
}

gulp.task('default', compile);
watched.on('log', gutil.log);
