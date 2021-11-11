/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";

const CalculatorForm = ({ changedValue }) => {
	let btnArr;

	useEffect(() => {
		btnArr = document.querySelectorAll(".tip--btn");
	});

	const resetBtn = (btnId = "") => {
		btnArr.forEach((btn) => {
			btn.id !== btnId
				? btn.classList.remove("active")
				: btn.classList.add("active");
		});
	};

	const changedTipValue = (e) => {
		e.preventDefault();
		let btnId = e.target.id ?? "";
		if (btnId) {
			changedValue(e);
		}
		resetBtn(btnId);
	};

	const submitForm = (e) => {
		e.preventDefault();
	};

	return (
		<Fragment>
			<form className="calculator__form" onSubmit={submitForm}>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="bill">
						Bill
					</label>
					<span className="invalid" id="invalid-bill">
						Don't smaller than 1
					</span>
					<Input
						type="number"
						name="bill"
						id="bill"
						placeholder="0"
						onChangeValue={(e) => changedValue(e)}
					/>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="select">
						Select Tip %
					</label>

					<div className="calculator__control--select">
						<Button
							classes="btn tip--btn"
							id="tip--1"
							value="5"
							text="5%"
							name="tip"
							onChangedTip={changedTipValue}
						/>
						<Button
							classes="btn tip--btn"
							id="tip--2"
							value="10"
							text="10%"
							name="tip"
							onChangedTip={changedTipValue}
						/>
						<Button
							classes="btn tip--btn"
							id="tip--3"
							value="15"
							text="15%"
							name="tip"
							onChangedTip={changedTipValue}
						/>
						<Button
							classes="btn tip--btn"
							id="tip--4"
							value="25"
							text="25%"
							name="tip"
							onChangedTip={changedTipValue}
						/>
						<Button
							classes="btn tip--btn"
							id="tip--5"
							value="50"
							text="50%"
							name="tip"
							onChangedTip={changedTipValue}
						/>

						<Input
							type="number"
							name="tip"
							id="custom"
							placeholder="Custom"
							onClick={changedTipValue}
							onChangeValue={(e) => changedValue(e)}
						/>
					</div>
				</div>
				<div className="calculator__control">
					<label className="calculator__control--label" htmlFor="person">
						Number of people
					</label>
					<span className="invalid" id="invalid-person">
						Don't smaller than 1
					</span>

					<Input
						type="number"
						name="person"
						id="person"
						placeholder="0"
						onChangeValue={(e) => changedValue(e)}
					/>
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
