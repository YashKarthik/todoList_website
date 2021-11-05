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
		>
			<HStack
				display='flex'
				flexDir='row'
				justifyContent='space-between'
			>
				<Text padding='15px'>{props.text}</Text>
				<Box
					padding='10px'
				>
					<Button
						colorScheme="blue"
						size='md'
						variant='ghost'
						padding='0px'
						onClick={() => props.handleDelete(props.id)}
					>
						<IoMdTrash />
					</Button>
				</Box>
				
			</HStack>
		</Box>
	);
}

export default TodoComponent;
