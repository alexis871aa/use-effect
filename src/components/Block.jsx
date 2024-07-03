import { useEffect, useState } from 'react';

export const Block = () => {
	const [count, setCount] = useState(1);

	useEffect(() => {
		// отрабатывает после монтирования компонента в DOM дерево
		const interval = setInterval(() => {
			setCount((prevState) => (prevState += 1));
			console.log('interval');
		}, 1000);

		return () => {
			clearInterval(interval);
			console.log('clear interval');
		};
	}, []);

	return (
		<div>
			<h1>Info</h1>
			{count}
			<button>Click</button>
		</div>
	);
};
