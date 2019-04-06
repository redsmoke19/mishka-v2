module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./dev/static/styles/**/*.scss', $.gulp.series('styles:dev'));
  });
};