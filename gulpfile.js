var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-ruby-sass');
var autoprefixer    = require('gulp-autoprefixer');
var cleanCSS        = require('gulp-clean-css');
var rename          = require('gulp-rename');
var header          = require('gulp-header');
var footer          = require('gulp-footer');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var path            = require('path');
var inject          = require('gulp-inject');
var livereload      = require('gulp-livereload');
var fs              = require('fs');

/**
 * Compile styles
 */
gulp.task('styles', function() {
	return sass( './scss/**/*.scss' )
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('dist'))
	.pipe(livereload());
});

/**
 * Concatenate scripts
 */
gulp.task('scripts', function(){
<<<<<<< HEAD
  return gulp.src('./js/*.js')
  .pipe(concat('frontend.js'))
  .pipe(uglify())
  .pipe(rename('frontend.min.js'))
  .pipe(gulp.dest('dist'))
=======
	return gulp.src('./js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	// .pipe(header(fs.readFileSync('js/header.txt', 'utf8')))
	// .pipe(footer(fs.readFileSync('js/footer.txt', 'utf8')))
	.pipe(rename('scripts.min.js'))
	.pipe(gulp.dest('dist'))
>>>>>>> feature/120716-help-desk-lander
});

/**
 * Watch task
 */
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['styles']);
});

/**
 * Build scripts and styles for deploy
 */
gulp.task( 'build', ['scripts', 'styles' ]);