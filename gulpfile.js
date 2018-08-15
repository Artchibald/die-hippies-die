// /////////////////////////////
// REQUIRED
// /////////////////////////////
// declare gulp and plugin dependencies
'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    //uncss = require('gulp-uncss'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename');
    



// /////////////////////////////
// SCRIPTS TASKS
// /////////////////////////////
gulp.task('minifyAll', function() {


    
    // C S S /////////////////////////////
    // grab css origin
     // gulp.src('./src/assets/css/*.scss')
     // //add 'min' to the minified version filename
     // .pipe(rename({suffix:'.min'}))
     // //console log the changes to the css
     // .pipe(cleanCSS({debug: true}, function(details) {
     // console.log(details.name + ': ' + details.stats.originalSize);
     // console.log(details.name + ': ' + details.stats.minifiedSize);
     // }))
     // //autoprefixer adds all webkits automatically for maximum browser support
     // .pipe(autoprefixer({
     //        browsers: ['last 2 versions'],
     //        cascade: false
     //    }))
     // // compress sass into minifed css
     // .pipe(sass({
     //    outputStyle: 'compressed'
     // }))
     // //put the compressed css into new distination folder
     // .pipe(gulp.dist('./dist/assets/css/'));






    return gulp.src('./src/assets/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass(outputStyle: 'compressed'))
    .pipe(gulp.dest('./dist/assets/css'));





     
     // Prefixed bootstrap css grab and deliver
     // gulp.src('./src/css/prefixed-bootstrap.scss')
     // .pipe(sass({
     //    outputStyle: 'compressed'
     // }))
     // .pipe(gulp.dist('./dist/css/'));
     // Grab IE only stylesheet
     // gulp.src('./src/css/all-ie-only.scss')
     // .pipe(sass({
     //    outputStyle: 'compressed'
     // }))
     // .pipe(gulp.dist('./dist/css/'));
     // Remove all unused CSS
    // return gulp.src('./dist/css/*')
    //     .pipe(uncss({
    //         html: ['./dist/index.html']
    //     }))
    //     .pipe(gulp.dist('./dist/css/'));



     // JS /////////////////////////////
     //Grab js origin
     gulp.src('./src/assets/js/main.js')
     //rename minified js file with 'min' in it
     .pipe(rename({suffix:'.min'}))
     //minify js
     .pipe(uglify())
     //put js in dist
     .pipe(gulp.dist('./dist/assets/js/'));



     // H T M L /////////////////////////////
     //move index.html to dist
     gulp.src('./src/*.html')
     .pipe(gulp.dist('./dist/'));



     // I M A G E S /////////////////////////////
     //move and minify images
     gulp.src('src/assets/img/*/*')
     .pipe(imagemin())
     .pipe(gulp.dist('dist/assets/img'));



     // F O N T S  /////////////////////////////
     //move fonts
     gulp.src('./src/assets/fonts/*/*')
     .pipe(gulp.dist('./dist/assets/fonts'));
}); 


// /////////////////////////////
// DEFAULT TASKS
// /////////////////////////////
// default task runner
gulp.task( 'default', ['minifyAll']);