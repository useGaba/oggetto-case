import React from "react";
import "./style.css";
import "./cardStyle.css";
import logo from "../assets/logo.svg";
import team from "../assets/team.png";
import arrow from "../assets/arrow.png";
import bublic from "../assets/bublic.png";
import cone from "../assets/cone.png";
import cube from "../assets/cube.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo4 from "../assets/photo3.png";
import photo5 from "../assets/photo4.png";
import logoOggetto from "../assets/oggettoSign.png";
import line_1 from "../assets/decorativeLine.png";

function MainPage() {
	return (
		<div className="page">
			<header className="header">
				<div className="logo">
					<img src={logo} alt="лого" />
				</div>
			</header>
			<main className="main">
				{/* TOPIC GOGA */}
				<section className="topic">
					<div className="topic__card__container__1">
						<div className="topic__card__wrapper__1">
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo" src={photo1} />
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
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo" src={photo1} />
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
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo" src={photo1} />
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
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo" src={photo1} />
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
							<button className="topic-btn__go">Тыкай сюды</button>
							<div className="btn__container">
								<button className="topic-btn__change__static-cards">
									Раскрыть карты
								</button>
								<button className="topic-btn__change_hover_cards">
									Скрыть карты
								</button>
							</div>
						</div>
					</div>
				</section>
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
					<div className="about__cylinder__1"></div>
					<div className="about__cylinder__2"></div>
					<div className="about__line__1">
						<img src={line_1}></img>
					</div>
					<div className="about__line__2"></div>
				</section>
			</main>
		</div>
	);
}

export default MainPage;
