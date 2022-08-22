import { useEffect, useState } from "react";
import { Props } from "../../App";
import { AllDaysInMonth, DaysBlock } from "./style";

export const Days: React.FC<Props> = ({
  allDaysInMonth,
  setModal,
  setSelectDay,
  selectDay,
  month,
  year,
  value,
  setValue,
  setLocalStorageEventArray,
  localStorageEventArray,
  modal
}) => {
  const getAllDaysInMonth = () => {
    const arr: number[] = [];
    if (allDaysInMonth !== undefined)
      for (let i: number = 1; i <= allDaysInMonth; i++) {
        arr.push(i);
      }
    return arr;
  };
  const isDate = new Date();
  const [todayMonth, setTodayMonth] = useState<number>(Number(isDate.getMonth()));
  const [todayYear, setTodayYears] = useState<number>(Number(isDate.getFullYear()));
  const [day, setDay] = useState(Number(new Date().getDate()));
  const ColorNowDay = (nowDay: number) => {
    if (nowDay === day&&year===todayYear&&month===todayMonth) return "ok";
  };


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
    for (let i: number = 0; i <= 31; i++) {
      if (
        getAllLocalStorageEvent(i) !== undefined &&
        getAllLocalStorageEvent(i) !== null
      ) {
        if(setLocalStorageEventArray!==undefined)
        setLocalStorageEventArray((prev) => [
          ...prev,
          getAllLocalStorageEvent(i),
        ]);
      }
    }
  }, [year,month,modal]);




  const findEventStyleDay = (thisDay: number) => {//Проверяю, есть ли евенты в во всеъ днях
    if(localStorageEventArray!==undefined)
    if (
      localStorageEventArray.find(
        ({ day: dayZ, month:thisMonth, year:thisYear }) =>
          dayZ === thisDay && thisMonth=== month && thisYear === year
      )
    ) {
      return "ok";
    }
  };


  const findEventText=(days:number)=>{
    if(localStorageEventArray!==undefined)
      localStorageEventArray.find(
        ({ day: dayZ, month:thisMonth, year:thisYear,event }) =>
        dayZ === days && thisMonth=== month && thisYear === year&&
          setValue!==undefined&&
     setValue(String(event))
      )
  }

  return (
    <DaysBlock>
      {getAllDaysInMonth().map((days: number) => (
        <AllDaysInMonth
        onMouseMove={()=>findEventText(days)}
        onMouseOut={(()=>setValue!==undefined&&setValue(''))}
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
