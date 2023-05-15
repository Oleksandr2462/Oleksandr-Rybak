const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return gulp
        .src('./my-project.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
}

exports.scss = scss;