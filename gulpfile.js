let gulp = require('gulp');
let deploy = require('gulp-gh-pages');

// this will push build dir to gh-pages
gulp.task('deploy', function () {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});