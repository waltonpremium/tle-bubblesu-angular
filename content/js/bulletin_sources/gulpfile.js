////////////////////////////////////////////////////////////
////                                                    ////
////     Author: John Makeev - makeev.john@gmail.com    ////
////                                                    ////
////     PROJECT: BULLETIN BOARD                        ////
////                                                    ////
////     BULLETIN APP GULP BUILD SCRIPT                 ////
////                                                    ////
////////////////////////////////////////////////////////////

// Parameters

// Files names
var fname_prebuild_app      = 'app.js';
var fname_prebuild_scripts  = 'scripts.min.js';
var fname_prebuild_styles   = 'styles.min.css';

var fname_build_script      = "bulletin_board.min.js";
var fname_build_styles      = "bulletin_board.min.css";

// Paths
var path_sources            = "./sources/";
var path_styles_root        = path_sources + "css/";
var path_app_root           = path_sources + "app/";
var path_app_enter_point    = path_app_root + "app.js";
var path_static_build       = "./build/";

// Prebuild files

var path_prebuild_app       = path_static_build + fname_prebuild_app;
var path_prebuild_scripts   = path_static_build + fname_prebuild_scripts;
var path_prebuild_styles    = path_static_build + fname_prebuild_styles;

// Publish targets
var publish_source = '../';
var publish_styles = '../../../theme/TleBs3/css/';

var scripts_list = [
    //path_sources + 'vendor/**/*.js',
    path_sources + 'plugins/**/*.js'
];

var styles_list = [
    path_styles_root + '**/*.sass'
];

// Wacth lists
var watch_app_list = [
    path_app_root + '**/*.js',
    path_app_root + '**/*.ract'
];

var watch_styles = [
    path_styles_root + '**/*.sass',
    path_styles_root + '**/*.css'
];

var watch_publish_js    = [path_prebuild_app];
var watch_publish_css   = [path_prebuild_styles];




// Requirements
var gulp        = require('gulp');
var debug       = require('gulp-debug');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var watchify    = require('watchify');
var sm          = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');



// GULP dependent tasks
gulp.task('app_build', function() {
    return browserify(path_app_enter_point,{
      debug: true })
        .bundle()
        .pipe(source(fname_prebuild_app))
        .pipe(gulp.dest(path_static_build));
});

gulp.task('scripts_build', function() {
    console.log("SCRIPTS REBUILDING...");
    return gulp.src(scripts_list)
        .pipe(sm.init({ loadMaps: true }))
        .pipe(concat(fname_prebuild_scripts))
        .pipe(sm.write())
        .pipe(gulp.dest(path_static_build));
});

gulp.task('styles_build', function() {
    return gulp.src(styles_list)
        .pipe(sm.init({ loadMaps: true }))
        .pipe(sass({
            sourceComments: 'normal',
            errLogToConsole: true
        }))
        .pipe(concat(fname_prebuild_styles))
        .pipe(sm.write())
        .pipe(gulp.dest(path_static_build));
});

gulp.task('publish_app', function() {
    return gulp.src(watch_publish_js)
        .pipe(concat(fname_build_script))
        .pipe(gulp.dest(publish_source));
});

gulp.task('publish_styles', function() {
    return gulp.src([path_prebuild_styles])
        .pipe(concat(fname_build_styles))
        .pipe(gulp.dest(publish_styles));
});





// GULP script tasks

gulp.task('dev', ['styles_build', 'app_build', 'publish_app', 'publish_styles']);

gulp.task('watch', function () {

    //gulp.watch( scripts_list,    ['scripts_build']);
    gulp.watch( watch_app_list,  ['app_build']);
    gulp.watch( watch_styles,    ['styles_build']);

    gulp.watch( watch_publish_js,    ['publish_app']);
    gulp.watch( watch_publish_css,   ['publish_styles']);

});


// GULP DEFAULT TASK

gulp.task('default', ['dev', 'watch']);