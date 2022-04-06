import React from 'react'
import { ButtonReset } from '../Buttons/Button.style'
import { Input, Label } from './Input.style'

const InputsName = ({nombre, setInputName, handleStart}) => {

  return (
    <>
      <Label>Nombre completo:</Label>
      <Input value={nombre} onChange={e => setInputName(e.target.value)} placeholder={'Su nombre aqui'}></Input>
      {nombre.length > 2 && (
        <ButtonReset small={'small'} onClick={handleStart}>Iniciar</ButtonReset>
      )}
    </>
  )
}

export default InputsName