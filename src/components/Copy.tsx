import React from 'react'

export interface ICopyProperties {
  className: string
  value: string
}

const clipboard = (navigator as any).clipboard

export const Copy: React.SFC<ICopyProperties> = ({
  className,
  value
}) => (
  <button
    className={`${className} Copy`}
    onClick={() => {
      clipboard.writeText(value)
    }}
    type='button'
    >
    Copy
  </button>
)
