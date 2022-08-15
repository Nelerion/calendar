import { useEffect, useState } from "react";
import { Props } from "../../App";
import { Year } from "../header/style";
import { AllDaysInMonth, DaysBlock } from "./style";

interface ILocalStorageEvent {
  day?: number;
  month?: number;
  year?: number;
  event?: string;
}

export const Days: React.FC<Props> = ({
  allDaysInMonth,
  setModal,
  setSelectDay,
  selectDay,
  month,
  year,
  value,
}) => {
  const getAllDaysInMonth = () => {
    const arr: number[] = [];
    if (allDaysInMonth !== undefined)
      for (let i: number = 1; i <= allDaysInMonth; i++) {
        arr.push(i);
      }
    return arr;
  };

  const [day, setDay] = useState(Number(new Date().getDate()));
  const ColorNowDay = (nowDay: number) => {
    if (nowDay === day) return "ok";
  };

  const [localStorageEventArray, setLocalStorageEventArray] = useState<
    ILocalStorageEvent[]
  >([]);

  const getAllLocalStorageEvent = (allDay: number) => {
    const local = JSON.parse(
      String(
        localStorage.getItem(
          JSON.stringify({ day: allDay, month: month, year: year })
        )
      )
    );
    return local;
  };
  const openModalforCreateEvent = (day: number) => {
    if (setModal !== undefined && setSelectDay !== undefined) {
      setSelectDay(day);
      setModal((prev) => !prev);
    }
  };

  useEffect(() => {
    for (let i: number = 0; i < 31; i++) {
      if (
        getAllLocalStorageEvent(i) !== undefined &&
        getAllLocalStorageEvent(i) !== null
      ) {
        setLocalStorageEventArray((prev) => [
          ...prev,
          getAllLocalStorageEvent(i),
        ]);
      }
    }
  }, []);


  const findEventStyleDay = (thisDay: number) => {//Проверяю, есть ли евенты в во всеъ днях
    if (
      localStorageEventArray.find(
        ({ day, month, year }) =>
          day === thisDay && month === month && year === year
      )
    ) {
      return "ok";
    }
  };

  return (
    <DaysBlock>
      {getAllDaysInMonth().map((days: number) => (
        <AllDaysInMonth
          nowDay={ColorNowDay(days)}
          dayHaveEvent={findEventStyleDay(days)}
          onClick={() => openModalforCreateEvent(days)}
          key={days}
        >
          {days}
        </AllDaysInMonth>
      ))}
    </DaysBlock>
  );
};
