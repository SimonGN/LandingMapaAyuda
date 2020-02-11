import React from 'react'
import InputStyle from './InputStyle'
import { Field } from "formik";

const Input = ({name, disabled, placeholder, type}) => {
  return (
    <Field name={name}>
      {({field: {value}, form: {setFieldValue, submitCount}, meta}) => 
        (<InputStyle
          error={submitCount > 0 && meta.error}
        >
          <input
            type={type? type : "text"}
            value={value}
            onChange={e => setFieldValue(name, e.target.value)}
            disabled = { disabled ? true: false}
            placeholder= {placeholder}
          >
          </input>
          <p>{submitCount > 0 && meta.error}</p>
        </InputStyle>
      )}
    </Field>
  )
}

export default Input
