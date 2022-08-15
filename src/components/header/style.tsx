import styled from "styled-components";

export const Header_block = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const EventText = styled.div`
  width: 80%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(56, 53, 53, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(59, 56, 56, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(51, 48, 48, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Month_Year = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const Month = styled.h1`
  font-size: 35px;
  margin: 0;
  padding: 0;
  line-height: 0;
  color: #266fff;
`;
export const Year = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 0;
  color: #201f1f;
`;

export const WeekDaysBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const WeekDaysNames = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fffee3;
  border: 2px solid #2d4041;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-weight: bold;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(151, 144, 144, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(155, 144, 144, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(141, 137, 137, 0.22);
`;
export const Arrow = styled.span`
  margin: 0;
  padding: 0;
  line-height: 0;
  font-size: 30px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const ChooseMonth = styled.select`
width: 200px;
height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline:none;
  border:none;
  margin-top:10px;
  border-radius: 20px;
  text-align:center;
  font-size:30px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(151, 144, 144, 0.22);
  -moz-box-shadow: 0px 5px 10px 2px rgba(155, 144, 144, 0.22);
  box-shadow: 0px 5px 10px 2px rgba(141, 137, 137, 0.22);
`;
