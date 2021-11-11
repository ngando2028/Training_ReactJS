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
					<ResultGroup
						text="Tip amount"
						type="tip"
						value={props.result.tip ?? "0.00"}
					/>
					<ResultGroup
						text="Total"
						type="total"
						value={props.result.total ?? "0.00"}
					/>
				</div>
				<div className="calculator__result-control">
					<Button
						classes="btn btn--calculator"
						text="Calculator"
						id="calculator"
						type="submit"
						disabled={!props.formValid || props.isDisabled}
						onSubmit={props.onSubmit}
					/>
					<Button
						classes="btn btn--reset"
						text="Reset"
						id="reset"
						onReset={props.onReset}
						disabled={props.isDisabled}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default CalculatorResult;
