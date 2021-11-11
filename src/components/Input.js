/* eslint-disable no-unused-expressions */
import React from "react";
import { Fragment } from "react";

const Input = (props) => {
	let invalidEl;

	const isNumberValid = (e) => {
		let { id, value } = e.target;
		let valueTemp = parseFloat(value);
		invalidEl = document.querySelector(`#invalid-${id}`);
		if (id === "custom" && !valueTemp !== 0 && !valueTemp) {
			invalidEl ? (invalidEl.style.display = "none") : null;
			e.target.classList.remove("input-invalid");
			props.onChangeValue(e);
		} else if (valueTemp <= 0) {
			invalidEl ? (invalidEl.style.display = "block") : null;
			e.target.classList.toggle("input-invalid");
		} else {
			invalidEl ? (invalidEl.style.display = "none") : null;
			e.target.classList.remove("input-invalid");
			props.onChangeValue(e);
		}
	};

	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				data-index={props.id}
				className={`calculator__control--input calculator__control--${props.id}`}
				placeholder={props.placeholder}
				onBlur={(e) => isNumberValid(e)}
				onClick={props.onClick}
			/>
		</Fragment>
	);
};

export default Input;
