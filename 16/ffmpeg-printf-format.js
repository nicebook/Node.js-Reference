var ffmpeg = require('fluent-ffmpeg');

var dirpath = 'video/';  
var videoname = 'output.avi'; 

ffmpeg.ffprobe(dirpath + videoname, function(err, metadata) {
	console.log(metadata.format);    
}); 