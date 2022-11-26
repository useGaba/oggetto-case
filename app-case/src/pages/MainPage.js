import React from "react";
import "./style.css";
import logo from "../assets/logo.svg";
import team from "../assets/team.png";
import arrow from "../assets/arrow.png";
import bublic from "../assets/bublic.png";
import cone from "../assets/cone.png";
import cube from "../assets/cube.png";
import ball from "../assets/ball.png";

function MainPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="лого" />
        </div>
        <div className="header__items">
          <div className="header__item">Функции</div>
          <div className="header__item">Преимущества</div>
          <div className="header__item">Как использовать</div>
          <div className="header__item">Частые вопросы</div>
        </div>
      </header>
      <main className="main">
        <section className="about">
          <div className="about__content">
            <h2 className="about__title">
              Классный заголовок - потому что Матвей красавчик
            </h2>
            <div className="card__items items">
              <div className="items__card card">
                <div className="card__img">
                  <img src={bublic} alt="бублик" />
                </div>
                <div className="card__title">
                  <div className="card__order">01</div>
                  <div className="card__name">Развитие</div>
                </div>
                <div className="card__text">
                  Новичкам выделяем ментора. Все сотрудники регулярно получают
                  честную обратную связь от руководителя и коллег.
                </div>
              </div>
              <div className="items__card card">
                <div className="card__img">
                  <img src={cube} alt="кубик" />
                </div>
                <div className="card__title">
                  <div className="card__order">02</div>
                  <div className="card__name">Работа</div>
                </div>
                <div className="card__text">
                  Удовольствие от работы Задачи сотрудника соотносятся с его
                  уровнем: не слишком сложные, чтобы ставить в тупик, и не
                  слишком простые, чтобы было скучно
                </div>
              </div>
              <div className="items__card card">
                <div className="card__img">
                  <img src={cone} alt="конус" />
                </div>
                <div className="card__title">
                  <div className="card__order">03</div>
                  <div className="card__name">Вознаграждения</div>
                </div>
                <div className="card__text">
                  Новичкам выделяем ментора. Все сотрудники регулярно получают
                  честную обратную связь от руководителя и коллег.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game">
          <div className="logo">
            <img src={logo} alt="лого" />
          </div>
          <div className="game__content">
            <div className="game-container">
              <div className="title">
                Классный заголовок придумаем завтра 
              </div>
              <div className="title title-yellow">
                 вместе
              </div>
              <div className="sub-title">
                Оджетто входит в ТОП-5 компаний России, создающих системы
                электронной коммерции для крупных клиентов. Мы являемся 1-м
                официальным партнером Magento в России и имеем 13 лет опыта на
                рынках России, Европы и США. Обладатели таких наград, как
                Рейтинг Рунета, UKRAINIAN E-COMMERCE AWARDS, ЗОЛОТОЙ САЙТ,
                AWWARDS, CSSDesignAwards
              </div>
            </div>
          </div>
          <button className="game__button">Просто тыкнуть</button>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
