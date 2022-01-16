const gulp = require('gulp'),
    webpack = require('webpack-stream'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    purify = require('gulp-purify-css'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync').create(),
    injectSvg = require('gulp-inject-svg'),
    pug = require('gulp-pug');

const injectSvgOptions = { base: '/' };

// BrowserSync Reload
function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('clearCache', function (done) {
    return cache.clearAll(done);
});


// css
gulp.task('css', (done) => {
    gulp.src('./src/scss/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules']
        }))
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(autoprefixer({
            cascade: false,
            remove: false,
            grid: true
        }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
    done();
});

// css purify
gulp.task('purify-css', (done) => {
    gulp.src('./dist/css/styles.css')
        .pipe(purify([
            './src/**/*.html',
            './**/*.php']
        ))
        .pipe(cleanCSS({
            level: {
                1: { specialComments: 0 }
            }
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/css/'))
    done();
});

// scripts
gulp.task('scripts', (done) => {
    gulp.src('./src/js/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/js/'));
    done();
});

//pug
gulp.task('pug', (done) => {
    gulp.src('./src/pug/pages/*.pug')
        .pipe(pug())
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest('./dist/html'));
    done();
});

// images
gulp.task('images', (done) => {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
    done();
});

// fonts
gulp.task('fonts', (done) => {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
    done();
});

gulp.task('styles', gulp.series('css', 'purify-css'));
gulp.task('default', gulp.series('styles', 'scripts', 'pug'));
gulp.task('all', gulp.series('styles', 'scripts', 'images', 'fonts', 'pug'));

// watch
gulp.task('watch', (done) => {
    browserSync.init({
        server: {
            index: '/dist/html/index.html'
        },
    });
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug', reload));
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./src/js/**/*.js', gulp.series('scripts', 'clearCache', reload));
    gulp.watch('./src/img/**/*', gulp.series('images'));
    gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
    done()
});

