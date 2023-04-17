import React from "react";
import style from "../../styles/first.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function First() {
  return (
    <div>
      <section className={`${style.detailSec} ${style.first}`}>
        <h2 className={style.firstTitle}>첫 번째 길을 선택하셨군요.</h2>
        <h5 className={style.firstSub}>
          <span>
            <FontAwesomeIcon icon={faQuoteLeft} />
            &nbsp; &nbsp;1만 시간의 법칙 &nbsp; &nbsp;
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </h5>
        <p>
          1만 시간의 법칙(The 10,000 Hour Rule)은 매우 단순한 개념으로, 어떤
          분야에서 명인이 되기 위해서는 적어도 1만 시간 이상을 투자해야 한다는
          것입니다. 이 개념은 스웨덴의 심리학자 안더스 에릭슨이 제안한 것으로,
          수 많은 연구를 통해 밝혀졌습니다. 1만 시간의 법칙은 명인이 되기
          위해서는 체계적이고 집중적인 수련이 필요하다는 것을 강조합니다. 단순한
          노력만으로는 명인이 될 수 없으며, 특정 분야에서 전문가가 되기 위해서는
          지속적인 학습과 실험이 필요합니다. 이 법칙은 뮤지션, 스포츠 선수,
          예술가, 프로그래머 등 다양한 분야에서 적용될 수 있습니다. 이를테면,
          스티브 잡스나 마이클 조던, 비욘세와 같은 세계적인 인물들도 1만 시간
          이상을 투자하여 자신의 분야에서 성공을 이룬 것입니다. 그러나, 1만 시간
          이상 투자했다고 해서 반드시 명인이 되는 것은 아닙니다. 효율적인 학습과
          지속적인 발전이 필요합니다. 따라서, 1만 시간의 법칙은 어떤 분야에서도
          높은 수준의 전문성을 갖추기 위해 노력해야 한다는 것을 상기시켜주는
          중요한 개념이지만, 이것만으로 성공을 보장하지는 않습니다.
        </p>
      </section>
      <section className={`${style.detailSec} ${style.second}`}>
        <h3>성공을 위해서는 체계적인 계획이 필요합니다.</h3>
        <div className={style.imgBox}>
          <img
            src="https://cdn.pixabay.com/photo/2018/09/17/12/46/business-idea-3683781_960_720.jpg"
            alt="plan"
          />
        </div>
        <p>
          <strong>목표 설정하기</strong> : 전문성을 갖추고자 하는 분야에서
          달성하고자 하는 목표를 설정합니다. 목표는 구체적이고 측정 가능해야
          합니다.
          <br /> <strong>계획 세우기</strong> : 목표를 달성하기 위한 계획을
          세웁니다. 계획은 실현 가능하도록 구체적으로 작성해야 합니다. 또한,
          계획에는 연습 시간과 방법, 목표 달성을 위한 중간 단계 등이 포함되어야
          합니다. <br /> <strong>일정 관리하기</strong> : 계획에 따라 연습을
          진행할 때, 일정 관리가 중요합니다. 일정을 지키지 않으면 계획을
          실현하는 것이 어렵습니다. <br /> <strong>지속적인 피드백 받기</strong>{" "}
          : 전문성을 갖추기 위해서는 지속적인 피드백이 필요합니다. 자신의 연습을
          평가하고, 다른 전문가들의 평가를 받아보는 것이 좋습니다. 이를 통해
          자신의 연습 방법과 성과를 지속적으로 개선할 수 있습니다.
          <br /> <strong>심리적 안정 유지하기</strong> : 전문성을 갖추는 과정은
          어렵고 지루할 수 있습니다. 그렇기 때문에 심리적으로 안정을 유지하는
          것이 중요합니다. 적절한 휴식과 취미생활을 통해 스트레스를 푸는 것이
          좋습니다.
        </p>
      </section>
      <section className={`${style.detailSec} `}></section>
    </div>
  );
}

export default First;
