# Emoji Interpretation Challenge
## Challenge description
- [ ] Create a simple React app with:
  - [ ] An input field where an Instagram post link can be entered (ie, instagram.com/p/XXXXX)
  - [ ] button that, when clicked:
    - [ ] saves the posts image data to some cloud storage service
  - [ ] component that renders the image from storage as soon as it is live


## Starting out
The first thing that comes to mind is to get a list of emoji's. I found such an api at Open Emoji API, they also contain the unicode name. I could thereafter apply the input from the string to search through an array of unicode names that matches, then use the match to send a slug with the api to fetch the emojis to return them.  
API-key: 35b220d2d33078382c98aafc63291d85dc07d0e7

## How to run and build 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Available Scripts**

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

`yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
