import React, { useEffect, useRef, useState } from "react";
import Title from "@/components/Title";
import style from "../styles/Home.module.css";
import Typing from "@/components/Typing";
import { useRouter } from "next/router";

function Index() {
  const fade1Ref = useRef(null);
  const script2Ref = useRef(null);
  const [fade1, setFade1] = useState(false);
  const [script2, setScript2] = useState(false);
  const [dot, setDot] = useState(false);
  const [dotDetail, setDotDetail] = useState({ 1: false, 2: false, 3: false });

  const router = useRouter();

  useEffect(() => {
    let observer1 = new IntersectionObserver((e) => {
      setFade1(e[0].isIntersecting);
    });

    let observer2 = new IntersectionObserver((e) => {
      setScript2(e[0].isIntersecting);
    });

    observer1.observe(fade1Ref.current);
    observer2.observe(script2Ref.current);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDotDetail({ [1]: true });
    }, 1000);
    setTimeout(() => {
      setDotDetail({ [2]: true });
    }, 2000);
    setTimeout(() => {
      setDotDetail({ [3]: true });
      setDot(!dot);
    }, 3000);
  }, [dot]);

  return (
    <div>
      <Title />
      <div className={style.first1}>
        <section className={style.typingSec}>
          <Typing typingWord="중요한건 꺾이지 않는 마음!" />
        </section>
      </div>
      <div className={style.first2Water}>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </div>
      <div className={style.first2}>
        <section
          className={`${style.fade1} ${fade1 ? style.active1 : null}`}
          ref={fade1Ref}
        >
          하루 24시간
        </section>
        <br />
        <section className={`${style.fade2} ${fade1 ? style.active1 : null}`}>
          하루 86400초
        </section>

        <span className={style.fadeUnderSpan}>
          여러분은 자신을 위한 시간은 얼마나 '소비' 하고 있나요..?
        </span>
      </div>
      <div className={`${style.first3} `}>
        <div className={style.scriptDiscrimination} ref={script2Ref}></div>
        <section
          className={`${style.midScript1} ${script2 ? style.active2 : null}`}
        >
          직장인 하루 여가시간은 228분 입니다
        </section>

        <section
          className={`${style.midScript2} ${script2 ? style.active3 : null}`}
        >
          ...그리고 하루 평균 자기계발 시간은 36분에 불과하죠
        </section>
      </div>
      <div className={style.last1}>
        <span>한가지 의문이 생겼습니다.</span>
        <br />
        <br />
        <p>바쁜 사회생활을 하는 와중에는 정말 자기계발이 힘든거냐구요. </p>
        <div className={style.imgDiv}>
          <p>
            그리하여
            <br />
            책에게 답을 구했습니다.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;그리고...
            <br />
            책은 두 가지 길을 제안 했습니다.
          </p>
        </div>
      </div>
      <div className={style.last2}>
        <section className={style.selectSec}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/05/01/00/04/road-sign-747623_960_720.jpg"
              alt="갈래길"
            />
          </div>
          <p>
            <strong>첫 번째 길</strong>은 1만 시간의 계획적인 연습을 통해 세계
            최고가 되는것이었고
            <br />
            <br />
            <br />
            <strong>두 번째 길</strong>은 무엇인가를 학습하는 것에 최소한의
            시간을 들여 좀 더 다재다능한 사람이 되는 길이었습니다.
          </p>
        </section>
      </div>
      <div className={style.last3}>
        <div>
          어느 <strong>길</strong>을 선택하든, 상관없습니다.
        </div>
        <br />
        <p>
          중요한 건 <strong>매일</strong> 하루를 <strong>단련</strong>해 나가는
          것이니까요.
          <br />
          <br />
          하루단련은 <br />
          매일 하루를 이겨내려하는 사람들을 위한 플래너입니다.
        </p>
        <section className={style.threeDot}>
          <div className={`${dotDetail[1] ? style.dotActive : null}`}></div>
          <div className={`${dotDetail[2] ? style.dotActive : null}`}></div>
          <div className={`${dotDetail[3] ? style.dotActive : null}`}></div>
        </section>
        <h1>자... 그럼 시작합니다.</h1>
        <section className={style.btnSec}>
          <button
            type="button"
            onClick={() => {
              router.push("/road/first");
            }}
          >
            {" "}
            첫 번째 길
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/road/second");
            }}
          >
            두 번째 길
          </button>
        </section>
      </div>
    </div>
  );
}

export default Index;
