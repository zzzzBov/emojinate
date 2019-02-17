import React, { useState } from 'react'

import { emojinate } from '../emojinate'

import { Copy } from './Copy'
import { Output } from './Output'
import { TextField } from './TextField'

export const Content: React.SFC = () => {
  const [emoji, setEmoji] = useState(':black_square:')
  const [space, setSpace] = useState(':white_square:')
  const [text, setText] = useState('Hello World!')
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
      <Copy
        className="Content_copy"
        value={output}
      />
    </main>
  )
};
