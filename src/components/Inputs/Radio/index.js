import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import './style.css'

export const RadioInput = ({ name, options }) => {
  const inputRef = useRef([])
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue(refs) {
        const checked = refs.find(ref => ref.checked);

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find(ref => ref.value === value);

        if (item) {
          item.checked = true;
        }
      }
    });
  }, [fieldName, registerField]);

  return (
    <div className="boxRadio">

      {options.map((option, index) => (
        <label key={option.id} className="labelRadioInput" >
          <input
            className="inputRadio"
            ref={elRef => (inputRef.current[index] = elRef)}
            type="radio"
            name={fieldName}
            value={option.id}
            defaultChecked={defaultValue === option.id}
          />
          <span>{option.label}</span>
        </label>

      ))}
    </div>


  )
}