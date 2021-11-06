import React from 'react'
import {
  FormControl,
	HStack,
	Input,
	Button
} from "@chakra-ui/react"

//import { useState } from 'react'
const AddTask = (props) => {

	let tempInput = '';
	const handleChange = () => {
		tempInput.length > 0
			? props.handleSubmit(tempInput)
			: alert('enter the todo')
	}

	return (
		<>
			<HStack
				paddingTop='50px'
			>
				<FormControl id="text">
  			<Input
					type="text"
					placeholder='Add task'
					onChange={(e => tempInput = e.target.value)}
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
