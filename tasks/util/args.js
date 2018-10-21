import yargs from "yargs";

const args = yargs

.option('production',{
    boolean : true,
    default : fasle,
    describe : 'min all scripts'

}).option('watch',{
    boolean: true,
    default : fasle,
    describe: "watch all files",

}).option('verbose',{
        boolean: true,
        default : fasle,
        describe: "log",

}).option('sourcemap',{
        describe: "the force creation of sourcemap",

}).option('port',{
    string : true,
    default : 8080,
    describe: "server port"
}).argv()










