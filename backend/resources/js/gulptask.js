var gulp        = requier('gulp'),
    gulp-stylus = require('gulp-stylus');

var path = {
    'stylusFile': ['path/to/stylus/**/!(_)*.styl']
};

gulp.task('stylus', function() {
    return gulp.src(path.stylusFile)
        .pipe(stylus({
            compress: true,
            use: [
                // 例
                // koutoSwiss(),
            ]
        }))
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(gulp.dest("public/css"));
});

gulp.task('watch-stylus', function(){
    gulp.watch(path.stylusFile, ['stylus']);
});