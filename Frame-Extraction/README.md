# The Frame Extraction Challenge
## Challenge description
- [ ] Design a JavaScript function `getYoutubeFrames()` that:
  - [ ] Takes a Youtube url as its input
  - [ ] Fetches the video
  - [ ] Extracts a frame from every scene/cut of the video (hint: use ffmpeg)
  - [ ] Converts every frame to jpg format with maximum 800px width
  - [ ] **Returns** a list of temp paths or base64 buffers
## Starting out
First I need to find out what how to fetch a video with a url from youtube and what ffmpeg is. 

I'll create a couple of files to outline the project.