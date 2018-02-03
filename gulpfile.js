const gulp        = require('gulp')
const pug         = require('gulp-pug')
const stylus      = require('gulp-stylus')
const connect     = require('gulp-connect')
const imagemin    = require('gulp-imagemin')
const minify      = require('gulp-minify')

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

gulp.task('compress', function() {
    gulp.src('./src/assets/script/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./out/assets/script/'))
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch(['./src/*.pug', './src/partials/*.pug', './src/layouts/*.pug'], ['pug'])
    gulp.watch(['./src/assets/styles/*.styl'], ['stylus'])
    gulp.watch(['./src/assets/script/*.js'], ['compress'])
})

gulp.task('serve', function() {
    connect.server({
        root: './out',
        livereload: true
    })
})

gulp.task('build', ['pug', 'stylus', 'imagemin', 'compress'])
gulp.task('server', ['serve','watch'])
