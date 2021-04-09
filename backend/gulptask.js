var gulp        = require('gulp'),
    gulp-stylus = require('gulp-stylus');

var path = {
    'stylusFile': ['app/resources/css/!(_)*.styl']
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
        .pipe(gulp.dest("app/resources/css/"));
});

gulp.task('watch-stylus', function(){
    gulp.watch(path.stylusFile, ['stylus']);
});