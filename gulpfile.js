const { src, dest, watch, parallel, series } = require('gulp');

const scss            = require('gulp-sass');
const concat          = require('gulp-concat');
const autoprefixer    = require('gulp-autoprefixer');
const uglify          = require('gulp-uglify');
const imagemin        = require('gulp-imagemin');
const svgSprite       = require('gulp-svg-sprite');
const fileinclude     = require('gulp-file-include');
const del             = require('del');
const browserSync     = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function fileInclude() {
  return src('app/html/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function svgSprites() {
  return src('app/images/**/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../sprite.svg"
      }
    }
  }))
  .pipe(dest('app/sprite/'))
}

function images() {
  return src('app/images/**/*.*')
  .pipe(imagemin([
  imagemin.gifsicle({interlaced: true}),
  imagemin.mozjpeg({quality: 75, progressive: true}),
  imagemin.optipng({optimizationLevel: 5}),
  imagemin.svgo({
    plugins: [
      {removeViewBox: true},
      {cleanupIDs: false}
        ]
      })
  ]))
  .pipe(dest('dist/images'))
}

function cleanDist(){
  return del('dist')
}

function watching() {
  watch(['app/html/*.html'], fileInclude);
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/images/**.svg'], svgSprites);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

function build(){
  return src([
    'app/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

exports.browsersync = browsersync;
exports.fileInclude = fileInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.svgSprites = svgSprites;
exports.images = images;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.build = series(cleanDist, images, build);

exports.default = parallel(fileInclude, styles, scripts, svgSprites, browsersync, watching);