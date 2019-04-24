var gulp = require('gulp');
var watchify = require('watchify');
var tsify = require('tsify');

gulp.task('default', function() {
  gulp
    .src('*.ts')
    .plugin(tsify, { noImplicitAny: true })
    .pipe(gulp.dest('.'));
});
