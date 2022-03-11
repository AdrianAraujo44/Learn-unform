import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import InputMask from "react-input-mask"
import './style.css'

export const TimeInput = ({ name, label, ...rest}) => {
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
      <InputMask 
        mask="99:99"
        className="timeInput"
        name={name}
        ref={inputRef} 
      />
    </div>
  )
}