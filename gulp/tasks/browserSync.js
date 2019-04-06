module.exports = function() {
  $.gulp.task('browserSync', function() {
    $.browserSync.init({
      server: './build'
    });
  });
};