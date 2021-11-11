/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { Fragment } from "react";

const Input = (props) => {
	let invalidEl;
	let invalidChars = ["-", "+", "e", "="];

	useEffect(() => {
		if (props.isReset) {
			const inputArr = document.querySelectorAll(".calculator__control--input");
			inputArr.forEach((input) => {
				input.value = 0;
			});
		}
	}, [props.isReset]);

	function validate(s) {
		var rgx = /(?:^[0-9\b]+[.]?[0-9\b]*$)|(?:^[0-9\b]*$)/;
		return s.match(rgx);
	}

	const isNumberValid = (e) => {
		let { id, value, classList } = e.target;
		let valueTemp = parseFloat(value);
		invalidEl = document.querySelector(`#invalid-${id}`);
		if (id === "custom" && (value < 0 || !isNaN(value))) {
			invalidEl ? (invalidEl.style.display = "none") : null;
			classList.remove("input-invalid");
			props.onChangeValue(e);
		} else if (valueTemp <= 0) {
			invalidEl ? (invalidEl.style.display = "block") : null;
			classList.toggle("input-invalid");
		} else {
			invalidEl ? (invalidEl.style.display = "none") : null;
			classList.remove("input-invalid");
			props.onChangeValue(e);
		}
	};

	const checkValue = (e) => {
		let { value } = e.target;
		if (!validate(value)) {
			e.preventDefault();
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
				onKeyDown={checkValue}
			/>
		</Fragment>
	);
};

export default Input;
