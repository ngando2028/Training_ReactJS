import { Fragment, useEffect } from "react";

const Button = (props) => {
	useEffect(() => {
		console.log(props.formValid);
	}, [props.formValid]);

	return (
		<Fragment>
			<button
				className={props.classes}
				id={props.id}
				value={props.value}
				onClick={props.changedTipValue}
				name={props.name}
				type={props.type}
			>
				{props.text}
			</button>
		</Fragment>
	);
};

export default Button;
