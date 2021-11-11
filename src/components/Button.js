import { Fragment, useContext } from "react";
import { CalCulContext } from "./CalculContext";

const Button = (props) => {
	const { handlerSubmit, hanlerReset, changedTipValue } =
		useContext(CalCulContext);

	const handlerClickEvent = (e) => {
		switch (props.id) {
			case "calculator":
				return handlerSubmit(e);
			case "reset":
				return hanlerReset(e);
			default:
				return changedTipValue(e);
		}
	};

	return (
		<Fragment>
			<button
				className={props.classes}
				id={props.id}
				value={props.value}
				onClick={handlerClickEvent}
				name={props.name}
				type={props.type}
				disabled={props.disabled}
			>
				{props.text}
			</button>
		</Fragment>
	);
};

export default Button;
