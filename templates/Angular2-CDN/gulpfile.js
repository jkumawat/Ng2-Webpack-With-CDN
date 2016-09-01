/// <binding />
var settings = require('./appsettings.json');

var gulp = require('gulp');
var merge = require('merge-stream');
var webpack = require('webpack');
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');
var ng2Template = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');

var paths = {};
paths.webroot = path.join(__dirname, 'wwwroot');
paths.app = path.join(paths.webroot, 'app');
paths.ng2App = path.join(__dirname, '..', 'Angular2Spa');
paths.ng2AppShared = path.join(paths.ng2App, 'node_modules', 'shared');

gulp.task('module:copy', function () {
    return gulp.src([
            path.join(paths.app, '**')
    ])
        .pipe(gulp.dest(paths.ng2AppShared));
});
