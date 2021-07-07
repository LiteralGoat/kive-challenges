# Emoji Interpretation Challenge - [Live Demo](https://stark-chamber-41619.herokuapp.com/)
## How to run and build 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> cd into the emoji-interpretation folder
`npm install`

**Scripts**
Dev build
`npm start`
Production build
`npm build`

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

## Filtering - `guessEmoji()`
Solving this task I decided to go with a simple `.filter().match()`. However, matching the keywords (search input) with the emojis from the API does leave room for wanted features. Emoticons like ':)' or ';)' do not work, and the filter is very sensitive to the input. To mitigate some of the sensitivity I decided to add the ability to have multiple regex matches. This was achieved through the pipe operator '|'. To achieve some functionality with emoticons I descided to require a npm package [emoticon-to-emoji](https://www.npmjs.com/package/emoticon-to-emoji). It has ok matches to input. Furthermore, the `guessEmoji()` function output is not sorted by relevancy. 

I believe it could be achieved through weighting the results to some pattern of choice, or the [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method

## Design
To achieve a similarity with the [kive.ai](https://kive.ai/) product style I decided to mimic the emoji cards by inspecting the elements with chrome devtools. I decided to add a title (Emojipedia) above the input field, with the same linear gradient as the cards, in order to have some balance with the colors.

**Input Field**
Since the page is made for searching emojis, the natural icon is an emoji. This was achieved through a span and absolute positioning. The input background was also a little lighter than the page background to make it stand out as it is the main functionality. To add to this effect I also added a small border with an even lighter shade of the background to make it pop out.

**Emoji Cards**
Initially the design was supposed to be the "dark mode" cards at the bottom of the page. Although, this didn't signigicantly make it stand out in regards to the input. Therefore I decided to mimic the cards on [kive.ai](https://kive.ai/). Furthermore, to add some interactivity, the cards got the :hover linear background turquoise. The idea of having a popup telling the user to copy, and the saying "Copied", was also planned. However, due to the time constrains the idea was scrapped. 
