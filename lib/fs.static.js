var Base  = require('./fs').Base
  , util  = require('util')
  , path  = require('path')
  , fs    = require('fs')
  , spawn = require('child_process').spawn

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
 		self.respond(cb, {"code": 431, "message": 'No such directory'})
 	else
 		self.respond(cb, null, ['/'])
}

Filesystem.prototype.list = function (dir, cb) {
	self.respond(cb, null, ["-r--r--r-- 1 root root  1 maj 30 11:31 xxx\r\n"])
}

Filesystem.prototype.readFile = function (file, cb) {
	self.respond(cb, null, [''+Math.floor(Math.random()+0.5)])
}

Filesystem.prototype.writeFile = function (file, cb) {
	self.respond(cb, {"code": 202})
}

Filesystem.prototype.unlink = function (file, cb) {
	self.respond(cb, {"code": 202})
}
