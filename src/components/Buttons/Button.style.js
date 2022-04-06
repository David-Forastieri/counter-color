import styled from 'styled-components';
import { css } from 'styled-components';

const ButtonReset = styled.button(
  (props)=>
    css({
      backgroundColor: '#fff',
      border: 'solid 3px #33bdad',
      color: '#33bdad',
      fontSize: props.small ? '15px' : '20px',
      padding: props.small ? '5px' : '10px 20px',
      width: props.small ? '100px' : '200px' ,

    '&:hover':{
      background: '#39837a',
      color: '#fff',
    },
  })
)

export {ButtonReset};