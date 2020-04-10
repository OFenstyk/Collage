<<<<<<< HEAD
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});
=======
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});
>>>>>>> 9306d6a61d75e6beae11d73c31b08554553d6912
