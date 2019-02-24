import React from 'react'

import { TextField } from './TextField'

export interface IEmojinateFormValue {
  emoji: string,
  space: string,
  text: string
}

export interface IEmojinateFormProps {
  className?: string,
  onInput (value: IEmojinateFormValue): void
  onSubmit (e: React.FormEvent<HTMLFormElement>): void
  value: IEmojinateFormValue
}

export const EmojinateForm: React.FunctionComponent<IEmojinateFormProps> = ({
  className = '',
  onInput,
  onSubmit,
  value
}) => (
  <form
    className={`EmojinateForm ${className}`}
    method='GET'
    onSubmit={onSubmit}>
    <TextField
      className='EmojinateForm_emoji'
      label='Emoji'
      onInput={(emoji) => onInput({
        ...value,
        emoji
      })}
      value={value.emoji}
    />
    <TextField
      className='EmojinateForm_space'
      label='Space'
      onInput={(space) => onInput({
        ...value,
        space
      })}
      value={value.space}
    />
    <TextField
      className='EmojinateForm_text'
      label='Text'
      onInput={(text) => onInput({
        ...value,
        text
      })}
      value={value.text}
    />
    <button
      className='EmojinateForm_submit'
      type='submit'>
      &#x1f4cb; Copy
    </button>
  </form>
)
