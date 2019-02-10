import React from 'react';

import { Output } from './Output';
import { TextField } from './TextField';

const onEmojiInput = () => {}
const emoji = ""
const onSpaceInput = () => {}
const space = ""
const onTextInput = () => {}
const text = ""
const output = ""

export const Content = () => (
  <main className='Content'>
    <TextField
      className="Content_emoji"
      label="Emoji"
      onInput={onEmojiInput}
      value={emoji}
      />
    <TextField
      className="Content_space"
      label="Space"
      onInput={onSpaceInput}
      value={space}
      />
    <TextField
      className="Content_text"
      label="Text"
      onInput={onTextInput}
      value={text}
      />
    <Output
      className="Content_output"
      value={output}
      />
  </main>
);
