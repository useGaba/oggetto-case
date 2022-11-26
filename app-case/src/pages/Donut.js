import React, { useState } from "react";
import check from "../assets/check.png";
import exit from "../assets/exit.png";
import oggettoSignTonal from "../assets/oggetto-sign-tonal_sign-tonal.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";
import flip from "../assets/flip.png";

import "./style.css";

function DonutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const openPerson = () => {
    setIsOpen(true);
  };

  return (
    <div className="donut donut-page">
      <header className="donut-page__header">
        <div className="donut-page__header header-donut">
          <div className="header-donut__profile profile">
            <div className="profile__img"></div>
            <div className="profile__name">Иван Иванов</div>
          </div>
          <div className="header-donut__buttons ">
            <button disabled className="header-donut__button">
              <div className="header-donut__text">Раздел 1 - завершен</div>
              <div className="header-donut__btn-img">
                <img src={check} alt="" />
              </div>
            </button>
            <button className="header-donut__button header-donut__button-active">
              <div className="header-donut__text">Раздел 2 - Донат встречи</div>
            </button>
          </div>
          <button className="exit-btn">
            <img src={exit} alt="" />
          </button>
        </div>
      </header>
      <div className="donut__content">
        <div className="donut__cards">
          <div className="donut__card">
            <div className="donut__card-action">
              <img src={prev} alt="" />
            </div>
            <img src={oggettoSignTonal} alt="" />
          </div>
          <div
            className={!isOpen ? "donut__card" : "donut__card donut__card-open"}
          >
            {isOpen ? (
              <>
                <div className="donut__card-content card-content">
                  <div className="card-content__user ">
                    <div className="card-content__img"></div>
                    <div className="card-content__name">Мария Иванова</div>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Должность: </span>
                    <span className="card-content__data">HR-менеджер</span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Уровень: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Hard skills: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Дата рождения: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Хобби: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">email: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">Телефон: </span>
                    <span className="card-content__data"></span>
                  </div>
                  <div className="card-content__info">
                    <span className="card-content__text">
                      Локация: Таганрогский офис, Петровская 89
                    </span>
                    <span className="card__data"></span>
                  </div>
                </div>
                <a
                  href="https://web.telegram.org"
                  className="card-content__link"
                >
                  Написать в телеграмм
                </a>
              </>
            ) : (
              <>
                <div onClick={openPerson} className="donut__card-action">
                  <img src={flip} alt="" />
                </div>
                <img src={oggettoSignTonal} alt="" />
              </>
            )}
          </div>
          <div className="donut__card">
            <div className="donut__card-action">
              <img src={next} alt="" />
            </div>
            <img src={oggettoSignTonal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonutPage;
