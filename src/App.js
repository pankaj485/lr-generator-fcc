import React, { useImperativeHandle, useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(5);
	const [text, setText] = useState([]);

	const newArray = [];
	const dummyText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et corporis neque quia quas quis quasi excepturi reprehenderit deleniti, amet necessitatibus eaque, distinctio ipsum? A ipsam quo voluptatem totam omnis!";

	const handleSubmit = (e) => {
		e.preventDefault();
		for (let i = 0; i < count; i++) {
			newArray.push(dummyText);
		}
		setText(newArray);

		// let amount = parseInt(count);
		// if (count <= 0) {
		// 	amount = 1;
		// }
		// if (count > 8) {
		// 	amount = 8;
		// }
		// console.log(newArray[1].props.children);
		// setText(data.slice(0, amount));
	};

	return (
		<section className="section-center">
			<h3>lorem ipsum project </h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">paragraphs : </label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => {
						setCount(e.target.value);
					}}
				/>
				<button type="submit" className="btn">
					get paragraph
				</button>
			</form>
			<article className="lorem-text"></article>

			{text.map((item, index) => {
				return (
					<p key={index}>
						{index + 1}
						{"."} {item}
					</p>
				);
			})}
		</section>
	);
}

export default App;
