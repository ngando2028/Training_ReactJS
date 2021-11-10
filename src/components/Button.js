import { Fragment } from "react";

const Button = (props) => {
	return (
		<Fragment>
			<button className={props.classes} id={props.id} value={props.value}>
				{props.text}
			</button>
		</Fragment>
	);
};

export default Button;
