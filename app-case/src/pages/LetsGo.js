import React from "react";
import "../css/letsgo.css";
import "../pages/cardStyle.css";
import photo1 from "../assets/photo1.png";
import logoOggetto from "../assets/oggettoSign.png";
import line from "../assets/DecorativeLine1.png";
import figure from "../assets/donutNEW.png";
import { Navigate, useNavigate } from "react-router-dom";

export const LetsGo = () => {
	const navigate = useNavigate();
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
					<span style={{ color: "#000" }}>Okaaay let’s go</span> <br />
					<span style={{ color: "#000" }}>
						Поспеши, иначе артефакты достанутся ...
					</span>
				</div>
				<div className="letsgo__header">СЫНУ МАМИНОЙ ПОДРУГИ</div>
				<button onClick={() => navigate("/onboarding")}>Поехали</button>
			</div>
			<div className="letsgo__figure"></div>

			<img className="letsgo__line" alt="Line1" src={line}></img>
		</section>
	);
};
