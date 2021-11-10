import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";
import ResultContainer from "./ResultContainer";
import ResultControl from "./ResultControl";

const CalculatorResult = () => {
	return (
		<Fragment>
			<div className="calculator__result">
				<ResultContainer />
				<ResultControl />
			</div>
		</Fragment>
	);
};

export default CalculatorResult;
