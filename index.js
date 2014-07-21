'use strict';

var proxy= null ;
function EmberCLIBodyParser() {  
}


EmberCLIBodyParser.prototype.serverMiddleware = function serverMiddleware(options) {
      proxy = options.options.proxy;
};

EmberCLIBodyParser.prototype.get_proxy = function get_proxy() { return proxy ; };

module.exports = EmberCLIBodyParser;
