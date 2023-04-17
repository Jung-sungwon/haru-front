import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import style from "../../styles/projectDetail.module.css";

function Index() {
  const router = useRouter();

  const [detail, setDetail] = useState({ title: "", period: "", purpose: "" });

  useEffect(() => {
    const { index: projectId } = router.query;

    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}info/projectDetail`, {
        params: { id: projectId },
      })
      .then((res) => {
        const { title, period, purpose } = res.data;
        setDetail({ title, period, purpose });
      });
  }, []);

  const { title, period, purpose } = detail;

  return (
    <div className={style.detailBoard}>
      <h3>Detail Page</h3>
      <section className={style.detailSec}>
        <div>
          <span>제 목</span> {title}
        </div>
        <div>
          <span>기 간</span> {period[0] + " ~ " + period[1]}
        </div>
        <div>
          <span>내 용</span>
          <br /> {purpose}
        </div>
      </section>
    </div>
  );
}

export default Index;

//useEffect에 쿼리 데이터를 넣을 수 있게끔 지연 시키는 용도로만 사용했음.
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
