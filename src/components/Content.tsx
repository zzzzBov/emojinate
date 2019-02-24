import React from 'react'

export interface IContentProps {
  className?: string
}

export const Content: React.FunctionComponent<IContentProps> = ({
  children,
  className = ''
}) => (
  <main className={`Content ${className}`}>
    {children}
  </main>
)
