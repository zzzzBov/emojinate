import React from 'react';

export interface IHeaderProps {
  className?: string
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
  children,
  className = ''
}) => (
  <header className={`Header ${className}`}>
    {children}
  </header>
);
