const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const WebpackDevServer = require("webpack-dev-server");

const webpackConfig = require("./webpack.config");

const SERVER_HOST = "localhost";
const SERVER_PORT = 9099;

const TASK_BUILD = "js:build";
const TASK_SERVER = "js:server";

gulp.task(TASK_BUILD, () =>
  gulp.src("src/app.tsx")
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/"))
);

gulp.task(TASK_SERVER, () => {
  new WebpackDevServer(webpack(webpackConfig), {
    stats: {
      chunks: false,
      colors: true,
    },
  }).listen(SERVER_PORT, SERVER_HOST, err => {
    if (err) {
      throw new gutil.PluginError(TASK_SERVER, err);
    }
    gutil.log(`[${TASK_SERVER}]`, `http://${SERVER_HOST}:${SERVER_PORT}`)
  });
});

gulp.task("default", [TASK_SERVER]);
