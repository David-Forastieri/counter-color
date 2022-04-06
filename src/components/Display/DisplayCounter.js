import React from 'react'
import { DisplayCount } from './DisplayCounter.style'

const DisplayCounter = ({seconds}) => {
  return (
    <>
      <DisplayCount><span>{seconds}</span></DisplayCount>
    </>
  )
}

export default DisplayCounter;
