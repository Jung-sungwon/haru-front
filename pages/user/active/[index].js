import React, { useEffect, useState } from "react";
import style from "../../../styles/active.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

function Active(props) {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [user, setUser] = useState({ email: "", name: "" });

  const { index: indexToken } = router.query;

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}api/active`, { indexToken })
      .then((res) => {
        const { email, name } = res.data;
        setUser({ name, email });
        return res.data;
      })
      .catch((e) => {
        router.push("/expiration");
      });
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}api/activeAccount`, {
        pw,
        user,
      })
      .then((res) => {
        toast(res.data.message);
        router.push("/user/signin");
      });
    setPw("");
  };

  const changeHandler = (e) => {
    setPw(e.target.value);
  };

  return (
    <div className={style.activeBoard}>
      <form className={style.activeSec}>
        <h3>{user.name} 님 환영합니다!</h3>
        <p>패스워드 설정 후 계정을 활성화 해주세요.</p>
        <div>
          <label>PassWord</label>
          <input type="password" onChange={changeHandler} value={pw} />
        </div>
        <button type="submit" onClick={clickHandler}>
          활성화
        </button>
      </form>
    </div>
  );
}

export default Active;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
