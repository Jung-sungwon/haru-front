import React, { useEffect, useState } from "react";
import style from "../../../styles/calendarDetail.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import Gauge from "@/components/Gauge";

function Index(props) {
  const { idx, project, period } = props;

  const [day, setDay] = useState({ detail: "", hour: 0, min: 0 });

  const [refresh, setRefresh] = useState(false);

  const { detail, hour, min } = day;

  const changeHandler = (name) => (e) => {
    setDay({ ...day, [name]: e.target.value });
  };

  const clickHandler = (e) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACK_URL}info/calendarDetail`,
        { props, day },
        { withCredentials: true }
      )
      .then((res) => {
        setRefresh(!refresh);
        toast(res.data.message);
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch {}
      });
  };

  const editHandler = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}info/calendarDetailEdit`,
        { props, day },
        { withCredentials: true }
      )
      .then((res) => {
        toast(res.data.message);
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch {}
      });
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACK_URL}info/getCalendarDetail`,
        {
          params: {
            idx,
            project,
            period,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        const { detail, hour, min } = res.data;
        setDay({ detail, hour, min });
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch {}
      });
  }, [refresh]);

  return (
    <div className={style.calDetailBoard}>
      <section className={style.calDetailSec}>
        <div>
          <label>단련 내용</label>
          <textarea
            type="text"
            onChange={changeHandler("detail")}
            value={detail}
          />
        </div>
        <div>
          <label>단련 시간</label>
          <section>
            <input
              type="number"
              placeholder="시 간"
              onChange={changeHandler("hour")}
              value={hour}
            />
            :
            <input
              type="number"
              placeholder="분"
              onChange={changeHandler("min")}
              value={min}
            />
          </section>
        </div>

        <p className={style.para}>오늘 단련, 성공하셨나요?</p>
        <span>
          <button onClick={clickHandler}>Y E S</button>
          <div onClick={editHandler} className={style.edit}>
            Edit
          </div>
        </span>
        <section className={style.gauge}>
          <Gauge period={period} project={project} />
        </section>
      </section>
      <section className={style.reload}>
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.reload();
            }
          }}
        >
          reload
        </button>
      </section>
    </div>
  );
}

export default Index;

export async function getServerSideProps(context) {
  let idx = "default";
  let project = "default";
  let period = "default";

  if (context.query.projectId) {
    const { index, projectId, periodLen } = context.query;
    idx = index;
    project = projectId;
    period = periodLen;
  }

  return {
    props: { idx, project, period },
  };
}
