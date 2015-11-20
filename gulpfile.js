var http = require('http');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var ecstatic = require('ecstatic');
var lrserver = lr();

var livereloadport = 35729,
    serverport = 5001;

gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'))
        .pipe(refresh(lrserver));
});

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  http.createServer(ecstatic({ root: __dirname + '/build' })).listen(serverport);

  //Set up your livereload server
  lrserver.listen(livereloadport);
});


// Requires gulp >=v3.5.0
gulp.task('watch', function () {
    gulp.watch('src/**', ['scripts']);
});

gulp.task('default', ['scripts', 'serve', 'watch']);