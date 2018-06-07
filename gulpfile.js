const gulp = require("gulp");
 
const server = require("gulp-webserver");

const sass = require("gulp-sass");

const webpack = require("webpack-stream");

const babel = require('gulp-babel')

const proxy = require("http-proxy-middleware")
const watch = require("gulp-watch")

gulp.task("server",()=>{
    gulp.src("./dev")
    .pipe(server({
        host:"localhost",
        port:"8000",
        path:"/",
        livereload:true,
        directoryListing:{
            enable:true,
            path:"./dev"
        },
        middleware:[
            proxy("/api",{
                target:"http://localhost:9000",
           
                pathRewrite:{
                    "^/api":""
                }
            })
        ]
    }))
})

gulp.task("sass",()=>{
    gulp.src("./src/styles/app.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./dev/styles"))
})

gulp.task("js",()=>{
    gulp.src("./src/scripts/app.js")
    .pipe(webpack({
        entry:"./src/scripts/app.js",
        output:{
            filename:"app.js"
        },
        module:{
            loaders: [
                { test: /\.html$/, loader: 'string-loader' },
            ],
        }
    
    }))
    //  .pipe(babel({
    //   presets: ['env', 'stage-0']
    // }))
    .pipe(gulp.dest("./dev/scripts"))
})

gulp.task("copyhtml",()=>{
    gulp.src(["./*.html"])
    .pipe(gulp.dest("./dev"))
})
gulp.task("copylibs", () => {
  gulp.src(["./src/libs/*.js"])
  .pipe(gulp.dest("./dev/libs"));
});
gulp.task("copyku1",()=>{
    gulp.src(["./image/*"])
    .pipe(gulp.dest("./dev/image"))
})
gulp.task("copyku2",()=>{
    gulp.src(["./font/*"])
    .pipe(gulp.dest("./dev/font"))
})

gulp.task('watch', () => {
  // gulp.watch('./*.html', ['copyhtml'])
  // gulp.watch('./src/styles/**/*', ['scss'])
  // gulp.watch('./src/scripts/**/*', ['js'])

  watch('./*.html', () => {
    gulp.start('copyhtml')
  })
  watch('./src/styles/**/*', () => {
    gulp.start('scss')
  })
  watch('./src/scripts/**/*', () => {
    gulp.start('js')
  })
})

gulp.task("default",["server","sass","js","copyhtml","copylibs","copyku1","copyku2","watch"],()=>{
    console.log(0)
})