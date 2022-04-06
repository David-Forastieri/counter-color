import React from 'react'
import { ButtonReset } from './Button.style'


const Button = ({reset}) => {
  return (
    <>
      <ButtonReset onClick={reset} >Reset</ButtonReset>
    </>
  )
}

export default Button;
