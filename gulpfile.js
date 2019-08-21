"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var webp = require("gulp-webp");
var del = require("del");
var mincss = require("gulp-csso");
var sprite = require("gulp-svgstore");
var post_html = require("posthtml-include");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{jpeg,jpg,png,tiff}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task('clean', function(){
  return del('./build', {force:true});
});

gulp.task("css_admin", function () {
  return gulp.src("./source/**/*.css")
    .pipe(mincss())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest('./build/css'));
});

gulp.task("html_admin", function () {
  return gulp.src("./source/**/*.html")
    //.pipe(post_html())
    .pipe(gulp.dest("./build"));
});

gulp.task("img", function () {
  return gulp.src(["source/img/**/*.*", "!source/img/**/sprite.svg"])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest('./build/img'));
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest('./build/js'));
});

gulp.task("sprite", function () {
  return gulp.src(["./source/img/icon-*.svg","./source/img/bg*.svg"])
    .pipe(sprite({
      inlineSvg: true
    }))
    .pipe(rename(function (path) {
      path.basename = "sprite";
      path.extname = ".svg";
    }))
    .pipe(gulp.dest("./build/img/svg"))
    .pipe(gulp.dest("./source/img/svg"))
});

gulp.task("fonts", function () {
  return gulp.src("source/fonts/**/*.*")
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task("admin_server", function () {

  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

});

gulp.task("admin", gulp.series("clean","css","css_admin","html_admin","img","webp","sprite","js","fonts"));

gulp.task("start", gulp.series("css","webp", "server"));
