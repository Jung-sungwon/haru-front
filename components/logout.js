import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Logout() {
  const dispatch = useDispatch();

  const router = useRouter();

  const clickHandler = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}api/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch({ type: "logout", connect: false });
        dispatch({ type: "login", sign: false });
        toast(res.data.message);
        router.push("/");
      })
      .catch((e) => {
        try {
          toast(e.response.data.error);
        } catch {}
      });
  };
  return (
    <div
      onClick={clickHandler}
      style={{ cursor: "pointer", fontWeight: "bold", color: "#3e4a61" }}
    >
      logout
    </div>
  );
}

export default Logout;
