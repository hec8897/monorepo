import React from 'react';

interface Type {
  value: string;
  onChange: () => void;
}

const Input = ({ value, onChange }: Type) => (
  <input value={value} onChange={onChange} />
);

export default Input;
