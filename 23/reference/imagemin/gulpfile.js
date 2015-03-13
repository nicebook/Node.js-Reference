var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true 
    }))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['images']);