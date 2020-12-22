import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'


export const BackDrop = (props) => {

    const content = <Backdrop onClick={props.Click}></Backdrop>
    return (ReactDOM.createPortal(content, document.getElementById('backdrop-hook')))
}



const Backdrop = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;

`