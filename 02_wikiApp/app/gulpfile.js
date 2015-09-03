// gulpfile.js
var gulp = require('gulp');
var browserify = require('browserify');

var OPTION = {
  browserify: {
    src: './src/js/App.js',
    dest: './dist/',
    watch: false,
    uglify: false
  }
};

gulp.task('browserify', function () {
  return browserify(OPTION.browserify);
});

gulp.task('copy', function() {
  return gulp.src (
    ['src/*.html', 'src/css/*.css'],
    { base: 'src' }
  )
  .pipe(gulp.dest('dist'))
});

gulp.task('default', ['browserify', 'copy']);