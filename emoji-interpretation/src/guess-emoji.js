// An npm package that converts ":)" or ";)" emoticons to emojis.
import {replaceEmoticons} from 'emoticon-to-emoji'

function guessEmoji(val, emojidex) {

  var searchVal = val.toLowerCase()

  // Regex to check if emoji
  const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
  // Check with regex
  if ( replaceEmoticons(searchVal).match(regexExp) !== null ) {
    console.log(replaceEmoticons(searchVal).match(regexExp))

    // Using Emoticon to emoji
    var emoticonsTranslated = replaceEmoticons(searchVal)

    return [
      {
        character: emoticonsTranslated,
        // Since there is only one, the slug (key on the .map) can be one.
        slug: 1
      }
    ]

  } else {
    // Sets the searchVal into separate keywords when typing space.
    var keywords = searchVal.split(' ')

    // Regex is set to the first keyword as we do not want the first item to have a pipe ('|') infront of it.
    var regex = keywords[0]

    // Checks if there are any other keywords since it's unecessary to run a for loop on one.
    if ( keywords.length > 1 ) {
      // Runs through the keywords and adds them to regex with a pipe ('|') before.
      for (var i = 1; i < keywords.length; i++) {
        if (keywords[i].length > 0) {
          regex += '|' 
          regex += keywords[i]
        }
      }
    }

    // Filtering the emojidex to find emojis that correspond with the filter keywords. Stops at arraylength 10.
    var filteredEmojis = emojidex.filter(emojiObj => emojiObj.unicodeName.match(regex, 'gi')).slice(0, 10)
    
    return filteredEmojis
  }
}

export default guessEmoji