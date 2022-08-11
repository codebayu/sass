const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("by-ui/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["by-ui/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
