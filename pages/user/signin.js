import React, { useState } from "react";
import style from "../../styles/signup.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const router = useRouter();

  const userSign = useSelector((state) => state.sign);

  if (userSign === true) {
    router.push("/");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}api/signin`, userData, {
        withCredentials: true,
      })
      .then((res) => {
        toast(res.data.message);
        loginAction();
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch (err) {
          toast("잠시 후 다시 시도해주세요");
        }
      });

    setUserData({
      email: "",
      password: "",
    });
  };

  const changeHandler = (name) => (e) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  const loginAction = () => {
    dispatch({ type: "login", sign: true });
  };

  return (
    <div className={style.signUpBoard}>
      <section className={style.infoBoard}>
        <h3>SignIn</h3>
        <form className={style.formSec} onSubmit={submitHandler}>
          <div>
            <label htmlFor="mail">e-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              id="mail"
              onChange={changeHandler("email")}
              value={userData.email}
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={changeHandler("password")}
              value={userData.password}
            />
          </div>
          <button type="submit">sign in</button>
        </form>
      </section>
    </div>
  );
}

export default Signin;
