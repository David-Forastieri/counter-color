import React from 'react'
import { ButtonReset } from '../Buttons/Button.style'
import { MensajeText } from './Mensaje.style'

const Mensaje = ({ colorText, asignAcept, userStorage }) => {
    let statistics = userStorage.filter(elemento => elemento.asigColor === colorText)
  return (
    <>
      <MensajeText color={colorText}>Su color asignado es el {colorText}, y hay {statistics.length} personas mas con la misma asignacion de color</MensajeText>
      <ButtonReset onClick={asignAcept} >Aceptar</ButtonReset>
    </>
  )
}

export default Mensaje