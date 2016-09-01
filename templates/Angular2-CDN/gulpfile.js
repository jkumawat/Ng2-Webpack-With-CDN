/// <binding BeforeBuild='typescript:compile' AfterBuild='module:copy' />

var gulp = require('gulp');
var path = require('path');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

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

gulp.task('typescript:compile', function () {
    var tsProject = ts.createProject({
        target: 'es5',
        moduleResolution: 'node',
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    });

    return gulp.src([
        path.join(paths.app, '**/*.ts')
    ])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.app));
});
