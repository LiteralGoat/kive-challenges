# The Frame Extraction Challenge
## Challenge Description
- [X] Design a JavaScript function `getYoutubeFrames()` that:
  - [X] Takes a Youtube url as its input
  - [X] Fetches the video
  - [X] Extracts a frame from every scene/cut of the video (hint: use ffmpeg)
  - [X] Converts every frame to jpg format with maximum 800px width
  - [X] **Returns** a list of temp paths or base64 buffers

## How to run

`npm install`

`node index [url]`

> Can't find a video to try it on? [Here](https://www.youtube.com/watch?v=8tFrGaU6p5U&t=1s) you go :wink:

## Thought Process
### **Starting out**
First I need to find out what how to fetch a video with a url from youtube and what ffmpeg is. 
I'll initialize an npm project and an index.js file to outline the project.

### **Finding out what ffmpeg is**
It seems that [ffmpeg](http://ffmpeg.org/) is some sort of video and audio handler. I'll need the ability to read the file, detect scene changes and then convert the frame to a screenshot / timestamp that is that is then outputted in a ./temp folder.

### **Getting the video stream**
The package [ytdl](https://www.npmjs.com/package/ytdl-core) is very useful for easily getting the video from youtube, as in the challenge desc. Then I have to create an async function and return the value. 

### **Creating the scene function**
The ffmpeg filter that I could find which would detect every scene was `select='gt(scene\,0.2)'`, where the prefix was `-vf` or `-filter:v` (I used -vf for its simplicity). Then scale it to 800px with `scale='min(800,iw)':-1` (-1 can be used synonymously with auto here). Then puts a timestamp for variable frame rate with `-vsync vfr` as to not print every frame.
