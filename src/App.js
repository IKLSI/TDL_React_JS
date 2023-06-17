import './App.css';
import React, { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const saisie = (e) => {
		setInputValue(e.target.value);
	};

	const ajouter = () => {
		if (inputValue !== '') {
			setTodos([...todos, inputValue]);
			setInputValue('');
		}
	};

	const supprimer = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<div className="input-container">
				<input type="text" value={inputValue} onChange={saisie} />
				<button onClick={ajouter}>Ajouter</button>
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}
						<button onClick={() => supprimer(index)}>Supprimer</button>
					</li>
				))}
			</ul>
			<img src={process.env.PUBLIC_URL + '/logo192.png'} alt="react logo" />
		</div>
	);
}

export default App;
