var site,
    assemble = require('assemble'),
    rename = require('gulp-rename'),
    watch = require('base-watch'),
    rimraf = require('rimraf'),
    helpers = require(__dirname+'/lib/helpers.js');

/**
 * Define Site
 */
site = assemble({
  layout: 'default' 
});

/**
 * Pull in cached data
 */
site.data(require('./site.config.js'));

/**
 * Init
 */
site.use(watch());

/**
 * Helpers
 */
Object.keys(helpers).forEach(function(name, i){
  site.helper(name, helpers[name]);
});

/**
 * Tasks
 */
function cleanDest(){
  rimraf('./dist/*.html', function(err){
    if (err) throw err
  });
}
site.task('load', function(cb){
  site.layouts(__dirname+'/src/markup/layouts/*.hbs');

  site.partials([__dirname+'/src/markup/modules/*.hbs', __dirname+'/src/markup/components/*.hbs']);

  site.pages(__dirname+'/src/markup/pages/*.hbs');

  cleanDest();

  cb()
});
site.task('pages', function(){
  return site.toStream('pages')
    .pipe(site.renderFile())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(site.dest(__dirname+'/dist'));
});

site.task('watch:pages', function(){
  site.watch([__dirname+'/src/markup/**/*.hbs'], ['pages']);
});

site.task('watch:sections', function(){
  site.watch([__dirname+'/src/sections/*.md'], ['load', 'pages']);
});

/**
 * Default
 * Runs watch, which in turn runs the builds
 * for pages and posts.
 */
site.task('default', ['build', site.parallel(['watch:pages', 'watch:sections'])]);
site.task('build', ['load', 'pages']);

/**/
module.exports = site;
