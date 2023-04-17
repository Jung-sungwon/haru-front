import React from "react";
import style from "../styles/information.module.css";
import Image from "next/image";

function Information() {
  return (
    <div>
      <section className={style.infoSec}>
        <div className={style.title}>
          <h1>하루단련 설명서</h1>
          <p>
            하루단련은 오늘을 이겨내려는 사람들을 위한 플래너입니다.
            <br />
            아래의 간단한 이용 안내를 읽어보시면 사이트에 더 쉽게 접근 할 수
            있습니다.
          </p>
        </div>
        <section className={style.menu}>
          <h4>하나.</h4>
          <img src="/메뉴.png" alt="메뉴" />
          <p>좌측상단에 메뉴 버튼을 클릭합니다.</p>
        </section>
        <section className={style.signup}>
          <h4>둘.</h4>
          <div>
            <img src="/가입.png" alt="가입" />
            <p>
              메뉴바 우측의 signUp버튼을 클릭하시면 가입페이지로 이동합니다.
            </p>
          </div>
        </section>
        <section className={style.signuppage}>
          <h4>셋.</h4>
          <div>
            <img
              src="/가입페이지.png"
              alt="가입페이지"
              className={style.signupImg}
            />
            <p>
              메뉴바 우측의 signUp버튼을 클릭하시면 가입페이지로 이동합니다.
              본인의 e-mail주소와 하루단련에서 사용할 이름을 정하시면 해당
              메일주소로 가입 인증링크가 전송됩니다.
            </p>
          </div>
        </section>
      </section>
      <section className={style.infoSecTwo}>
        <div className={style.mail}>
          <h4>넷.</h4>
          <img src="/메일.png" alt="메일" />
          <p>
            해당 메일에 들어가면 인증링크가 나옵니다. 해당 링크를 클릭해주세요.
          </p>
        </div>
        <div className={style.activePage}>
          <h4>다섯 .</h4>
          <img src="/인증페이지.png" alt="인증페이지" />
          <p>
            인증페이지로 이동해서, 패스워드를 설정해줍니다.
            <br />
            그리고, 활성화버튼을 누르면됩니다.
          </p>
        </div>
        <div className={style.mypageName}>
          <h4>여섯 .</h4>
          <img src="/마이페이지입장.png" alt="마이페이지입장" />
          <p>
            계정을 활성화 한 후 로그인을 하면 메뉴바에 계정 이름이 나옵니다.{" "}
            <br />
            이름을 클릭하게 되면 마이페이지로 이동하게 돼요.
          </p>
        </div>
      </section>
      <section className={style.infoSecThree}>
        <div className={style.mypage}>
          <h4>일곱 .</h4>
          <img src="/마이페이지.png" alt="마이페이지" />
          <p>
            마이페이지에서 유저의 이메일과 이름이 나오는데, 이메일은 수정하지
            못합니다. <br /> 하지만 원한다면 이름은 수정하고 save버튼을 누르면
            됩니다.
            <br />
            <br />
            Create a Project 버튼을 누르면 새 프로젝트를 만들 수 있습니다.
          </p>
        </div>
        <div className={style.create}>
          <h4>여덟 .</h4>
          <img src="/프로젝트생성.png" alt="프로젝트생성" />
          <p>
            프로젝트 생성 페이지에서 제목 기간 목표를 입력하고, 생성 버튼을
            클릭합니다.
          </p>
        </div>
      </section>
      <section className={style.infoSecFour}>
        <div className={style.list}>
          <h4>아홉 .</h4>
          <img src="프로젝트리스트.png" alt="프로젝트리스트" />
          <p>
            마이페이지에서 Project List버튼을 누르면 지금까지 생성한 프로젝트의
            목록이 나옵니다.
            <br />
            프로젝트의 상세내용을 확인 할 수 있고 삭제도 가능하지만, 해당
            프로젝트를 진행하고 싶다면,
            <br />
            선택을 눌러주세요.
          </p>
        </div>
        <div className={`${style.select} ${style.list}`}>
          <h4>열 .</h4>
          <img src="선택프로젝트.png" alt="선택프로젝트" />
          <p>
            프로젝트를 선택하고 메뉴바에서 캘린더로 이동하게되면, 우측 상단에
            <br /> 내가 선택한 프로젝트의 이름이 나옵니다.
          </p>
        </div>
      </section>
      <section className={style.infoSecFive}>
        <div className={style.calendarperiod}>
          <h5>열 하나 .</h5>
          <img src="캘린더기간.png" alt="캘린더기간" />
          <p>
            프로젝트를 선택했다면,캘린더의 프로젝트 기간에 해당하는 일자의
            배경색상이 변합니다.
            <br />
            그리고 프로젝트 기간동안의 일자를 클릭하면 단련 내용을 기록 할 수
            있습니다.
          </p>
        </div>
        <div className={style.calendarperiod}>
          <h5>열 둘 .</h5>
          <img src="캘린더디테일.png" alt="캘린더디테일" />
          <p>
            단련 내용과 단련 시간을 기록 할 수 있습니다.
            <br />
            내용을 입력 후 YES버튼을 누르면 저장이 되고, 저장 후 수정을 원한다면
            <br />
            내용을 변경하고 나서 Edit버튼을 누르면 수정이 됩니다.
            <br />
            선택한 프로젝트의 진행현황은 우측 진행률 바에서 확인이 가능합니다.
            <br />
            만약에 데이터가 제대로 로드되지 않았다면, 하단의 reload버튼을
            눌러주세요.
          </p>
        </div>
        <div className={style.end}>
          <div>
            <strong>
              이상으로 하루 단련이었습니다.
              <br />
              이 사이트를 이용해주시는 분들 모두 목표한 바를 이루시기를 간절히
              기도드리며,
              <br />
              개발자로서 단 한분이라도 도움을 받으셨다면 더 이상 바랄게 없을 것
              같습니다.
              <br />
              여러분의 오늘 하루도 응원하겠습니다.
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;
