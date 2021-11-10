import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";

const CalculatorForm = (props) => {
	return (
		<Fragment>
			<div className="calculator__form">
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="bill">
						Bill
					</label>
					<span className="invalid" id="invalid-bill">
						Don't smaller than 1
					</span>
					<Input type="number" name="bill" id="bill" placeholder="0" />
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="select">
						Select Tip %
					</label>

					<div className="calculator__control--select">
						<Button classes="btn tip--btn" id="tip--1" value="5" text="5%" />
						<Button classes="btn tip--btn" id="tip--2" value="10" text="10%" />
						<Button classes="btn tip--btn" id="tip--3" value="15" text="15%" />
						<Button classes="btn tip--btn" id="tip--4" value="25" text="25%" />
						<Button classes="btn tip--btn" id="tip--5" value="50" text="50%" />

						<Input
							type="number"
							name="custom"
							id="custom"
							placeholder="Custom"
						/>
					</div>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="person">
						Number of people
					</label>
					<span className="invalid" id="invalid-bill">
						Don't smaller than 1
					</span>

					<Input type="number" name="person" id="person" placeholder="0" />
				</div>
			</div>
		</Fragment>
	);
};

export default CalculatorForm;
