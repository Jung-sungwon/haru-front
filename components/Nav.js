import React, { useEffect, useState } from "react";
import style from "../componentStyle/nav.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./logout";

function Nav() {
  const [userCheck, setUserCheck] = useState(true);
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState({ email: "", role: "", name: "d" });
  const [navName, setNavName] = useState(false);

  const { name, role, email } = user;

  const dispatch = useDispatch();

  const router = useRouter();

  const nameRefresh = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}api/signcheck`, {
        withCredentials: true,
      })
      .then((res) => {
        const { email, name, role } = res.data;

        if (res.data.error === false) {
          setNavName(true);
        }
        if (email === "" || email === undefined) {
          setUserCheck(true);
          return;
        } else {
          setUser({ email, role, name });
          setUserCheck(false);

          dispatch({ type: "name", name: name });
        }
      });
  };

  const userSign = useSelector((state) => state.sign);

  const nameSave = useSelector((state) => state.nameSave);

  const logoutSign = useSelector((state) => state.out);
  if (logoutSign === false) {
    nameRefresh();

    dispatch({ type: "logout", connect: true });
  }

  if (userSign && userCheck === true) {
    nameRefresh();
  }

  useEffect(() => {
    nameRefresh();
  }, [nameSave]);

  const curveBar = () => {
    return (
      <>
        <Head>
          <link
            href="https://hangeul.pstatic.net/hangeul_static/css/NanumGgeuTeuMeoRiCe.css"
            rel="stylesheet"
          />
        </Head>
        <div className={`${style.navbar} ${nav ? style.navActive : null}`}>
          <span
            onClick={() => {
              router.push("/");
            }}
          >
            Main
          </span>
          <span
            onClick={() => {
              router.push("/road/first");
            }}
          >
            첫 번째 길
          </span>
          <span
            onClick={() => {
              router.push("/road/second");
            }}
          >
            두 번째 길
          </span>
          <span
            onClick={() => {
              router.push("/calendar");
            }}
          >
            Calendar
          </span>
          <span
            onClick={() => {
              router.push("/Information");
            }}
          >
            이용 안내
          </span>
          <section>
            {userCheck ? (
              <div
                className={style.sign}
                onClick={() => {
                  router.push("/user/signup");
                }}
              >
                signUp
              </div>
            ) : (
              <div>
                <Logout />
              </div>
            )}
            {userCheck ? (
              <div
                className={style.sign}
                onClick={() => {
                  router.push("/user/signin");
                }}
              >
                signIn
              </div>
            ) : (
              <div>
                <span
                  className={style.userName}
                  onClick={() => {
                    router.push("/mypage");
                  }}
                >
                  {name}
                </span>{" "}
                님
              </div>
            )}
          </section>
        </div>
        <div
          className={`${style.curveBar} ${nav ? style.curveActive : null}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>u</span>
        </div>
      </>
    );
  };
  return <div>{curveBar()}</div>;
}

export default Nav;
