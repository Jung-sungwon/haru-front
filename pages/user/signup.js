import React, { useState } from "react";
import style from "../../styles/signup.module.css";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}api/signup`, userData)
      .then((res) => {
        toast(res.data.message);
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
      name: "",
    });
  };

  const changeHandler = (name) => (e) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  return (
    <div className={style.signUpBoard}>
      <section className={style.infoBoard}>
        <h3>Create account</h3>
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
            <label htmlFor="name">name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={changeHandler("name")}
              value={userData.name}
            />
          </div>
          <button type="submit">sign up</button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
