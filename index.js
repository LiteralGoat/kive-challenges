const fs = require('fs');
const ytdl = require('ytdl-core');

// Getting the node.js ffmpeg api https://www.npmjs.com/package/fluent-ffmpeg.
const ffmpeg = require('fluent-ffmpeg');
  // Intsalling ffmpeg https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg.
  const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
  // Installing ffprobe https://www.npmjs.com/package/@ffprobe-installer/ffprobe.
  const ffprobePath = require('@ffprobe-installer/ffprobe').path;

// Setting paths
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

// Gets the url parameter.
const url = process.argv.slice(2)[0];

// Fetches the video
const stream = ytdl(url);

function getYoutubeFrames() {
  console.log('URL:', url)
  ffmpeg()
    // Fetches the video
    .input(stream)
    .on('start', () => console.log('Getting the scene thumbnails...'))
    .outputOptions([
      // Filter (vf) to select the frames to pass in output.
      "-vf select='gt(scene\,0.2)'", // Played around with the value, 0.2 works best in my examples. Needs further discussion.
      // The frame is passed through with the timestamp.
      "-vsync vfr"
    ])
    .output('./output/%05d.png')
    .on('end', () => console.log('Done! d(-_^)'))
    .run();
};

getYoutubeFrames();