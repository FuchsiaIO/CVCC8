gulp = require 'gulp'
webpack = require("webpack")
WebpackDevServer = require("webpack-dev-server")
webpackConfig = require("./webpack.config.js")
webpackProductionConfig = require("./webpack.production.config.js")
gutil = require 'gulp-util'
shell = require 'gulp-shell'

gulp.task('copy-assets', ->
    gulp.src('assets/**')
      .pipe(gulp.dest('public'))
)

gulp.task "webpack:build", (callback) ->
  # Run webpack.
  webpack webpackProductionConfig, (err, stats) ->
    throw new gutil.PluginError("webpack:build", err)  if err
    gutil.log "[webpack:build]", stats.toString(colors: true)
    callback()
    return

# Create a single instance of the compiler to allow caching.
devCompiler = webpack(webpackConfig)
gulp.task "webpack:build-dev", (callback) ->

  # Run webpack.
  devCompiler.run (err, stats) ->
    throw new gutil.PluginError("webpack:build-dev", err)  if err
    gutil.log "[webpack:build-dev]", stats.toString(colors: true)
    callback()
    return

  return

devServer = {}
gulp.task "webpack-dev-server", (callback) ->
  # Start a webpack-dev-server.
  devServer = new WebpackDevServer(webpack(webpackConfig),
    contentBase: './public/'
    hot: true
    watchOptions:
      aggregateTimeout: 100
    noInfo: true
  )
    
  devServer.listen 8080, "0.0.0.0", (err) ->
    throw new gutil.PluginError("webpack-dev-server", err) if err
    gutil.log "[webpack-dev-server]", "http://localhost:8080"
    callback()
    
  return
  
gulp.task "socket-server", () ->
  express = require('express');
  http = require('http');
  chatSocket = require('./socket.js')
  
  app = express()
  server = http.createServer(app)
  
  app.set('port', 9090)
  
  io = require('socket.io').listen(server)
  io.sockets.on('connection', chatSocket)
  
  server.listen app.get('port'), ()->
    console.log('Express server listening on port '+app.get('port')+' in '+app.get('env')+' mode')
  
  return

gulp.task 'default', -> gulp.start 'build'

gulp.task 'build', ['webpack:build', 'copy-assets']

gulp.task 'watch', ['copy-assets', 'webpack-dev-server', 'socket-server'], ->
  gulp.watch(['assets/**'], ['copy-assets'])

gulp.task 'test', shell.task ['./node_modules/.bin/mocha']

# Explicitly return true if mocha fails, so Gulp won't quit.
gulp.task 'test:safe', shell.task ['./node_modules/.bin/mocha || true']
gulp.task 'test:watch', ['test:safe'], ->
  gulp.watch ['src/scripts/**','test/**'], ['test:safe']
