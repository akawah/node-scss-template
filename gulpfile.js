"use strict";

const { src, dest, parallel, series} = require('gulp'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    gcmq = require('gulp-group-css-media-queries'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    //rsync = require('gulp-rsync'),
    del = require('del');

function html() {
    return src('dev/*.html', { base: 'dev' })
        .pipe(plumber())
        .pipe(dest('pub'));
}

function css() {
    return src('dev/css/**/*.css', {base: 'dev/css'})
        .pipe(plumber())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(gcmq())
        .pipe(dest('pub/css'))
        .pipe(dest('dev/css'))
        .pipe(cssnano({ preset: 'default' }))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest('pub/css'));
}

function js() {
    return src('dev/js/**/*.js', {base: 'dev/js'})
        .pipe(plumber())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(gulp.dest('pub/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest('pub/js'));
}

function images() {
    return src('dev/img/**/*.{jpg,png,svg,gif,ico}').pipe(dest('pub/img'));
}

function fonts() {
    return src('dev/fonts/**/*.{eot,svg,ttf,woff,woff2}').pipe(dest('pub/fonts'));
}

function clean() {
    return del('./pub');
}

function deploy() {
    return gulp.src('pub/**/*')
        .pipe(rsync({
            root: 'pub',
            hostname: 'user@1.2.3.4',
            destination: '/path/to/public_html/'
        }));
}

const pub = series(clean, parallel(html, css, js, images, fonts));

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
//exports.deploy = deploy;
exports.default = pub;
