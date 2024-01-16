import React from 'react';
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

// This function enable the React Context to all the component of the application. We avoid the problem of the props drealing.
// so you do not need to pass the props from one component to another, each one take the information that they need
function TodoProvider({ children }){
    const {item: todos,
        // This line assign the returned value to the variable called todos.
        saveItem: saveTodos,
        // This line assign the returned value to the variable called saveTodos.
        loading,
        error} = useLocalStorage('TODOS_V1', []);
            // This is the state of todos, we get from the Custom Hook useLocalStorage.
            // to do that, we send the name of the localStorage and the empty array as initial value.
            // When we use saveTodos, the line call the useLocalStorage with the itemName = 'TODOS_V1' and send the newTodo to the custom hooks.

        const completedTodos = todos.filter(todo => !!todo.completed).length;
            // This are variables, and derivative states.
            // const completedTodos create a new variable and assign the result of the variable
            // get the data from the state todos, make a filter ()
            // inside the filter use a function todo => todo.completed, this function is the same of for each value, is the result of the completed parameter OK, return true, else return false.
            // The double negation return true if the condition is true or false if return another value.
            // .length count the number of elements
        const totalTodos = todos.length;
            // This code save the state of TodoSearch component.
            // In the state you can get the value and save new data, so that, you need an array to store the value.
            // The first parameter get the history, and the second save the new data
        const [searchValue, setSearchValue] = React.useState('');   // The value of the first input is empty

        const [openModal, setOpenModal] = React.useState(false);
        // The value of the openModal must be false, if not the modal when you load the page open automatically.

        // ------------------------------------------------------------------------------------------------------------------------------
        // This method normalize the String removing the extra space, special characters, etc.
        const normalizeString = (string) => {
            string = string || "";
            string = string.toLowerCase();
            // This line convert the string received toLowerCase.
            string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            // This line removes the accent from the string received.
            string = string.trim();
            // This line removes the extra spaces.
            return string;
            // This line return the result of the method applied to the string received.
        };

        // This code create a new array from todos state. This array is called a derivated array from the state.
        const searchedTodos = todos.filter(
            // Make a filter, with the function for each
            (todo) => {
                // ------------------------------------------------------------------------------------------------------------------------------
                // 1 First method to do the search
                // Only select the text that include the value that type the user.
                // const todoText = todo.text.toLowerCase();           // This method convert the useState todo array to lower case.
                // const searchText = searchValue.toLowerCase();       // This method convert the searchValue array to lower case.
                // return todoText.includes(searchText);                      // This method make the filter.

                // ------------------------------------------------------------------------------------------------------------------------------
                // 2 Second method to do the search
                // // Function without tildes
                // const noTildes = (text) => {
                //     return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                // };
                // // Convert toLowerCase and take out the tildes
                // const TodoTextLC = noTildes(todo.text.toLowerCase());
                // const searchTextLC = noTildes(searchValue.toLowerCase());       // This method after convert the searchValue toLowerCase, call the noTildes function to replace this type of letter.
                // // Apply the filter and return the selected value
                // return TodoTextLC.includes(searchTextLC);

                // ------------------------------------------------------------------------------------------------------------------------------
                // 3 Third method to do the search, here we use normalizeString, that is outside this method.
                let { text: normalizedTodo } = todo;
                // This line create a new array from todo useState.
                normalizedTodo = normalizeString(normalizedTodo);
                // This line apply the normalizeString method to the todo useState.
                let normalizedSearch = normalizeString(searchValue);
                // This line create a new array from the searchValue, but applying the normalizeString.
                return normalizedTodo.includes(normalizedSearch);
                // This line apply the search to the normalizedTodo array.
            }
        );

        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // This variable return an array with the
        const todoComplete =
            (text) =>
                // This line create a new function, receive a text value.
            {
                const newTodos = [...todos];
                // This line create a mirror of the todos array.
                const todoIndex = newTodos.findIndex(
                    // This line create a variable to receive the index of the search
                    (todo) => todo.text === text);
                // This line search the specific text from the todo array.
                // The === comparision make it without performing type convertion. 10 is diferent of "10", one is number and other is text. If you set ==, after the convertion the value are the same and return true.
                // newTodos[todoIndex].completed = true;
                // Set the value of the completed field to True, to the specific index.
                // This line allow only check the item as completed
                newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
                // Set the value of the completed field to True, to the specific index.
                // the ! before the sentences newTodos[todoIndex].completed, do the opposite. If the todo is true become in false, and does the opposite.
                saveTodos(newTodos);
                // This line call the function saveTodos to update in localStorage and React
                // setTodos(newTodos);
                // Update the useState with the new updated array.
            };

    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // This variable add a newTodo to the array, and update in the useState and localStorage
    const todoAdd =
        (text) =>
            // This line create a new function, receive a text value.
        {
            const newTodos = [...todos];
                // This line create a mirror of the todos array.
            newTodos.push({
                // The push add a new element to the array.
                text,
                    // This the first value of the array, we receive it from the TodoForm.
                completed: false,
                    // This the second value of the array, and is false because is new.
            })

            saveTodos(newTodos);
            // This line call the function saveTodos to update in localStorage and React
            // setTodos(newTodos);
            // Update the useState with the new updated array.
        };

    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // This variable return an array with the
        const todoDelete =
            (text) =>
                // This line create a new function, receive a text value.
            {
                const newTodos = [...todos];
                // This line create a mirror of the todos array.
                const todoIndex = newTodos.findIndex(
                    // This line create a variable to receive the index of the search
                    (todo) => todo.text === text);
                // This line search the specific text from the todo array.
                // The === comparision make it without performing type convertion. 10 is diferent of "10", one is number and other is text. If you set ==, after the convertion the value are the same and return true.
                newTodos.splice(todoIndex, 1);
                // This line first find the todo with the index and after this delete 1 record.
                saveTodos(newTodos);
                // This line call the function saveTodos to update in localStorage and React
                // setTodos(newTodos);
                // Update the useState with the new updated array.
            };

            // const todoDeleteAll = () => {
            //     const newTodos = todos.filter((todo) => todo.text !== "");
            //     setTodos(newTodos);
            // };

            // console.log('searchValue is ' + searchValue);       // This show the searchValue

    let [cantClickButton, setCantClickButton] = React.useState(0);

    return (
        <TodoContext.Provider value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                todoComplete,
                todoDelete,
                cantClickButton,
                setCantClickButton,
                openModal,
                setOpenModal,
                todoAdd,
        }}>
            { children }
        </TodoContext.Provider>
    );

}

// <TodoContext.Provider></TodoContext.Provider>
// <TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };


// console.log('Log 1');
// // React.useEffect(() => {
// //     console.log('Loooooog 2');
// // })
//
// // React.useEffect(() => {
// //     console.log('Loooooog 2');
// // }, []
// // );
//
// React.useEffect(
//     // This line encapsulate the code inside the useEffect.
//     // This Hook make that the code is executed the first time and if the condition of the array is true.
//     // Always the code inside this Hook is executed after all the code is executed.
//     () => {
//         console.log('Loooooog 2');
//     },
//     [totalTodos]
//     // This line allow to execute console.log only if the totalTodos change.
//     // if this array is empty, the code inside the useEffect is executed only one time.
// );
//
// console.log('Log 3');

