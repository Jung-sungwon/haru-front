import React, { useState } from "react";
import style from "../styles/createproject.module.css";
import axios from "axios";
import { toast } from "react-toastify";

function Createproject() {
  const [data, setData] = useState({ title: "", period: "", purpose: "" });

  const changeHandler = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("action");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACK_URL}info/createproject`,
        { data },
        { withCredentials: true }
      )
      .then((res) => {
        toast(res.data.message);
        setData({ title: "", period: "", purpose: "" });
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch (err) {
          console.log("프로젝트 생성 에러 : ", err);
        }
      });
  };

  return (
    <div className={style.createBoard}>
      <h3>Create a Project</h3>
      <form className={style.createSec} onSubmit={submitHandler}>
        <div>
          <label>제목 </label>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={changeHandler("title")}
            value={data.title}
          />
        </div>
        <div>
          <label>기간 </label>
          <input
            type="number"
            placeholder="숫자를 입력해주세요.(하루 단위)"
            onChange={changeHandler("period")}
            value={data.period}
          />
        </div>
        <div>
          <label>목표 </label>
          <textarea
            type="text"
            placeholder="목표를 적어주세요."
            onChange={changeHandler("purpose")}
            value={data.purpose}
          />
        </div>
        <span>
          <button type="submit">생 성</button>
        </span>
      </form>
    </div>
  );
}

export default Createproject;
