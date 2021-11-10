import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";

const Calculator = (props) => {
	const receiveData = () => {};

	return (
		<Fragment>
			<div className="calculator">
				<CalculatorForm formValue={receiveData} />
				<CalculatorResult onSubmit={(e) => console.log(e)} />
			</div>
		</Fragment>
	);
};

export default Calculator;
