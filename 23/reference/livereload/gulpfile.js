var gulp = require('gulp');

var less = require('gulp-less');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

gulp.task('reload', function() {
  gulp.src('src/less/**/*.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('./build/css/'))
    .pipe(livereload());
});

gulp.task('default', ['reload']);