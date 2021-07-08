const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')
const concat = require('gulp-concat')

// Utilidades de CSS
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')

// Utilidades JS
const terser = require('gulp-terser-js')
const rename = require('gulp-rename')

function css() {
    return src('./src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') )
}

function javascript() {
    return src('./src/js/app.js')
        .pipe( concat('bundle.js') )
        .pipe( dest('./build/js') )
}

function imagenes() {
    return src('./src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Imagen minificada'}) )
}

function versionWebp() {
    return src('./src/img/**/*')
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Imagenes en Version WebP listas'}) )
}

function watchArchivos() {
    watch('./src/scss/**/*.scss', css)
    watch('./src/js/**/*.js', javascript)
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);