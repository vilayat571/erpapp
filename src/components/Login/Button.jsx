import React from 'react'

function Button({text,style}) {
  return (
    <button className={style}>
      {text}
    </button>
  )
}

export default Button
