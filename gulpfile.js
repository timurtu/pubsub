/**
 * Created by timur on 5/4/16.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')
const jasmine = require('gulp-jasmine')
var mocha = require('gulp-mocha');
const changed = require('gulp-changed')
const gutil = require('gulp-util')

const paths = {
  all: '**/*.js',
  source: 'src/**/*.js',
  library: 'lib',
  testsLibrary: 'lib/test/unit/*.js'
}

gulp.task('watch', ['build', 'test'], () => {
  gulp.watch(paths.source, ['test'])
  gulp.watch(paths.tests, ['test'])
})

gulp.task('build', ['build-js'])

gulp.task('build-js', () => {

  gutil.log(gutil.colors.blue(
    `Transpiling JavaScript Source from ${paths.source} to ${paths.library}.`
  ))

  return gulp.src(paths.source)
    .pipe(changed(paths.library))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.library))

})


gulp.task('test', ['build'], () => {
  return gulp.src('lib/test/**/*')
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .on("error", handleError)
})

function handleError(err) {
  gutil.log(gutil.colors.magenta(err.toString()));
  this.emit('end');
}
