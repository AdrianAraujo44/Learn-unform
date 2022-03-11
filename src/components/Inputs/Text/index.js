import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import './style.css'


export const TextInput = ({ name, label, ...rest}) => {
  const inputRef = useRef()
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.value,
      setValue: (ref, value) => {ref.current.value = value},
      clearValue: ref => ref.current.value = '',
    })
  }, [fieldName, registerField])

  return (
    <div className="boxInput">
      <label>{label}</label>
      <input
        ref={inputRef}
        type="text"
        {...rest}
      />
    </div>
  )
}