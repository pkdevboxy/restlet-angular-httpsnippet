'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
 
gulp.task('browserify', function() {
    return browserify('./src/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('restlet-angular-httpsnippet.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));

});

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});


gulp.task('default', ['lint','browserify']);