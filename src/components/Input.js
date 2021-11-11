/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Fragment } from "react";
import { CalCulContext } from "./CalculContext";

const Input = (props) => {
	const { changedValue, changedTipValue } = useContext(CalCulContext);
	let invalidEl;
	// useEffect(() => {
	// 	if (isReset) {
	// 		console.log("reset");
	// 		const inputArr = document.querySelectorAll(".calculator__control--input");
	// 		console.log(inputArr);
	// 		inputArr.forEach((input) => {
	// 			input.value = "";
	// 		});
	// 	}
	// }, [isReset]);

	function validate(s) {
		var rgx = /(?:^[0-9\b]+[.]?[0-9\b]*$)|(?:^[0-9\b]*$)/;
		return s.match(rgx);
	}

	const isNumberValid = (e) => {
		let { id, value, classList } = e.target;
		let valueTemp = parseFloat(value);
		console.log(isNaN(valueTemp));
		invalidEl = document.querySelector(`#invalid-${id}`);
		if (id === "custom" && (value < 0 || !isNaN(value))) {
			invalidEl ? (invalidEl.style.display = "none") : null;
			classList.remove("input-invalid");
			changedValue(e);
		} else if (valueTemp <= 0 || isNaN(valueTemp)) {
			invalidEl ? (invalidEl.style.display = "block") : null;
			classList.toggle("input-invalid");
		} else {
			invalidEl ? (invalidEl.style.display = "none") : null;
			classList.remove("input-invalid");
			changedValue(e);
		}
	};

	const checkValue = (e) => {
		let { value } = e.target;
		if (!validate(value)) {
			e.preventDefault();
		}
		return;
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
				onClick={changedTipValue}
				onKeyPress={checkValue}
			/>
		</Fragment>
	);
};

export default Input;
