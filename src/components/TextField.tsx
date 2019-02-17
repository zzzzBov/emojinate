import React from 'react';

export interface ITextFieldProperties {
  className: string
  label: string
  onInput: (value: string) => void
  value: string
}

export const TextField: React.SFC<ITextFieldProperties> = ({
  className,
  label,
  onInput,
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
      onChange={(e) => onInput(e.currentTarget.value)}
      type="text"
      value={value}
      />
  </label>
);
