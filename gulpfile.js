/**
 * Created by timur on 5/4/16.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')
const jasmine = require('gulp-jasmine')
const changed = require('gulp-changed')
const gutil = require('gulp-util')

const paths = {
  all: '**/*.js',
  source: 'src/*.js',
  library: 'lib',
  tests: 'tests/*.js',
  testsLibrary: 'testslib'
}

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.source, ['build', 'test'])
  gulp.watch(paths.tests, ['build', 'test'])
})

gulp.task('build', ['build-js', 'build-tests'])

gulp.task('build-js', () => {

  gutil.log(gutil.colors.blue(`Transpiling JavaScript Source from ${paths.source} to ${paths.library}.`))

  return gulp.src(paths.source)
    .pipe(changed(paths.library))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.library))

})

gulp.task('build-tests', ['build'], () => {

  gutil.log(gutil.colors.blue(`Transpiling JavaScript Tests from ${paths.tests} to ${paths.testsLibrary}.`))

  return gulp.src(paths.tests)
    .pipe(changed(paths.testsLibrary))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.testsLibrary))
})

gulp.task('test', ['build-tests'], () =>
  gulp.src('testslib/*')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine())
)