/* eslint-disable no-unused-expressions */
import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";

const CalculatorForm = () => {
	const tipArr = [5, 10, 15, 25, 50];

	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<Fragment>
			<form className="calculator__form" onSubmit={submit}>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="bill">
						Bill
					</label>
					<span className="invalid" id="invalid-bill">
						Don't smaller than 1
					</span>
					<Input type="text" name="bill" id="bill" placeholder="0" />
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="select">
						Select Tip %
					</label>

					<div className="calculator__control--select">
						{tipArr.map((tip, index) => (
							<Button
								classes="btn tip--btn"
								id={`tip--${index}`}
								value={tip}
								text={`${tip}%`}
								name="tip"
								key={index}
							/>
						))}

						<Input type="text" name="tip" id="custom" placeholder="Custom" />
					</div>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="person">
						Number of people
					</label>
					<span className="invalid" id="invalid-person">
						Don't smaller than 1
					</span>

					<Input type="text" name="person" id="person" placeholder="0" />
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
