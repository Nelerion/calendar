import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #cecbcb6a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  width: 400px;
  height: 180px;
  background-color: white;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(126, 112, 112, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(128, 114, 114, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(119, 113, 113, 0.22);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items:center;
  flex-direction:column;
`;

export const ModalInputEventText = styled.input.attrs({
    type:'text'
})`
width:250px;
height:50px;
font-size:16px;
`

export const ButtonCreateEvent = styled.button`
width:130px;
height:35px;
border:none;
outline: none;
background-color:#04d5e4;
border-radius:8px;
cursor: pointer;
`

export const DeleteButtonEvent = styled(ButtonCreateEvent)`
background-color: #e42929;
`