const
	{ src, dest } = require('gulp'),
	notify = require('gulp-notify'),

	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	pug = require('gulp-pug'),
	_pug = {
		pretty: true,
		pathFrom : '../templates/index.pug',
		pathTo: '../../build'
	};
module.exports = function pugTpl(){
	return src(_pug['pathFrom'])
		.pipe(
			pug({
				pretty: _pug['pretty'],
			}).on('error',
			notify.onError({
				message: "<%= error.message%>",
				title : "Ошибка компиляции в HTML"
			}))
		)
		.pipe(
			dest(_pug['pathTo'])
		)
		.pipe(reload({stream:true}))
}