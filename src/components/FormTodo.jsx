import { AddIcon } from "@chakra-ui/icons";
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormTodo = ({ handleList }) => {
	const [title, setTitle] = useState("");
	const [isError, setIsError] = useState(false);
	const handleInputChange = (e) => {
		setTitle(e.target.value);
		setIsError(false);
		if (e.target.value.length <= 1 || e.target.value.length >= 20) {
			setIsError(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isError || !title.length) {
			setIsError(true);
			return;
		}

		const newTodo = {
			title,
			isComplete: false,
		};
		handleList(newTodo);
		setTitle("");
	};

	return (
		<>
			<Heading color="whitesmoke">TODO APP 📝</Heading>

			<form onSubmit={handleSubmit} style={{ width: "100%" }}>
				<FormControl isInvalid={isError} w="100%" color="whitesmoke">
					<FormLabel>Todo</FormLabel>
					<Input type="text" value={title} onChange={handleInputChange} />
					{!isError ? (
						<FormHelperText color="whitesmoke">
							Enter the todo you want to remember
						</FormHelperText>
					) : (
						<FormErrorMessage color="whitesmoke">
							Todo is invalid
						</FormErrorMessage>
					)}
					<Button type="submit" leftIcon={<AddIcon />} colorScheme="teal">
						Add
					</Button>
				</FormControl>
			</form>
		</>
	);
};
