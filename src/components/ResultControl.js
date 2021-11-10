import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";
import Button from "./Button";

const ResultControl = () => {
	return (
		<Fragment>
			<div className="calculator__result-control">
				<Button classes="btn btn--calculator" text="Calculator" />
				<Button classes="btn btn--reset" text="Reset" />
			</div>
		</Fragment>
	);
};

export default ResultControl;
