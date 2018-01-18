const gulp        = require('gulp')
const pug         = require('gulp-pug')
const stylus      = require('gulp-stylus')
const connect     = require('gulp-connect')
const imagemin    = require('gulp-imagemin')

gulp.task('stylus', function() {
    gulp.src('./src/assets/styles/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./out/assets/styles/'))
        .pipe(connect.reload())
});

gulp.task('pug', function() {
    gulp.src('./src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./out'))
        .pipe(connect.reload())
});

gulp.task('imagemin', function() {
    gulp.src('./src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./out/assets/img/'))
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch(['./src/*.pug', './src/partials/*.pug', './src/layouts/*.pug'], ['pug'])
    gulp.watch(['./src/assets/styles/*.styl'], ['stylus'])
})

gulp.task('serve', function() {
    connect.server({
        root: './out',
        livereload: true
    })
})

gulp.task('build', ['pug', 'stylus', 'imagemin'])
gulp.task('server', ['serve','watch'])
