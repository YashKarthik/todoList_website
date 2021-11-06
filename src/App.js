import React from 'react';
import Header from './components/Header.js';
import TodoComponent from './components/TodoComponent.js';
import AddTask from './components/AddTask.js'
import { useState, useEffect } from 'react';
import {
  theme,
  ChakraProvider,
	VStack,
	Badge,
	Spacer
} from '@chakra-ui/react';

function App() {

	const [ tasks, setTasks ] = useState([])
	
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			tasksFromServer.length > 0
				? setTasks(tasksFromServer)
				: setTasks([])
		}
	
		getTasks();
	
	}, [])

	const fetchTasks = async () => {
		const res = await fetch('http://localhost:4000/tasks')
		const data = await res.json();
		return data;
	};

	const deleteTasks = async (id) => {
		const res = await fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'DELETE',
		})
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
	};

	const postTasks = async (task) => {
		const postStuff = { 'title':task }
		const res = await fetch(`http://localhost:4000/tasks`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(postStuff)
		});
    const data = await res.json()
    setTasks([...tasks, data])
	};

	const taskElements = tasks.map(elem => {


		if (tasks.length > 0) {
			console.log(tasks, tasks.length)
			return <TodoComponent
				text={elem['title']}
				key={elem['id']}
				id={elem['id']}
				handleDelete={deleteTasks}
			/>
		} else {
			console.log(tasks, tasks.length)
			return <Badge colorScheme="green">no tasks</Badge>
		}

	})

  return (
    <ChakraProvider theme={theme}>
			<Header />
			<Spacer />
			<VStack
				spacing='15px'
				paddingTop='50px'
			>
				{tasks.length > 0 ? taskElements : <Badge colorScheme='green'>no tasks!</Badge>}
				<AddTask
					text='hello world'
					handleSubmit={e => postTasks(e)}
				/>
			</VStack>
    </ChakraProvider>
  );
}

export default App;
