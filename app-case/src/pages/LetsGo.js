import React from "react";
import "../css/letsgo.css";
import "../pages/cardStyle.css";
import photo1 from "../assets/photo1.png";
import logoOggetto from "../assets/oggettoSign.png";
import line from "../assets/DecorativeLine1.png";
import figure from "../assets/donutNEW.png";

export const LetsGo = () => {
	return (
		<section className="letsgo__container">
			<div className="topic__card__container__letsgo__1">
				<div className="topic__card__wrapper__letsgo__1">
					<div className={"topic__card__flipper"}>
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
								<div className="topic__card__back__name">Екатерина Доброва</div>
								<div className="topic__card__back__info">Web Разработчик</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="topic__card__container__letsgo__2">
				<div className="topic__card__wrapper__letsgo__2">
					<div className={"topic__card__flipper"}>
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
								<div className="topic__card__back__name">Екатерина Доброва</div>
								<div className="topic__card__back__info">Web Разработчик</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="letsgo__content">
				<div className="letsgo__title">
					Okaaay let’s go Поспеши, иначе артефакты достанутся ...
				</div>
				<div className="letsgo__header">СЫНУ МАМИНОЙ ПОДРУГИ</div>
				<button>Поехали</button>
			</div>
			<div className="letsgo__figure"></div>

			<img className="letsgo__line" alt="Line1" src={line}></img>
		</section>
	);
};
