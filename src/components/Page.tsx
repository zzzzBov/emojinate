import React, { useState } from 'react'

import { clipboard } from '../clipboard'
import { emojinate } from '../emojinate'

import { Content } from './Content'
import { EmojinateForm } from './EmojinateForm'
import { Footer } from './Footer'
import { Header } from './Header'
import { Output } from './Output'
import { TextField } from './TextField'



export const Page = () => {
  const [value, setValue] = useState({
    emoji: ':black_square:',
    space: ':white_square:',
    text: 'Hello World!'
  })
  const output = emojinate(value.emoji, value.space, value.text)

  return (
    <div className="Page">
      <Header className="Page_header">
        <h1>Emojinate</h1>
      </Header>
      <Content className="Page_content">
        <EmojinateForm
          onInput={setValue}
          onSubmit={(e) => {
            e.preventDefault()
            clipboard.writeText(output)
          }}
          value={value}
        />
        <Output
          className="Content_output"
          value={output}
        />
      </Content>
      <Footer className="Page_footer">
        <p>Copyright &copy; zzzzBov</p>
      </Footer>
    </div>
  )
}
