# The Frame Extraction Challenge
## Challenge description
- [ ] Design a JavaScript function `getYoutubeFrames()` that:
  - [X] Takes a Youtube url as its input
  - [X] Fetches the video
  - [X] Extracts a frame from every scene/cut of the video (hint: use ffmpeg)
  - [ ] Converts every frame to jpg format with maximum 800px width
  - [ ] **Returns** a list of temp paths or base64 buffers
## Documentation tasks (explain / document)
- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3
- [ ] Subtask 4
## Starting out
First I need to find out what how to fetch a video with a url from youtube and what ffmpeg is. 

I'll create a couple of files to outline the project.
## Finding out what ffmpeg is
It seems that ffmpeg is some sort of video and audio handler. I'll need the ability to read the file, detect scene changes and then convert the frame to a screenshot / snapshot that is that is then outputted in an ./output folder.

