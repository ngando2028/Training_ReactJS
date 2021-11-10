import React from "react";
import { Fragment } from "react";

const Input = (props) => {
	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				data-index={props.id}
				className={`calculator__control--input calculator__control--${props.id}`}
				placeholder={props.placeholder}
			/>
		</Fragment>
	);
};

export default Input;
