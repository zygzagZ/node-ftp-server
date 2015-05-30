var Base  = require('./fs').Base
  , util  = require('util')
  , Stream = require('stream');

module.exports = Filesystem

util.inherits(Filesystem, Base)

function Filesystem (options) {
	Base.call(this, options)
}

Filesystem.prototype.pwd = function () {
	return '/'
}

Filesystem.prototype.chdir = function (dir, cb) {
	if (dir != '/')
		this.respond(cb, {"code": 431, "message": 'No such directory'})
	else
		this.respond(cb, null, ['/'])
}

Filesystem.prototype.list = function (dir, cb) {
	this.respond(cb, null, ["-r--r--r-- 1 root root  1 maj 30 11:31 xxx\r\n"])
}

Filesystem.prototype.readFile = function (file, cb) {
	var response = ''+Math.floor(Math.random()+0.5);
	var s = new Stream.Readable();
	s._read = function noop() {}; // redundant? see update below
	s.push(response);
	s.push(null);
	this.respond(cb, null, [s])
}

Filesystem.prototype.writeFile = function (file, cb) {
	var s = new Stream.Writable();
	s._write = function noop() {}; // redundant? see update below
	this.respond(cb, null, [s])
}

Filesystem.prototype.unlink = function (file, cb) {
	this.respond(cb, {"code": 202})
}
