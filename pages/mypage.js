import React, { useEffect, useState } from "react";
import style from "../styles/mypage.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import ProListModal from "@/components/ProListModal";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

function Mypage() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const dispatch = useDispatch();

  const [listModal, setListModal] = useState(false);

  const { name, email } = userData;

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}info/myinfo`, {
        withCredentials: true,
      })
      .then((res) => {
        const { name, email } = res.data;
        setUserData({ name, email });
      })
      .catch((e) => {
        router.push("/");
      });
  }, []);

  const clickHandler = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}info/userNameUpdate`,
        userData,
        { withCredentials: true }
      )
      .then((res) => {
        toast(res.data.message);
        dispatch({ type: "nameSave" });
      });
  };

  return (
    <div className={style.mypageBoard}>
      {listModal ? <ProListModal exit={setListModal} /> : null}
      <h2>My Page</h2>
      <section className={style.mypageSec}>
        <div className={style.infodiv}>
          <label>e-mail</label>
          <input type="text" defaultValue={email} disabled />
          <label>name</label>
          <input
            type="text"
            defaultValue={name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        </div>
        <section className={style.project}>
          <div
            onClick={() => {
              router.push("/createproject");
            }}
          >
            Create a Project
          </div>
          <div
            onClick={() => {
              setListModal(true);
            }}
          >
            Project List{" "}
          </div>
        </section>

        <div className={style.mybtnDiv}>
          <button
            className={style.mybtn}
            onClick={() => {
              clickHandler();
            }}
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default Mypage;
