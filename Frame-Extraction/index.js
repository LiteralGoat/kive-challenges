const fs = require('fs')

// A youtube url fetching pkg.
const ytdl = require('ytdl-core')

// Getting the node.js ffmpeg pkg. https://www.npmjs.com/package/fluent-ffmpeg.
const ffmpeg = require('fluent-ffmpeg')
  // Intsalling ffmpeg https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg.
  const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
  // Installing ffprobe https://www.npmjs.com/package/@ffprobe-installer/ffprobe.
  const ffprobePath = require('@ffprobe-installer/ffprobe').path
  // Setting paths
  ffmpeg.setFfmpegPath(ffmpegPath)
  ffmpeg.setFfprobePath(ffprobePath)

// Gets the url parameter.
const url = process.argv.slice(2)[0]

// Creates temp directory
if (!fs.existsSync('./temp')){
  fs.mkdirSync('./temp');
}

// Fetches the video
/* const stream = ytdl(url) */
async function getVideo(url) {
  try {
    // Quality values can be found here: https://github.com/fent/node-ytdl-core/blob/HEAD/typings/index.d.ts#L15
    return await ytdl(url, { quality: 'lowestvideo' }) // 'highestvideo' or 'lowestvideo' as examples
  } catch (err) {
    console.log(err)
  }
}

var listArr = []

async function getYoutubeFrames() {
  ffmpeg(await getVideo(url))
    // Starting message
    .on('start', () => console.log('Getting the scene thumbnails...'))
    .outputOptions([
      // Filter (vf) to select the frames to pass in output and scale it to max width 800px. 
      "-vf select='gt(scene\,0.2)',scale='min(800,iw)':-1", // Played around with the value, 0.2 works best in my examples. Needs further discussion.
      // The frame is passed through with the timestamp.
      "-vsync vfr",
    ])
    // Outputs thumbnail as a jpg in the outputs folder
    .output('./temp/%05d.jpg')
    .on('progress', () => {
      fs.readdir('./temp', (err, files) => {
        if (err) {
            return console.log('Unable find directory: ' + err)
        } 
        // Listing all files
        files.forEach((file) => {
            listArr.push('./temp/' + file)
        })
      })
    })
    // Ending message
    .on('end', () => {
      console.log('Scenes: ', listArr)
      console.log('Done d(-_^)')
    })
    .run()
}

getYoutubeFrames()
