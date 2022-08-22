import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header/header";
import React, { useEffect, useState } from "react";
import { Days } from "./components/days/days";
import { Modal } from "./components/modal/modal";

const Calendar = styled.div`
  width: 500px;
  background: rgb(237, 237, 244);
  background: linear-gradient(
    0deg,
    rgba(237, 237, 244, 1) 0%,
    rgba(230, 230, 242, 1) 28%,
    rgba(175, 241, 255, 1) 81%
  );
  -webkit-box-shadow: 0px 5px 10px 2px rgba(126, 112, 112, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(128, 114, 114, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(119, 113, 113, 0.22);
  border-radius: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
interface ILocalStorageEvent {
  day?: number;
  month?: number;
  year?: number;
  event?: string;
}
export type Props = {
  modal?: boolean;
  month: number;
  year: number;
  selectDay?: number;
  allDaysInMonth?: number;
  value?: string;
  setValue?: (value: string | ((prevVar: string) => string)) => void;
  localStorageEventArray?: ILocalStorageEvent[];
  setAllDays?: (value: number | ((prevVar: number) => number)) => void;
  setYear?: (value: number | ((prevVar: number) => number)) => void;
  setMonth?: (value: number | ((prevVar: number) => number)) => void;
  setModal?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setSelectDay?: (value: number | ((prevVar: number) => number)) => void;
  setLocalStorageEventArray?: (
    value:
      | Array<ILocalStorageEvent>
      | ((prevVar: Array<ILocalStorageEvent>) => Array<ILocalStorageEvent>)
  ) => void;
};
interface ILocalStorageEvent {
  day?: number;
  month?: number;
  year?: number;
  event?: string;
}

export type PropsModal = {
  modal?: boolean;
  selectDay: number;
  month: number;
  year: number;
  value?: string;
  localStorageEventArray?: ILocalStorageEvent[];
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setSelectDay?: (value: number | ((prevVar: number) => number)) => void;
  setLocalStorageEventArray?: (
    value:
      | Array<ILocalStorageEvent>
      | ((prevVar: Array<ILocalStorageEvent>) => Array<ILocalStorageEvent>)
  ) => void;
};

const App: React.FC = () => {
  const isDate = new Date();
  const [month, setMonth] = useState<number>(Number(isDate.getMonth()));
  const [year, setYear] = useState<number>(Number(isDate.getFullYear()));
  const [allDaysInMonth, setAllDays] = useState(
    new Date(year, month + 1, 0).getDate()
  );
  const [value, setValue] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState<number>(Number());
  const [localStorageEventArray, setLocalStorageEventArray] = useState<
    ILocalStorageEvent[]
  >([]);

  useEffect(() => {
    setAllDays(new Date(year, month + 1, 0).getDate());
  }, [month, year]);

  return (
    <div className="App">
      <Calendar>
        {modal ? (
          <Modal
            setModal={setModal}
            year={year}
            month={month}
            selectDay={selectDay}
            localStorageEventArray={localStorageEventArray}
            setLocalStorageEventArray={setLocalStorageEventArray}
            modal={modal}
          />
        ) : null}
        <Header
          month={month}
          year={year}
          setAllDays={setAllDays}
          setYear={setYear}
          setMonth={setMonth}
          value={value}
        />
        <Days
          setValue={setValue}
          modal={modal}
          value={value}
          month={month}
          year={year}
          allDaysInMonth={allDaysInMonth}
          setModal={setModal}
          selectDay={selectDay}
          setSelectDay={setSelectDay}
          setLocalStorageEventArray={setLocalStorageEventArray}
          localStorageEventArray={localStorageEventArray}
        ></Days>
      </Calendar>
    </div>
  );
};

export default App;
