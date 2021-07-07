import React from 'react'

import './Emoji.css'
import './EmojiDark.css'

function Emoji(props) {

  return (
    <div className="emoji-container emoji-dark-container">
      <span className="emoji" key={props.slug}>{props.character}</span>
    </div>
  )
}

export default Emoji