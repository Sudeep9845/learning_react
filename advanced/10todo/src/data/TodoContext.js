import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: "Learn React Context API",
			isCompleted: false,
		},
	],
	addTodo: () => {},
	updateTodo: () => {},
	deleteTodo: () => {},
	toggleComplete: () => {},
});

export const TodoProvider = TodoContext.Provider;
const useTodo = () => {
	return useContext(TodoContext);
};

export default useTodo;
