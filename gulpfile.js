const gulp        = require('gulp');
const browsersync = require('browser-sync').create();
const watch       = require('gulp-watch');

const paths = {
    base:   {
      base:         {
        dir:    './'
      },
      node:         {
        dir:    './node_modules'
      },
      vendor:         {
        dir:    './vendor'
      },
      packageLock:  {
        files:  './package-lock.json'
      }
    },
    dist:   {
      base:   {
        dir:    './dist'
      },
      libs:   {
        dir:    './dist/assets/libs'
      }
    },
    src:    {
      base:   {
        dir:    './src',
        files:  './src/**/*'
      },
      css:    {
        dir:    './src/assets/css',
        files:  './src/assets/css/**/*'
      },
      html:   {
        dir:    './src',
        files:  './src/**/*.html',
      },
      img:    {
        dir:    './src/assets/img',
        files:  './src/assets/img/**/*',
      },
      js:     {
        dir:    './src/assets/js',
        files:  './src/assets/js/**/*'
      },
      partials:   {
        dir:    './src/partials',
        files:  './src/partials/**/*'
      },
      scss:   {
        dir:    './src/assets/scss',
        files:  './src/assets/scss/**/*',
        main:   './src/assets/scss/*.scss'
      },
      tmp:    {
        dir:    './src/.tmp',
        files:  './src/.tmp/**/*'
      }
    }
  };

  gulp.task('browsersyncReload', function(callback) {
    browsersync.reload();
    callback();
  });

  gulp.task('browsersync', function(callback) {
    browsersync.init({
      server: {
        baseDir: [paths.src.tmp.dir, paths.src.base.dir, paths.base.base.dir]
      },
    });
    callback();
  });

  

  gulp.task('watch', function() {
    // gulp.watch(paths.src.scss.files, gulp.series(‘scss’));
    gulp.watch([paths.src.js.files, paths.src.img.files], gulp.series('browsersyncReload'));
    gulp.watch([paths.src.html.files], gulp.series('browsersyncReload'));
  });

  gulp.task('default', gulp.series(gulp.parallel('browsersync', 'watch')))

