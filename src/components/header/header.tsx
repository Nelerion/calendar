import { monthName, weekNames } from "./scripts";
import {
  Arrow,
  ChooseMonth,
  EventText,
  Header_block,
  Month,
  Month_Year,
  WeekDaysBlock,
  WeekDaysNames,
  Year,
} from "./style";
import { Props } from "./../../App";
type MonthYear = {
  month: number;
  year: number;
  getMonth(): string | undefined;
};

export const Header: React.FC<Props> = ({
  month,
  year,
  setAllDays,
  setYear,
  setMonth,
  value,
}) => {
  const date: MonthYear = {
    month: month,
    year: year,
    getMonth: () => {
      return monthName.find((month: string, index: number) =>
        date.month === index ? month : null
      );
    },
  };

  const backYear = () => {
    if (setYear !== undefined) setYear((prev) => prev - 1);
  };
  const nextYear = () => {
    if (setYear !== undefined) setYear((prev) => prev + 1);
  };

  const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const monthValue = e.currentTarget.value;
    const IndexMonth = monthName.indexOf(monthValue);
    if (setAllDays != undefined&&setMonth!==undefined){
      setMonth(IndexMonth);
      setAllDays(new Date(year, IndexMonth + 1, 0).getDate());
    }
    return IndexMonth;
  };

  return (
    <Header_block>
      <EventText>{value}</EventText>
      <ChooseMonth onChange={changeMonth}>
        {monthName.map((allMonth: string,index:number) => (
          <option key={allMonth} selected={index===month?true:false}>{allMonth}</option>
        ))}
      </ChooseMonth>
      <Month_Year>
        <Month>{date.getMonth()}</Month>
        <Year>
          <Arrow onClick={backYear}>{"<"}</Arrow>
          {date.year}
          <Arrow onClick={nextYear}>{">"}</Arrow>
        </Year>
      </Month_Year>
      <WeekDaysBlock>
        {weekNames.map((weekDay: string) => (
          <WeekDaysNames>{weekDay}</WeekDaysNames>
        ))}
      </WeekDaysBlock>
    </Header_block>
  );
};
