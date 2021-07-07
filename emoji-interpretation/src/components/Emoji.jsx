import React from 'react'

import './Emoji.css'

function Emoji(props) {
  return (
    <div className="emoji-container">
      <span className="emoji" key={props.slug}>{props.character}</span>
    </div>
  )
}

export default Emoji
