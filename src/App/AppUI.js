import React from 'react';
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {TodoClick} from "../TodoClick/TodoClick";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodosError} from "../TodosError/TodosError";
import {EmptyTodos} from "../EmptyTodos/EmptyTodos";
import {Modal} from "../Modal/Modal";
import {TodoForm} from '../TodoForm/TodoForm';
import {TodoContext} from "../TodoContext/TodoContext";

// Import all the component of our application.


function AppUI (
    // { We delete the props, because each component can get the value directly from the React Context
    // loading,
    // error,
    // completedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    // searchedTodos,
    // todoComplete,
    // todoDelete,
    // cantClickButton,
    // setCantClickButton,     // After the last parameter you must add ,
    //    }
        ) {
            // This component is the Unit Interface of our application.
            // Receive the props and with it render the application.

        const {
                openModal,
                setOpenModal,
        } = React.useContext(TodoContext);

        return (
            <React.Fragment>
                {/*This code call the component, */}
                <TodoCounter />
                {/* Create the props and set the values, after that call the component TodoCounter.
                    We delete the props, because each component can get the value directly from the React Context
                        <TodoCounter completed={completedTodos} total={totalTodos} />
                */}
                <TodoSearch />
                {/* We delete the props, because each component can get the value directly from the React Context
                    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                     */}
                <TodoContext.Consumer>
                    {({
                        loading,
                        error,
                        searchedTodos,
                        todoComplete,
                        todoDelete,
                      }) => (
                        <TodoList>
                            {loading && (
                                <>
                                    <TodosLoading />
                                    <TodosLoading />
                                    <TodosLoading />
                                </>
                                )
                            }
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                            {searchedTodos.map(todo => (
                                // The map function create a new array from the defaultTodos array.
                                // after that iterate inside and for each element create a TodoItem
                                // While create the TodoItem, send the value of the array in the key word.
                                <TodoItem
                                    // This line call the TodoItem component and pass the information. Because It is an object, the information is passed by props.
                                    key={todo.text}
                                    // The array must have and UnidqueIdentifier.
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => todoComplete(todo.text)}
                                    // This line call the function todoComplete and send the text parameter
                                    // if we send the without a new function, react automatically try to render the value, and stop working
                                    // to avoid this, we send a function and react only render it after the event.
                                    onDelete={() => todoDelete(todo.text)}
                                    // This line send the information about the key element that the function onDelete must delete from the array.
                                    // if we send the without a new function, react automatically try to render the value, and stop working
                                    // to avoid this, we send a function and react only render it after the event.
                                />
                            ))}
                        </TodoList>
                    )}
                </TodoContext.Consumer>
            <CreateTodoButton
                setOpenModal={setOpenModal}
                // This line call the function setOpenModal
            />
                    {/* We delete the props, because each component can get the value directly from the React Context
                    <CreateTodoButton cantClickButton={cantClickButton} setCantClickButton={setCantClickButton} />
                */}
            {openModal && (
                <Modal>
                        <TodoForm />
                </Modal>
            )};

                <TodoClick />
                {/* We delete the props, because each component can get the value directly from the React Context
                    <TodoClick cantClick={cantClickButton} />
                */}
                {/*<CreateTodoButtonDeleteAll*/}
                {/*        onDeleteAll={todoDeleteAll}*/}
                {/*/>*/}
            </React.Fragment>
        );
}

export { AppUI };