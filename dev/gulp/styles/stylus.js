const
	{ src, dest } = require('gulp'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	stylus = require('gulp-stylus');
const _stylus = {
	compress: false,
	pathFrom: '../stylus/main.styl',
	pathTo: '../../build/',
	outputFile: 'front.css'
}
module.exports =  function stylusSheets(){
	return src(_stylus['pathFrom'])
		.pipe(stylus({
			compress: _stylus['compress']
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 version'],
			grid: true
		}))
		.pipe(
			concat(_stylus['outputFile'])
		)
		.pipe(dest(_stylus['pathTo']))
		.pipe(reload({stream:true}))
}