import React from 'react';
import Header from './components/Header.js';
import TodoComponent from './components/TodoComponent.js';
import AddTask from './components/AddTask.js'
import { useState, useEffect } from 'react';
import {
  theme,
  ChakraProvider,
	VStack,
	Spacer
} from '@chakra-ui/react';

function App() {

	const [ tasks, setTasks ] = useState([])
	
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		}
	
		getTasks();
	
	}, [])

	const fetchTasks = async () => {
		const res = await fetch('http://localhost:4000/tasks')
		const data = await res.json();
		return data;
	}

	const deleteTasks = async (id) => {
		const res = await fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'DELETE',
		})
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
	}

	const postTasks = async (task) => {
		const res = await fetch(`http://localhost:4000/tasks/`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(task)
		})
	}

	const taskElements = tasks.map(elem => {
		return <TodoComponent
			text={elem['title']}
			key={elem['id']}
			id={elem['id']}
			handleDelete={deleteTasks}
		/>
	})

  return (
    <ChakraProvider theme={theme}>
			<Header />
			<Spacer />
			<VStack spacing='15px'>
				{taskElements}
				<AddTask text='hello world'/>
			</VStack>
    </ChakraProvider>
  );
}

export default App;
