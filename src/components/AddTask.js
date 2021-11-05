import React from 'react'
import {
  FormControl,
  FormErrorMessage,
	HStack,
	Input,
	Button
} from "@chakra-ui/react"

//import { useState } from 'react'
const AddTask = (props) => {

	//const [ title, setTitle ] = useState('')
	
	const handleChange = (props) => {
		console.log(props.target.value)
	}


	return (
		<>
			<HStack>
				<FormControl id="email">
  			<Input
					type="text"
					placeholder='Add task'
				/>
				</FormControl>
				<Button
					colorScheme="blue"
					onClick={handleChange}
				>
					Add
				</Button>
			</HStack>
		</>
	);
}

export default AddTask;
