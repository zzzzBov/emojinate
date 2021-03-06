import React from 'react';

export interface ITextFieldProperties {
  className?: string
  label: string
  name?: string
  onInput: (value: string) => void
  value: string
}

export const TextField: React.FunctionComponent<ITextFieldProperties> = ({
  className = '',
  label,
  name,
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
      name={name}
      onChange={(e) => onInput(e.currentTarget.value)}
      type="text"
      value={value}
      />
  </label>
);
