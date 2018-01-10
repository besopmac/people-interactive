var gulp        = require('gulp')
var pug         = require('gulp-pug')
var stylus      = require('gulp-stylus')
var browserSync = require('browser-sync').create() 

gulp.task('stylus', function() {
    gulp.src('./src/assets/styles/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./out/assets/styles/'))
});

gulp.task('pug', function() {
    gulp.src('./src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./out'))
});

gulp.task('assets-watch', ['pug', 'stylus'], function(done) {
    browserSync.reload()
    done()
})

gulp.task('watch', function() {
    gulp.watch(['./src/*.pug'], ['pug'])
    gulp.watch(['./src/assets/styles/*.styl'], ['stylus'])
})

gulp.task('build', ['pug', 'stylus'])
