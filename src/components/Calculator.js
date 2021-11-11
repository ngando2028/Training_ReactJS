import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";

const Calculator = (props) => {
	const [formValid, setFormValid] = useState(false);

	const [form, setForm] = useState({
		bill: 0,
		person: 0,
		tip: 0,
	});

	useEffect(() => {
		console.log(form);
		if (form.bill && form.person && form.tip >= 0) {
			setFormValid(true);
		} else setFormValid(false);
		console.log(formValid);
	}, [form, form.bill, form.person, form.tip, formValid]);

	const changedValue = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<Fragment>
			<div className="calculator">
				<CalculatorForm formValue={form} changedValue={changedValue} />
				<CalculatorResult formValid={formValid} />
			</div>
		</Fragment>
	);
};

export default Calculator;
