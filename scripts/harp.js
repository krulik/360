var harp = require("harp");

var args = process.argv.slice(2);
var src = args[0];
var port = args[1];

harp.server(__dirname + "/../" + src, {
	port: port
});
