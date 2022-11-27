import React from "react";
import "./style.css";
import "./cardStyle.css";
import donut from "../assets/donut.png";
import pic1 from "../assets/pic1_1.png";
import man from "../assets/man.png";
import manGray from "../assets/man-gray.png";
import exit from "../assets/exit.png";
import check from "../assets/check.png";

function Onboarding() {
  return (
    <div className="onboarding-page onboarding">
      <header className="donut-page__header">
        <div className="donut-page__header header-donut">
          <div className="header-donut__profile profile">
            <div className="profile__img"></div>
            <div className="profile__name">Иван Иванов</div>
          </div>
          <div className="header-donut__buttons ">
            <button
              disabled
              className="header-donut__button header-donut__button-active"
            >
              <div className="header-donut__text">Раздел 1 - завершен</div>
              <div className="header-donut__btn-img"></div>
            </button>
            <button disabled className="header-donut__button">
              <div className="header-donut__text">Раздел 2 - Донат встречи</div>
            </button>
          </div>
          <button className="exit-btn">
            <img src={exit} alt="" />
          </button>
        </div>
      </header>
      <main className="onboarding__content">
        <div className="onboarding__donut">
          <div className="onboarding__donut-img">
            <img src={donut} alt=" пончик" />
          </div>
          <div className="onboarding__donut__text">X</div>
          <div className="onboarding__donut__count">1</div>
        </div>
        <div className="onboarding__container">
          <div className="onboarding__person persone">
            <div className="persone__img">
              <img src={man} alt="" />
            </div>
            <div className="persone__name">Балабуйко Екатерина</div>
            <div className="persone__description">
              Знакомься! Это наш главный ментор. Она будет помогать тебе на
              ранних этапах работы в проекте, направлять на верные пути решения
              задач и учить тебя писать только хороший код. В свободное время
              она обычно играет на рояле, а ещё она любит сухое вино.
            </div>
            <div className="onboarding__decor">
              <img src={pic1} alt="" />
            </div>
          </div>
          <div className="onboarding__progress">
            <ul className="step">
              <li className="step__item">
                <div className="step__item-active">
                  <img src={manGray} alt="" />
                </div>
              </li>
              <li className="step__item">
                <img src={check} alt="" />
              </li>
              <li className="step__item"></li>
              <li className="step__item">
                <img src={check} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Onboarding;
