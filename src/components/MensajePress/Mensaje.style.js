import styled from "styled-components";
import { css } from "styled-components";

const MensajeText = styled.p(
  (props)=>
  css({
    display: !props.color && 'none',
    marginTop: '50px',
    fontSize: '50px',
    color: props.color,
  })
)

export {
  MensajeText
}