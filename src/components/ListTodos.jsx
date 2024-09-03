/* eslint-disable react/prop-types */
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";

export const ListTodos = ({ listTodos, updateTodo }) => {
	const handleClick = (index) => {
		updateTodo(index);
	};
	return (
		<>
			<Flex direction="column" align="flex-start" w="100%" color="whitesmoke">
				<Heading pb={7}>My list 👩‍💻👨‍💻</Heading>
				<List spacing={3} w="100%" h={7}>
					{listTodos.map((todo, index) => (
						<ListItem
							key={index}
							bgColor={"gray.500"}
							fontSize="x-large"
							borderRadius="7"
							p={2}
							onClick={() => handleClick(index)}
						>
							<ListIcon
								as={todo.isComplete ? CheckIcon : CloseIcon}
								color={todo.isComplete ? "green" : "red"}
							/>
							{todo.title}
						</ListItem>
					))}
				</List>
			</Flex>
		</>
	);
};
