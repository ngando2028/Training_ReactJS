import React from "react";
import { Fragment } from "react";

import "../assets/style/scss/main.scss";

import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";
// import { API_URL } from "../constant/config.js";
// import CalCulContext from "./CalculContext";

const Calculator = () => {
	// const [formValid, setFormValid] = useState(false);
	// const [result, setResult] = useState({});
	// const [isReset, setReset] = useState(false);
	// const [isDisabled, setIsDisabled] = useState(false);

	// const btnArr = document.querySelectorAll(".tip--btn");
	// const [form, setForm] = useState({
	// 	bill: 0,
	// 	person: 0,
	// 	tip: 0,
	// });

	// const resetBtn = () => {
	// 	btnArr.forEach((btn) => {
	// 		if (btn.classList.contains("active")) btn.classList.remove("active");
	// 	});
	// };

	// const { formValue, changedValue, isReset } = useContext(CalCulContext);

	// useEffect(() => {
	// 	if (form.bill && form.person && (form.tip >= 0 || isNaN(form.tip))) {
	// 		setFormValid(true);
	// 	} else setFormValid(false);
	// }, [form, form.bill, form.person, form.tip, formValid]);

	// const handlerSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		setIsDisabled(true);
	// 		let result = await fetch(
	// 			`${API_URL}?bill=${form.bill}&people=${form.person}&tipPercent=${form.tip}`
	// 		);

	// 		let resultData = await result.json();
	// 		setResult({
	// 			tip: resultData.amount.toFixed(2),
	// 			total: resultData.total.toFixed(2),
	// 		});
	// 		setIsDisabled(false);
	// 	} catch (error) {
	// 		alert(error.message);
	// 		setIsDisabled(false);
	// 	}
	// };

	// const hanlerReset = () => {
	// 	setReset(true);
	// 	setForm({
	// 		bill: 0,
	// 		person: 0,
	// 		tip: 0,
	// 	});
	// 	setFormValid(false);
	// 	setResult({ tip: null, total: null });
	// };

	return (
		<Fragment>
			<div className="calculator">
				<CalculatorForm
				// formValue={form}
				// changedValue={changedValue}
				// isReset={isReset}
				/>
				<CalculatorResult
				// formValid={formValid}
				// onSubmit={handlerSubmit}
				// result={result}
				// onReset={hanlerReset}
				// isDisabled={isDisabled}
				/>
			</div>
		</Fragment>
	);
};

export default Calculator;
