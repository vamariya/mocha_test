
function setup()
{
var fs = require('fs');
eval(fs.readFileSync("/root/nodeJS/basha/bckup/test/topo.js",encoding="ascii"));
//var mydata = fs.readFileSync(settings.SOME_FILE);
console.log("ip addr for the device " + settings.ip);
};
exports.setup = setup;

