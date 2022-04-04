const { series, src, dest } = require("gulp");
const rename = require('gulp-rename');
const cleanCSS = require("gulp-clean-css");

function build(cb) {
  src("../meta.css")
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("../"));

  cb();
}

exports.default = series(build);
