import React from "react";
import style from "../../styles/first.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Second() {
  return (
    <div>
      <section className={`${style.detailSec} ${style.first}`}>
        <h2 className={style.firstTitle}>두 번째 길을 선택하셨군요.</h2>
        <h5 className={style.firstSub}>
          <span>
            <FontAwesomeIcon icon={faQuoteLeft} />
            &nbsp; &nbsp;20시간의 법칙 &nbsp; &nbsp;
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </h5>
        <p>
          조시 카우프만(Josh Kaufman)의 20시간의 법칙은, 새로운 스킬을 익힐때
          20시간의 연습량이면 일정 수준에 이를 수 있다는 이론입니다. 얼마나
          연습을 하느냐에 따라서 달라지겠지만 20시간 정도의 연습량이면 적어도
          내가 이런 것들을 할 수 있다. 라고 말 할 수준은 됩니다. 물론 20시간은
          어느 분야를 마스터 했다고 하기에는 굉장히 부족한 시간임은 틀림없지만,
          적어도 다방면에서 자기계발을 하려는 사람에게 있어서는 적절하다고 말 할
          수 있겠습니다.
          <br />
          여기서 주의 할 점은 '연습량'이 20시간이지 해당 스킬의 기초 및
          배경지식을 익히는 시간이 포함되어 있는것은 아니란 겁니다.
          <br />
          실력이 상승함에 있어서의 핵심은 이론보다는 연습에 있기 때문에 이론의
          비중보다는 실습의 비중을 높이는것을 권장드립니다.
          <br />
          하루 단련과 함께 하루에 적어도 1시간은 자기계발에 할애한다면, 매달
          새로운 기술을 익힐 수 있습니다.
          <br />
          도서 '아주 작은 습관의 힘'에서 저자 제임스 클리어는 말합니다. <br />
          하루에 단 1%씩만 성장 할 수 있다면, 1년 뒤에는 37배로 성장해
          있을것이라고 말이죠.
          <br />
          <strong style={{ fontSize: "1.4rem" }}>
            하루 단련은 매일 성장해 나갈 당신을 위해 응원을 전합니다.
          </strong>
        </p>
      </section>
      <section className={`${style.detailSec} ${style.second}`}>
        <h3>꾸준함은 자신을 강하게 만듭니다.</h3>
        <div className={style.imgBox}>
          <img
            src="https://cdn.pixabay.com/photo/2013/03/08/10/16/fire-91504__340.jpg"
            alt="blacksmith"
          />
        </div>
        <p>
          <strong>디즈레일리 - </strong> 사람이 지혜가 부족해서 일에 실패하는
          경우는 적다. 사람에게 늘 부족한것은 성실함이다
          <br /> <strong>캘빈 - </strong> 근면과 성실로 재산을 모은것은... 신의
          섭리에 어긋나지 않는다. <br /> <strong>토머스 칼라일 - </strong>{" "}
          독창성의 장점은 참신이 아니라, 성실함이다 믿는 사람은 독창적인
          인간이다 <br /> <strong>J.러스킨 - </strong> 인생은 흘러가는것이
          아니고 성실로써 이루어져 가는것이라야 한다 우리는 하루하루를 그저
          보내는것이 아니고 하루하루를 자기자신이 가진 그 무엇으로 채워가야 한다
          <br /> <strong>그라시안 - </strong> 성실한 행동만으로는 일을 올바르게
          처리할수 없다 성실과 지혜가 제대로 결합해야만 일을 완성할수 있는것이다
        </p>
      </section>
      <section className={`${style.detailSec} `}></section>
    </div>
  );
}

export default Second;
