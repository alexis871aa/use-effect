import { useEffect, useLayoutEffect, useState } from 'react';
import style from './App.module.css';
import { Block } from './components';

export const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState(null);
	const [postId, setPostId] = useState(1);

	const getData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const posts = await response.json();
		setData(posts);
	};

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => res.json())
			.then((post) => setData(post));
	}, [postId]); // помните, что в массив зависимостей нежелательно использовать ссылки, к примеру объект. Используйте только простые типы данных.

	console.log(data, 'data');
	// console.log(postId, 'postId');

	// useLayoutEffect(() => {
	// 	// отрабатывает до монтирования компонента в DOM дерево
	// 	console.log('render layout');
	// }, []);

	return (
		<div className={style.app}>
			<h1>App</h1>
			<button onClick={() => setIsOpen((prevState) => !prevState)}>Open</button>
			<button onClick={() => setPostId((prevState) => (prevState += 1))}>
				setPost
			</button>

			{isOpen && <Block />}
		</div>
	);
};
