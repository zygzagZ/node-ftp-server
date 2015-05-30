var ftpd = require('..')
ftpd.on('listening', function () {
	console.log('listening!xD');
})
ftpd.listen(11113)

