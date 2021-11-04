import React from 'react';
import {
	Heading,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => {

	return (
		<>
			<Grid minH="10vh" p={3}>
    	  <ColorModeSwitcher justifySelf="flex-end" />
    	  <VStack>
					<Heading
						bgGradient = 'linear(to-r, teal.300, blue.500)'
						bgClip = 'text'
					>
						Todo List
					</Heading>
    	  </VStack>
    	</Grid>
		</>
	);
}

export default Header;
