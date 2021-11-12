/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Fragment } from "react";
import { CalCulContext } from "./CalculContext";

const Input = (props) => {
	const { onChangedTipValue, inputValid } = useContext(CalCulContext);

	// const name = e.target.name;
	// const value = e.target.value;
	// const re = name === "personCount" ?;
	// // if value is not blank, then test the regex
	// if (re.test(value) || value === "") {
	// }

	return (
		<Fragment>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				data-index={props.id}
				className={`calculator__control--input calculator__control--${
					props.id
				} ${!inputValid[props.name] ? "input-invalid" : ""}`}
				placeholder={props.placeholder}
				onChange={onChangedTipValue}
				onClick={onChangedTipValue}
				value={props.value}
			/>
		</Fragment>
	);
};

export default Input;
