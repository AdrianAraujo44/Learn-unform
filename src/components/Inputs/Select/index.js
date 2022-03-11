import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import './style.css'

export const SelectInput = ({ name, label, options, ...rest }) => {
  const selectRef = useRef()
  const { fieldName, defaultValue, registerField } = useField(name)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: ref => ref.current?.value,
      setValue: (ref, value) => {ref.current.value = value},
      clearValue: ref => ref.current.value = '',
    })
  }, [fieldName, registerField])

  return (
    <div className="boxInput">
      <label>{label}</label>
      <select
        id={fieldName}
        ref={selectRef} 
        name="select"
        defaultValue={defaultValue}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}