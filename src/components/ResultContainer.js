import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";
import ResultGroup from "./ResultGroup";

const ResultContainer = () => {
	return (
		<Fragment>
			<div className="calculator__result-container">
				<ResultGroup text="Tip amount" type="tip" />
				<ResultGroup text="Total" type="total" />
			</div>
		</Fragment>
	);
};

export default ResultContainer;
