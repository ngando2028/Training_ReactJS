import { Fragment } from "react";

const Button = (props) => {
	const handlerClickEvent = (e) => {
		switch (props.id) {
			case "calculator":
				return props.onSubmit(e);
			case "reset":
				return props.onReset(e);
			default:
				return props.onChangedTip(e);
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
