import React from 'react';

export interface ITextFieldProperties {
  className: string
  label: string
  onInput: () => void
  value: string
}

export const TextField: React.SFC<ITextFieldProperties> = ({
  className,
  label,
  value
}) => (
  <label
    className={`${className} TextField`}>
    <span
      className="TextField_label">
      {label}
    </span>
    <input
      className="TextField_input"
      type="text"
      value={value}
      />
  </label>
);
