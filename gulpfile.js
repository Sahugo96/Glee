const { src, dest } = require('gulp');
const cli = require('gulp-cli');
const scss = require('gulp-sass');



function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(dest('app/css'))

}

exports.styles = styles;