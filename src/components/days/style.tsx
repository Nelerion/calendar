import styled from "styled-components";

export type border = {
  nowDay: string | undefined;
  dayHaveEvent: string | undefined;
};

export const DaysBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const AllDaysInMonth = styled.div<border>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.nowDay === "ok" ? "#266fff" : "white")};
  border: 
    ${(props) => (props.dayHaveEvent === "ok" ? "1px solid #ff0000" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(151, 144, 144, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(155, 144, 144, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(141, 137, 137, 0.22);
  margin: 7px;
  &:hover {
    background-color: Aquamarine;
    cursor: pointer;
    font-weight: bold;
  }
`;
