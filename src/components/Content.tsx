import React, { useState } from 'react'

import { emojinate } from '../emojinate'

import { Output } from './Output'
import { TextField } from './TextField'

export const Content: React.SFC = () => {
  const [emoji, setEmoji] = useState('')
  const [space, setSpace] = useState('')
  const [text, setText] = useState('')
  const output = emojinate(emoji, space, text)

  return (
    <main className='Content'>
      <TextField
        className="Content_emoji"
        label="Emoji"
        onInput={setEmoji}
        value={emoji}
      />
      <TextField
        className="Content_space"
        label="Space"
        onInput={setSpace}
        value={space}
      />
      <TextField
        className="Content_text"
        label="Text"
        onInput={setText}
        value={text}
      />
      <Output
        className="Content_output"
        value={output}
      />
    </main>
  )
};
