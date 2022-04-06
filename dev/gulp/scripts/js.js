const
	{ src, dest } = require('gulp'),
	browserSync = require('browser-sync').create(),
	uglify = require('gulp-uglify-es').default;
const _uglify = {
	compress: false,
	pathFrom: '../js/**/*.js',
	pathTo: '../../build'
}
module.exports =  function jsScripts(){
	return src([_uglify['pathFrom']])
		.pipe(uglify({
			compress: _uglify['compress']
		}))
		.pipe(dest(_uglify['pathTo']))
		.pipe(browserSync.stream())
}