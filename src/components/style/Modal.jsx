import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;  
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
`;

const Modal = ({ children, clickedOut }) => (
  <Overlay onClick={clickedOut}>
    <section onClick={(event) => event.stopPropagation()}>{children}</section>
  </Overlay>
);

export default Modal;