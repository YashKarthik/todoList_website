import React from 'react';
import Header from './components/Header.js';
import TodoComponent from './components/TodoComponent.js';
import {
  theme,
  ChakraProvider,
	VStack,
	Spacer
} from '@chakra-ui/react';


const demoTodos = [
	'Eat lunch',
	'Brush Teeth',
	'Cook dinner'
];

const options = demoTodos.map(elem => {
	return <TodoComponent text={elem}/>
})

function App() {
  return (
    <ChakraProvider theme={theme}>
			<Header />
			<Spacer />
			<VStack>
				<ul>{options}</ul>
			</VStack>
    </ChakraProvider>
  );
}

export default App;
