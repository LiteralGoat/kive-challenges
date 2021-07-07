import React, { useState, useEffect, useRef } from 'react'

import './EmojiGrid.css'

// guessEmoji function
import guessEmoji from '../guess-emoji.js'

import Emoji from './Emoji'

function EmojiPanel() {
  const [search, setSearch] = useState('')
  const [emojis, setEmojis] = useState(null)
  const [emojidex, setEmojidex] = useState([])

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    (async () => {
      const url = 'https://emoji-api.com/emojis?access_key=35b220d2d33078382c98aafc63291d85dc07d0e7'
      const response = await fetch(url).catch(err => console.error(err))
      const emojiList = await response.json()
      setEmojidex(emojiList)
      setEmojis(emojiList.slice(0, 10))
    })()
  }, [])

  function searchHandler(e) {
    
    var searchVal = e.target.value

    // Sets the search value.
    setSearch(searchVal)

    //Sets the emojis to the filtered emojidex array.
    setEmojis(guessEmoji(searchVal, emojidex))
  }

  return (
    <div>
      <div className="search-box">
        <label>
          <input ref={inputRef} type="text" placeholder="Search your emoji..." value={search} onChange={searchHandler} />
          <span className="input-emoji">🔍</span>
        </label>      
      </div>
      <div className="wrapper">
        <div>
          <div className="grid-container">
            { emojis != null ? emojis.map(Emoji) : <p className="status-message">Loading...</p> }
            { emojis != null && emojis.length === 0 ? <p className="status-message">No matches 😞</p> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiPanel

