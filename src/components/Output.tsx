import React from 'react';

export interface IOutputProperties {
  className: string
  value: string
}

export const Output: React.FunctionComponent<IOutputProperties> = ({
  className,
  value
}) => (
  <pre className={`${className} Output`}><output className="Output_value">{value}</output></pre>
);
