# Emoji Interpretation Challenge - [Live Demo](https://stark-chamber-41619.herokuapp.com/)
## Challenge description
- [x] Design a JavaScript function `guessEmoji()` that:
  - [x] Takes a string as its input (ex: "crying sad face", ":)", "going for a run")
  - [x] Returns an array of emojis/emoji codes
  - [ ] The emojis should be reasonably good matches to input, and sorted by relevancy
- [x] Create a functional React component `EmojiPanel` that
  - [x] Has an input field that runs `guessEmoji()` when input changes
  - [x] Displays resulting emojis rendered in a grid
  - [x] Has a container with overall nice appearance, dark mode, width ≈ 400px, height ≈ 200px.

## Starting out
The first thing that comes to mind is to get a list of emoji's. I found such an api at Open Emoji API, they also contain the unicode name. I could thereafter apply the input from the string to search through an array of unicode names that matches, then use the match to send a slug with the api to fetch the emojis to return them.  
API-key: 35b220d2d33078382c98aafc63291d85dc07d0e7

## How to run and build 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> cd into the emoji-interpretation folder first
`npm install`

**Scripts**
Dev build
`npm start`
Production build
`npm build`
