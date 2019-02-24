import React from 'react';

export interface IFooterProps {
  className?: string
}

export const Footer: React.FunctionComponent<IFooterProps> = ({
  children,
  className = ''
}) => (
  <footer className={`Footer ${className}`}>
    {children}
  </footer>
);
