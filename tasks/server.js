import gulp from "gulp";
import gulpif from "gulp-if"
import liveserver from "gulp-live-server"
import args from "./util/args"

gulp.task("server",(cb) => {
    if(!args.watch) return cb();
    var server = liveserver.new(['--harmony','server/bin/www'])
    server.start()

    gulp.watch(['server/public/**/*.js','server/views/**/*.js',function(file){
        server.notify.apply(server,[file])
    }])

    gulp.watch(['server/routes/**/*.js','server/routes/**/*.ejs',function(file){
        server.start.bind(server)()
    }])
})
