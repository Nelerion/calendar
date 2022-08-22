import React, { useState } from "react";
import { PropsModal } from "../../App";
import {
  ButtonCreateEvent,
  DeleteButtonEvent,
  ModalInputEventText,
  ModalWindow,
  ModalWrapper,
} from "./style";

export const Modal: React.FC<PropsModal> = ({
  setModal,
  selectDay,
  month,
  year,
  localStorageEventArray,
  setLocalStorageEventArray,
}) => {
  const [valueInput, setValueInput] = useState<string>("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const createEvent = () => {
    if (setModal !== undefined) setModal((prev) => !prev);
    if (valueInput.length >= 6 && valueInput.trim().length !== 0)
      localStorage.setItem(
        JSON.stringify({ day: selectDay, month: month, year: year }),
        JSON.stringify({
          day: selectDay,
          month: month,
          year: year,
          event: valueInput,
        })
      );
  };

  const deleteEvent = () => {
    if (localStorageEventArray !== undefined)
      localStorageEventArray.find(
        ({ day, month: thisMonth, year: thisYear }) =>
          day === selectDay &&
          month === thisMonth &&
          year === thisYear &&
          localStorage.removeItem(
            JSON.stringify({ day: selectDay, month: month, year: year })
          )
      );

    setLocalStorageEventArray !== undefined &&
      setLocalStorageEventArray((prev) =>
        prev.filter(({ day }) => day !== selectDay)
      );
    if (setModal !== undefined) setModal((prev) => !prev);
  };

  const isDayHaveEvent = (thisDay: number) => {
    //Проверяю, есть ли евенты в во всеъ днях
    if (localStorageEventArray !== undefined)
      if (
        localStorageEventArray.find(
          ({ day: dayZ, month: thisMonth, year: thisYear }) =>
            dayZ === thisDay && thisMonth === month && thisYear === year
        )
      ) {
        return "ok";
      }
  };

  return (
    <ModalWrapper
      onClick={() => setModal !== undefined && setModal((prev) => !prev)}
    >
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <span>Минимум 6 символов</span>
        <ModalInputEventText onChange={onChangeInput} />
        {isDayHaveEvent(selectDay) === "ok" ? null:<ButtonCreateEvent disabled={valueInput.length < 6} onClick={createEvent}>СОЗДАТЬ</ButtonCreateEvent>}
        {isDayHaveEvent(selectDay) === "ok" ? (
          <DeleteButtonEvent onClick={deleteEvent}>УДАЛИТЬ</DeleteButtonEvent>
        ) : null}
      </ModalWindow>
    </ModalWrapper>
  );
};
