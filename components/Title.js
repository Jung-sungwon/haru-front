import React from "react";
import style from "../componentStyle/title.module.css";
import Head from "next/head";

function Title() {
  return (
    <div>
      <Head>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumGiBbeumBarkEum.css"
          rel="stylesheet"
        />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumSoMiCe.css"
          rel="stylesheet"
        />
      </Head>
      <section className={style.titleBoard}>
        <h1 className={style.title}>하루 단련(鍛鍊)</h1>
        <div className={style.mean}>
          <div>단련(鍛鍊)</div>
          <div>1. 강한 의지를 갖도록 수련하는 것.</div>
          <div>
            2. 어떤 일을 여러 번 반복함으로써, 견딜 수 있게 되거나 익숙하게 되는
            것.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Title;
