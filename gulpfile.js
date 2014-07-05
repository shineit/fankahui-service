var gulp = require('gulp')
var mocha = require('gulp-mocha')
var shelljs = require('shelljs')
var child = null

var paths = {
  scripts: [
  'test/**/*.js'
  ]
}

gulp.task('initDB', function (cb) {
    // shelljs.exec("mongo passpro-test --eval 'db.dropDatabase()' || true; mongorestore -d passpro-test test/fixtures/-deployd", function (code, output) {
    //     cb()
    // })
    cb()
})

gulp.task('restart', function (cb) {
  if(child) shelljs.exec('kill '+child.pid)
  child = shelljs.exec('node app.js', {async:true})
  child.stdout.once('data', function(data) {
    cb()
  })
})

gulp.task('mocha', ['initDB', 'restart'], function () {
  gulp.src(paths.scripts, { read: false })
    .pipe(mocha({reporter: 'list', timeout: 20000}))
    .on('error', console.log)
})

gulp.task('develop', function () {
  gulp.watch(paths.scripts, ['mocha'])
})

gulp.task('default', ['develop'], function() {
})
