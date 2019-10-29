let imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    imgPATH = {
        "input": ["./dev/static/images/**/*.{png,jpg,gif,svg}",
            '!./dev/static/images/svg/*'],
        "output": "./build/static/images/"
    };

module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.output));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src(imgPATH.input)
            .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imageminJpegRecompress({
                    loops:4,
                    min: 70,
                    max: 75,
                    quality:'medium'
                }),
                imagemin.optipng(),
                imagemin.svgo(),
                imagemin.optipng({optimizationLevel: 3}),
                pngquant({quality: [0.65, 0.7], speed: 5})
            ], {
                verbose: true
            }))
            .pipe($.gulp.dest(imgPATH.output));
    });
};