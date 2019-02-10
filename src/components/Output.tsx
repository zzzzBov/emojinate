import React from 'react';

export interface IOutputProperties {
  className: string
  value: string
}

export const Output: React.SFC<IOutputProperties> = ({
  className,
  value
}) => (
  <pre className={`${className} Output`}><output className="Output_value">{value}</output></pre>
);
