import React from 'react';
import { Button } from "@chakra-ui/react"
import { IoMdTrash } from 'react-icons/io'
import {
	Text,
	Box,
	HStack
} from '@chakra-ui/react'

const TodoComponent = (props) => {
	return (
		<Box
			border='1px solid'
			borderColor="gray.700"
			borderRadius='8px'
			//backgroundColor='gray.700'
			w='400px' h='60px'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			colorScheme='white'
		>
			<HStack spacing='150px'>
				<Text padding='15px'>{props.text}</Text>
				<Button
					colorScheme="blue"
					size='md'
					variant='ghost'
					padding='0px'
				>
					<IoMdTrash />
				</Button>
				
			</HStack>
		</Box>
	);
}

export default TodoComponent;
