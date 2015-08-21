var gulp = require('gulp');
var sass = require('gulp-sass');
var merge = require('merge-stream');

gulp.task('vendor', function() {
    var js = gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/materialize-css/bin/materialize.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'
    ])
        .pipe(gulp.dest('client/assets/js'));

    var css = gulp.src([
        'node_modules/materialize-css/bin/materialize.css'
    ])
        .pipe(gulp.dest('client/assets/css'));

    var font = gulp.src([
        'node_modules/materialize-css/font/**',
    ])
        .pipe(gulp.dest('client/assets/font'));

    return merge(js, css, font);
});

gulp.task('sass', function () {
    gulp.src('client/assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('client/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('client/assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['vendor', 'sass', 'watch']);
