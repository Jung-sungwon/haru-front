import React from "react";
import style from "../styles/expiration.module.css";

function expiration() {
  return (
    <div className={style.expireBoard}>
      <section className={style.expireSec}>
        <div>
          <h1>만료된 토큰 입니다.</h1>
          <h3>회원가입을 다시 진행해주세요</h3>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/12/52/crying-146425_960_720.png"
          alt="sad"
        />
      </section>
    </div>
  );
}

export default expiration;
