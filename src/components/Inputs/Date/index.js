import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import InputMask from "react-input-mask"
import './style.css'

export const DateInput = ({ name, label, ...rest }) => {
  const dateRef = useRef()
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dateRef,
      getValue: ref => ref.current?.value,
      setValue: (ref, value) => { ref.current.value = value },
      clearValue: ref => ref.current.value = '',
    })
  }, [fieldName, registerField])

  return (
    <div className="boxInput">
      <label>{label}</label>
      <InputMask 
        mask="99/99/9999"
        className="dateInput" 
        ref={dateRef}
      />
    </div>
  )
}