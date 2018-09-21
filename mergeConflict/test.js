var gulp = require('gulp'),
  connect = require('gulp-connect');

var test = true;

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['webserver']);
