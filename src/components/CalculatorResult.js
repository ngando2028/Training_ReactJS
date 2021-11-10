import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";
import Button from "./Button";
import ResultGroup from "./ResultGroup";

const CalculatorResult = (props) => {
	return (
		<Fragment>
			<div className="calculator__result">
				<div className="calculator__result-container">
					<ResultGroup text="Tip amount" type="tip" />
					<ResultGroup text="Total" type="total" />
				</div>
				<div className="calculator__result-control">
					<Button
						classes="btn btn--calculator"
						text="Calculator"
						id="calculator"
						onCalcul={props.onSubmit}
					/>
					<Button classes="btn btn--reset" text="Reset" id="reset" />
				</div>
			</div>
		</Fragment>
	);
};

export default CalculatorResult;
