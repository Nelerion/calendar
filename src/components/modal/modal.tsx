import React, { useState } from "react";
import { PropsModal } from "../../App";
import {
  ButtonCreateEvent,
  ModalInputEventText,
  ModalWindow,
  ModalWrapper,
} from "./style";

export const Modal: React.FC<PropsModal> = ({ setModal,selectDay,month,year }) => {

  const [value, setValue] = useState<string>("");
  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const createEvent = () => {
    if(setModal!==undefined)
    setModal((prev) => !prev);
    localStorage.setItem(JSON.stringify({day:selectDay,month:month,year:year}),JSON.stringify({day:selectDay,month:month,year:year,event:value}))
  };

  return (
    <ModalWrapper
      onClick={() => setModal !== undefined && setModal((prev) => !prev)}
    >
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalInputEventText  onChange={onChangeInput}/>
        <ButtonCreateEvent onClick={createEvent}>СОЗДАТЬ</ButtonCreateEvent>
      </ModalWindow>
    </ModalWrapper>
  );
};
