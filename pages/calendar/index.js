import React, { useEffect, useState } from "react";
import style from "../../styles/calendar.module.css";
import { useRouter } from "next/router";
import Title from "@/components/Title";
import axios from "axios";

function Calendar() {
  const router = useRouter();

  const [dateArr, setDateArr] = useState([]);

  const [projectId, setProjectId] = useState();

  const [projectTitle, setProjectTitle] = useState();

  let periodLen = dateArr.length;

  let calen = new Date();

  const day = ["일", "월", "화", "수", "목", "금", "토"];

  //첫 요일 숫자버전
  let firstNum = new Date(calen.getFullYear(), calen.getMonth(), 1).getDay();

  //해당 달의 마지막 일자
  let dayOfWeek = new Date(
    calen.getFullYear(),
    calen.getMonth() + 1,
    0
  ).getDate();

  //해당 달의 모들 일자가 들어감
  let dayOfMonth = [];

  for (let i = 1; i <= firstNum; i++) {
    dayOfMonth.push("");
  }
  for (let i = 1; i <= dayOfWeek; i++) {
    dayOfMonth.push(i);
  }

  //총 몇주인지
  let arrLen = parseInt(dayOfMonth.length / 7) + 1;

  let resultArr = [];

  for (let i = 0; i < arrLen; i++) {
    let c = 7;
    if (i === 0) {
      let result = dayOfMonth.slice(i, c);
      resultArr.push(result);
    } else {
      let result = dayOfMonth.slice(i * c, i * c + c);
      resultArr.push(result);
    }
  }
  const today = calen.getDate();

  const getMonth = new Date().getMonth() + 1;
  const overlapDay = [];

  const dayFun = () => {
    return resultArr.map((i, idx) => {
      return (
        <tr key={idx}>
          {i.map((item, index) => {
            dateArr.map((arrItem, arrIndex) => {
              const arrMonth = arrItem.slice(5, 7);
              const numMonth = parseInt(arrMonth);
              const arrDay = arrItem.slice(7, 9);
              const numDay = parseInt(arrDay);

              if (getMonth === numMonth) {
                if (item === numDay) {
                  overlapDay.push(item);
                }
              }
            });

            if (item === today && overlapDay.includes(item)) {
              return (
                <td
                  key={index}
                  className={`${style.today} ${style.target}`}
                  onClick={() => {
                    if (item === "") {
                      return;
                    }
                    router.push(
                      `/calendar/detail/${item}?projectId=${projectId}&periodLen=${periodLen}`
                    );
                  }}
                >
                  {item}
                </td>
              );
            } else if (item === today) {
              return (
                <td
                  key={index}
                  onClick={() => {
                    if (item === "") {
                      return;
                    }
                    router.push(`/calendar/detail/${item}`);
                  }}
                  className={style.today}
                >
                  {item}
                </td>
              );
            }

            if (overlapDay.includes(item)) {
              return (
                <td
                  key={index}
                  className={style.target}
                  onClick={() => {
                    if (item === "") {
                      return;
                    }
                    router.push(
                      `/calendar/detail/${item}?projectId=${projectId}&periodLen=${periodLen}`
                    );
                  }}
                >
                  {item}
                </td>
              );
            }

            return (
              <td
                key={index}
                onClick={() => {
                  if (item === "") {
                    return;
                  }
                  //router.push(`/calendar/detail/${item}`);
                }}
              >
                {item}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}info/projectPeriod`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.message === "hello") {
        } else {
          setDateArr(res.data.dateArr);
          setProjectId(res.data.projectId);
          setProjectTitle(res.data.title);
        }
      });
  }, []);

  return (
    <div className={style.calenBoard}>
      <Title />
      <div className={style.proTitle}>
        <span>선택 된 프로젝트 : </span>
        {projectTitle}
      </div>
      <table className={`table table-dark  ${style.tableBoard}`}>
        <thead>
          <tr className="">
            {day.map((i, idx) => {
              return <td key={idx}>{i}</td>;
            })}
          </tr>
        </thead>
        <tbody>{dayFun()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
