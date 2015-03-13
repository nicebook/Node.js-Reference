var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function () {
  gulp.src('src/less/**/*.less')
    .pipe(watch('src/less/**/*.less'))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('default', ['watch']);