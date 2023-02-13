import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			return;
		}

		dispatch(createGoal({ text }));
		setText('');
	};

	return (
		<section className="form">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="text">Goal</label>
					<input
						onChange={(e) => setText(e.target.value)}
						type="text"
						name="text"
						id="text"
						value={text}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-block" type="submit">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default GoalForm;
