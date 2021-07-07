import React, { useState, useEffect, useRef } from 'react'

import './EmojiPanel.css'

// guessEmoji function
import guessEmoji from '../guess-emoji.js'

import Emoji from './Emoji'
import EmojiDark from './EmojiDark'

function EmojiPanel() {
  const [search, setSearch] = useState('')
  const [emojis, setEmojis] = useState(null)
  const [emojidex, setEmojidex] = useState([])

  const inputRef = useRef(null);

  useEffect(() => {
    // Sets the focus on input with the reference inputRef.
    inputRef.current.focus();

    // Asynchronously gets the emoji data from the Open Emoji API.
    (async () => {
      const url = 'https://emoji-api.com/emojis?access_key=35b220d2d33078382c98aafc63291d85dc07d0e7'
      const response = await fetch(url).catch(err => console.error(err))
      // Convert the promise respone to json.
      const emojiList = await response.json()
      // useState set emojidex.
      setEmojidex(emojiList)
      // useState set emojis. Sets the initial emojis.
      setEmojis(emojiList.slice(0, 10))
    })()
  }, [])

  function searchHandler(e) {
    // Gets the input value from the event.
    var searchVal = e.target.value
    // Sets the search value.
    setSearch(searchVal)
    //Sets the emojis to the filtered emojidex array.
    setEmojis(guessEmoji(searchVal, emojidex))
  }

  return (
    <div className="emoji-panel">
      <div className="search-box">
        {/* Label is used to contain the magnifying glass emoji. Check EmojiPanel.css under label. */}
        <label>
          {/* 
          Input element that has the value of useState search. 
            The reference is what is later used for setting focus on the element. 
            The value is set to the search value.
            When something changes, i.e. input, the searchHandler function is called. 
          */}
          <input ref={inputRef} type="text" placeholder="Search your emoji..." value={search} onChange={searchHandler} />
          {/* The emoji that is displayed before the input. */}
          <span className="input-emoji">🔍</span>
        </label>   
      </div>
      <div className="wrapper">
        <div>
          <div className="grid-container">
            {/* 
            If emojis is not the initial state, i.e. data has loaded, =>
              => map trough the emojis and send the prop to the Emoji component.
            Else (if emojis is the initial state, i.e. data has not loaded) =>
              => display 'Loading...'
            */}
            { emojis != null ? emojis.map(Emoji) : <p className="status-message">Loading...</p> }
            {/* 
            If emojis is not the initial state, i.e. data has loaded, & the length is equal to 0, 
              i.e. search came back empty  =>
              => display 'No matches 😞'.
            Else display nothing.
            */}
            { emojis != null && emojis.length === 0 ? <p className="status-message">No matches 😞</p> : ''}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h3 style={{textAlign: 'left'}}>Dark Mode Emoji Card</h3>
        <div>
          <div className="grid-container">
            {/* 
            If emojis is not the initial state, i.e. data has loaded, =>
              => map trough the emojis and send the prop to the Emoji component.
            Else (if emojis is the initial state, i.e. data has not loaded) =>
              => display 'Loading...'
            */}
            { emojis != null ? emojis.map(EmojiDark) : <p className="status-message">Loading...</p> }
            {/* 
            If emojis is not the initial state, i.e. data has loaded, & the length is equal to 0, 
              i.e. search came back empty  =>
              => display 'No matches 😞'.
            Else display nothing.
            */}
            { emojis != null && emojis.length === 0 ? <p className="status-message">No matches 😞</p> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiPanel

