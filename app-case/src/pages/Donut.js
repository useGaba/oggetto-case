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
            {isOpen ? null : (
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
