import React, { useState } from "react";
import "./style.css";
import "./cardStyle.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import photo1 from "../assets/photo1.png";
import logoOggetto from "../assets/oggettoSign.png";
import line_1 from "../assets/decorativeLine.png";

function MainPage() {
	const navigate = useNavigate();
	const [rotateCards, setRotateCards] = useState(false);

	return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="лого" />
        </div>
        <button className="topic-btn__go" onClick={() => navigate("/login")}>
          Входи уже
        </button>
      </header>
      <main className="main">
        {/* TOPIC GOGA */}
        <section className="topic">
          <div className="topic__card__container__1">
            <div className="topic__card__wrapper__1">
              <div
                className={
                  rotateCards
                    ? "topic__card__flipper topic__card__flipper__rotate"
                    : "topic__card__flipper"
                }
              >
                <div className="topic__card__front">
                  <div className="topic__card__front__logo">
                    <img alt="Logo" src={logoOggetto} />
                  </div>
                </div>

                <div className="topic__card__back">
                  <div className="topic__card__back__photo">
                    <img alt="Photo123" src={photo1} />
                  </div>
                  <div>
                    <div className="topic__card__back__name">
                      Екатерина Доброва
                    </div>
                    <div className="topic__card__back__info">
                      Web Разработчик
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic__card__container__2">
            <div className="topic__card__wrapper__2">
              <div
                className={
                  rotateCards
                    ? "topic__card__flipper topic__card__flipper__rotate"
                    : "topic__card__flipper"
                }
              >
                <div className="topic__card__front">
                  <div className="topic__card__front__logo">
                    <img alt="Logo" src={logoOggetto} />
                  </div>
                </div>

                <div className="topic__card__back">
                  <div className="topic__card__back__photo">
                    <img alt="Photo10" src={photo1} />
                  </div>
                  <div>
                    <div className="topic__card__back__name">
                      Екатерина Доброва
                    </div>
                    <div className="topic__card__back__info">
                      Web Разработчик
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic__card__container__3">
            <div className="topic__card__wrapper__3">
              <div
                className={
                  rotateCards
                    ? "topic__card__flipper topic__card__flipper__rotate"
                    : "topic__card__flipper"
                }
              >
                <div className="topic__card__front">
                  <div className="topic__card__front__logo">
                    <img alt="Logo" src={logoOggetto} />
                  </div>
                </div>

                <div className="topic__card__back">
                  <div className="topic__card__back__photo">
                    <img alt="Photo11" src={photo1} />
                  </div>
                  <div>
                    <div className="topic__card__back__name">
                      Екатерина Доброва
                    </div>
                    <div className="topic__card__back__info">
                      Web Разработчик
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic__card__container__4">
            <div className="topic__card__wrapper__4">
              <div
                className={
                  rotateCards
                    ? "topic__card__flipper topic__card__flipper__rotate"
                    : "topic__card__flipper"
                }
              >
                <div className="topic__card__front">
                  <div className="topic__card__front__logo">
                    <img alt="Logo" src={logoOggetto} />
                  </div>
                </div>

                <div className="topic__card__back">
                  <div className="topic__card__back__photo">
                    <img alt="Photo12" src={photo1} />
                  </div>
                  <div>
                    <div className="topic__card__back__name">
                      Екатерина Доброва
                    </div>
                    <div className="topic__card__back__info">
                      Web Разработчик
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic__content">
            <div className="topic__content__info">
              <div className="topic__content__title">
                <p>привет</p> <p>я — квест</p> <p>онбординг</p>
              </div>
              <div className="topic__info">
                <p>
                  Я состою из двух этапов, на которых тебе нужно будет стать
                  ближе со своей проектной группой , а так же слопать по пончику
                  с рандомными сотрудниками компании, это тебе тоже пригодится,
                  ведь твой путь в Ogetto только начался, а впереди ещё много
                  великих дел. Удачи!
                </p>
              </div>
              <button
                className="topic-btn__go"
                onClick={() => navigate("/onboarding")}
              >
                Тыкай сюды
              </button>
              <div className="btn__container">
                <button
                  className="topic-btn__change__static-cards"
                  onClick={() => setRotateCards(true)}
                >
                  Раскрыть карты
                </button>
                <button
                  className="topic-btn__change_hover_cards"
                  onClick={() => setRotateCards(false)}
                >
                  Скрыть карты
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about__content">
            <div className="about__title">
              <span className="about__title-yellow">Из чего состоит</span>
              <br />
              квест онбординг?
            </div>
            <div className="card__items items">
              <div className="items__card card__">
                <div className="card__title">
                  <div className="card__order">01</div>
                  <div className="card__name">Путешествие</div>
                </div>
                <div className="card__text">
                  Гуляй по виртуальному офису в поисках артефактов. Познакомься
                  с ключевыми сотрудниками, узнай кто и чем тебе будут полезны в
                  работе, и запроси у них артефакт.
                </div>
              </div>
              <div className="items__card card__">
                <div className="card__title">
                  <div className="card__order">02</div>
                  <div className="card__name">
                    Cкушай пончик и расскажи о себе
                  </div>
                </div>
                <div className="card__text">
                  Во втором этапе тебе необходимо будет поговорить с тремя
                  рандомными членами команды, чтобы получить от них отвёртку,
                  клей, и костыль. Это необходимо для сборки артефакта воедино.
                </div>
              </div>
              <div className="items__card card__">
                <div className="card__title">
                  <div className="card__order">03</div>
                  <div className="card__name">
                    Получи награду за собранный артефакт
                  </div>
                </div>
                <div className="card__text">
                  Наши рекрутёры обменяют твой ценный артефакт на невероятно
                  крутой мерч. Ты получишь
                </div>
              </div>
            </div>
          </div>
          <div className="about__cylinder__1"></div>
          <div className="about__cylinder__2"></div>
          <div className="about__line__1">
            <img alt="Line1" src={line_1}></img>
          </div>
          <div className="about__line__2"></div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
