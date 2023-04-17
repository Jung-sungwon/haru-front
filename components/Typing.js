import React, { useEffect, useState } from "react";
import style from "../componentStyle/typing.module.css";
import Head from "next/head";

function Typing({ typingWord }) {
  const [state, setState] = useState("");

  useEffect(() => {
    let word = [...typingWord];
    let result = "";
    const repeat = (prop) => {
      if (prop.length > state.length) {
        result = result + prop.shift();
        setState(result);
        setTimeout(() => {
          repeat(prop);
        }, 300);
      }
    };
    repeat(word);
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumABbaEuiYeonAePyeonJi.css"
          rel="stylesheet"
        />
      </Head>
      <section className={style.typingSec}>{state}</section>
    </div>
  );
}

export default Typing;
