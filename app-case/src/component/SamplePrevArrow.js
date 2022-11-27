import { BsArrowLeft } from "react-icons/bs";
import "../css/arrows.css";

export const SamplePrevArrow = ({ onClick }) => (
	<div className="arrow arrow-left" onClick={onClick}>
		<BsArrowLeft />
	</div>
);
