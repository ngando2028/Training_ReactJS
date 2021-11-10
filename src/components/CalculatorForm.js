/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import Input from "./Input";
import Button from "./Button";

const CalculatorForm = () => {
	let invalidEl, btnArr;

	const [form, setForm] = useState({
		bill: 0,
		person: 0,
		tip: 0,
	});

	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		btnArr = document.querySelectorAll(".tip--btn");
	}, []);

	useEffect(() => {
		if (form.bill && form.person && form.tip >= 0) {
			setFormValid(true);
		} else setFormValid(false);
	}, [form.bill, form.person, form.tip]);

	const isNumberValid = (e) => {
		let { id, value } = e.target;
		let valueTemp = parseFloat(value);
		invalidEl = document.querySelector(`#invalid-${id}`);

		if (id === "custom" && !valueTemp !== 0 && !valueTemp) {
			invalidEl ? (invalidEl.style.display = "none") : null;
			e.target.classList.remove("input-invalid");
			return true;
		}
		if (valueTemp <= 0) {
			invalidEl ? (invalidEl.style.display = "block") : null;
			e.target.classList.toggle("input-invalid");
			return false;
		}
		invalidEl ? (invalidEl.style.display = "none") : null;
		e.target.classList.remove("input-invalid");
		return true;
	};

	const resetBtn = (btnId = "") => {
		btnArr.forEach((btn) => {
			btn.id !== btnId
				? btn.classList.remove("active")
				: btn.classList.add("active");
		});
	};

	const changedValue = (e) => {
		const { name, value } = e.target;
		if (isNumberValid(e)) {
			setForm({ ...form, [name]: value });
		}
	};

	const changedTipValue = (e) => {
		e.preventDefault();
		let btnId = e.target.id ?? "";
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
						onChangeValue={changedValue}
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
							onChangeValue={changedValue}
							onClick={changedTipValue}
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
						onChangeValue={changedValue}
					/>
				</div>
			</form>
		</Fragment>
	);
};

export default CalculatorForm;
