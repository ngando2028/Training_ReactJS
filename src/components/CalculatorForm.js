/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";

const CalculatorForm = (props) => {
	let btnArr;
	const tipArr = [5, 10, 15, 25, 50];
	const isReset = props.isReset;

	useEffect(() => {
		btnArr = document.querySelectorAll(".tip--btn");
	});

	useEffect(() => {
		if (isReset) {
			resetBtn();
		}
	}, [isReset]);

	const resetBtn = (btnId = "") => {
		btnArr.forEach((btn) => {
			btn.id !== btnId
				? btn.classList.remove("active")
				: btn.classList.add("active");
		});
	};

	const changedTipValue = (e) => {
		let btnId = e.target.id ?? "";
		resetBtn(btnId);
		if (btnId) {
			props.changedValue(e);
		}
	};

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
					<Input
						type="text"
						name="bill"
						id="bill"
						placeholder="0"
						onChangeValue={(e) => props.changedValue(e)}
						isReset={isReset}
					/>
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
								onChangedTip={changedTipValue}
							/>
						))}

						<Input
							type="text"
							name="tip"
							id="custom"
							placeholder="Custom"
							onClick={changedTipValue}
							onChangeValue={(e) => props.changedValue(e)}
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
						type="text"
						name="person"
						id="person"
						placeholder="0"
						onChangeValue={(e) => props.changedValue(e)}
					/>
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
