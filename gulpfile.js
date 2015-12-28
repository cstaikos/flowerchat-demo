var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');
var vueify = require('vueify')
var nodemon = require('gulp-nodemon');


gulp.task('build', function() {
	// copy index.ejs to public directory
	gulp.src('./src/index.ejs')
	  .pipe(gulp.dest('./public'));
	// build + vueify and send file to public directory
	gulp.src('./src/main.js')
		.pipe(browserify({ transform: 'vueify', debug:true}))
		.pipe(gulp.dest('./public'));

});

gulp.task('watch', function() {
		// watch for changes in src to rebuild
		gulp.watch('./src/**/*.*', ['build']);
		// watch for chnages in public directory to reload browser
		gulp.watch('./public/**/*.*').on('change', browserSync.reload);
});

// server from static html files
gulp.task('browser-sync-static', ['build','watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

// start express using nodemon with autoreload
gulp.task('nodemon', function () {
  nodemon({
    script: 'app.js'
  , ext: 'js'
  , ignore: ['main.js'] // we ignore this to avoid nodemon reload everytime and as it is not required by express
  })
})

gulp.task('browser-sync-express', ['build','watch', 'nodemon'], function() {
    browserSync.init({
        proxy: "localhost:9090"
    });
});

gulp.task('default', ['browser-sync-express']);

