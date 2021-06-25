var geoip = require('geoip-lite');

var ip = "82.37.174.229";
var geo = geoip.lookup(ip);
console.info(geo);