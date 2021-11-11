import { createContext, useEffect, useState } from "react";
import { API_URL } from "../constant/config";

export const CalCulContext = createContext();

function CalculProvider({ children }) {
	const [formValid, setFormValid] = useState(false);
	const [isReset, setIsReset] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [btnArr, setBtnArr] = useState([]);

	const [formValue, setFormValue] = useState({
		bill: 0,
		person: 0,
		tip: 0,
	});
	const [result, setResult] = useState({
		tip: 0,
		total: 0,
	});

	useEffect(() => {
		if (
			formValue.bill &&
			formValue.person &&
			(formValue.tip >= 0 || isNaN(formValue.tip))
		) {
			setFormValid(true);
		} else setFormValid(false);
	}, [formValue, formValue.bill, formValue.person, formValue.tip, formValid]);

	useEffect(() => {
		setBtnArr(document.querySelectorAll(".tip--btn"));
	}, []);

	const handlerSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsDisabled(true);
			let result = await fetch(
				`${API_URL}?bill=${formValue.bill}&people=${formValue.person}&tipPercent=${formValue.tip}`
			);

			let resultData = await result.json();
			setResult({
				tip: resultData.amount.toFixed(2),
				total: resultData.total.toFixed(2),
			});
			setIsDisabled(false);
		} catch (error) {
			alert(error.message);
			setIsDisabled(false);
		}
	};

	const hanlerReset = () => {
		setIsReset(true);
		setFormValue({
			bill: 0,
			person: 0,
			tip: 0,
		});
		setFormValid(false);
		setResult({ tip: null, total: null });
		resetBtn();
		resetInvalid();
	};

	const resetBtn = (btnId = "") => {
		btnArr.forEach((btn) => {
			btn.id !== btnId
				? btn.classList.remove("active")
				: btn.classList.add("active");
		});
	};

	const resetInvalid = () => {
		let elInvalid = document.querySelectorAll(".invalid");
		let inputInvalid = document.querySelectorAll(".input-invalid");
		if (elInvalid.length > 0) {
			elInvalid.forEach((e) => {
				e.style.display = "none";
			});
		}

		if (inputInvalid.length > 0) {
			inputInvalid.forEach((e) => {
				e.classList.remove("input-invalid");
			});
		}
	};

	const changedTipValue = (e) => {
		let btnId = e.target.id ?? "";
		resetBtn(btnId);
		if (btnId) {
			changedValue(e);
		}
	};

	const changedValue = (e) => {
		let { name, value } = e.target;
		if (value === "") {
			value = 0;
			setFormValue({ ...formValue, [name]: parseFloat(value) });
		}
		setFormValue({ ...formValue, [name]: parseFloat(value) });
	};

	const value = {
		formValid,
		isReset,
		formValue,
		result,
		isDisabled,
		changedValue,
		hanlerReset,
		handlerSubmit,
		changedTipValue,
	};

	return (
		<CalCulContext.Provider value={value}>{children}</CalCulContext.Provider>
	);
}

export { CalculProvider };
