import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../componentStyle/gauge.module.css";

function Gauge({ period, project }) {
  const [gaugeNum, setGaugeNum] = useState(0);

  let per = (gaugeNum / period) * 100;

  per = per.toFixed(1);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}info/gauge`, {
        params: {
          project,
          period,
        },
      })
      .then((res) => {
        setGaugeNum(res.data.num);
      });
  }, []);

  return (
    <div className={style.board}>
      <div className={style.gauge} style={{ height: `${per}%` }}></div>
      <section>
        <div>진</div>
        <div>행</div>
        <div>률</div>
        <div>{per}%</div>
      </section>
    </div>
  );
}

export default Gauge;
