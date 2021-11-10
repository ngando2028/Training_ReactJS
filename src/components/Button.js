import { Fragment } from "react";

const Button = (props) => {
	return (
		<Fragment>
			<button
				className={props.classes}
				id={props.id}
				value={props.value}
				onClick={props.onChangedTip}
				name={props.name}
				onSubmit={props.onCalcul}
			>
				{props.text}
			</button>
		</Fragment>
	);
};

export default Button;
