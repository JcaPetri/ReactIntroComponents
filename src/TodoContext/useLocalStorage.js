import React from 'react';

function useLocalStorage(
    itemName,
    // This line receive a variable witch is used to define the name of the localStorage array.
    // we can use this function to save all king of items to localStorage, like userDetails, Todos, etc.
    initialValue
    // This line is used to define the initial value of the localStorage.
) {
    // This line create a new Custom Hooks. All Hooks must to be created with the use word at the beginning of the name.
    const [item, setItem] = React.useState(initialValue);
    // This line allow to use the state of the new Custom Hooks localStorage.
    // To react state, all the information is saved as an item, so we use it.
    // We assign the value of the initialValue, because we do not know how many time the application delay to load.
    const [loading, setloading] = React.useState(true);
    // This line create a new State to store the loading state. At first is true because we start the application.
    const [error, seterror] = React.useState(false);
    // This line create a new State to store if an error occurs.


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                // This line load the array (Todos/UserDetails) from the local storage. Its depend on the name of the itemName.
                let parsedItem;
                // This line create a variable parsedTodos

                if (!localStorageItem) {
                    // This line ask if the local Storage is empty, because is the first time you load the application.
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    // This line save an empty array to local storage. The reason is when React no crash
                    parsedItem = initialValue;
                    // This line assign to the parsedTodos variable the empty array. so React no crash.
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                // (it contain the initialValue or the localStorege Value)
                setloading(false);
            } catch (error) {
                setloading(false);
                seterror(true);
            }
        }, 2000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ,[]
                // This empty array make that the useEffect is executed one time.
                // the eslint disable the error caused by not using initialValue and itemName inside the bracket, so when theirs values change the useEffect change to.
                // so the programme compile successfully.
    );



    const saveItem = (newItem) => {
        // This function receive the newItem and for each value update the localStorage and the React setItem State.
        localStorage.setItem(itemName, JSON.stringify(newItem))
        // Update the localStorage of a specific itemName.
        setItem(newItem);
        // Update the React State of setItem.
    }

    return {
        item,
        saveItem,
        loading,
        error,  // Always the last parameter must be ended by coma ,
        };
    // This function [item, saveItem] return two parameters, item and saveItem.
        // the item, that is the stored value.
        // the updated array, from the function saveItem.
    // If the function need to return more than two parameter, we need to return an object.
    // To do that, return the value inside the curly bracket {}
}


export { useLocalStorage };



// This is an array, you create two variables, text and completed
// const defaultTodos = [
//     { text: 'Cortar cebolla', completed: true },
//     { text: 'Tomar el Curso de Intro a React.js', completed: false },
//     { text: 'Llorar con la Llorona', completed: false },
//     { text: 'LALALALALA', completed: false },
//     { text: 'Su quinto todo', completed: false },
//     { text: 'Usar estados deviravdos', completed: true },
//     { text: 'Lá cé', completed: true },
// ];
// const stringifyTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifyTodos);

// You only can save simple string to localStorage. Not array or object can save there.
// To convert a javastring array to string we use JSON.stringify function
// localStorage.getItem('TODOS_V1');
// localStorage.removeItem('defaultTodos');

