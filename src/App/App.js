// import logo from './platzi.webp';
import React from 'react';
import { AppUI } from './AppUI'
import './App.css';
// import { CreateTodoButtonDeleteAll } from './CreateTodoButtonDeleteAll/CreateTodoButtonDeleteAll';
// import { useLocalStorage } from '../TodoContext/useLocalStorage'
        // We get this component to TodoContext
import {TodoProvider} from "../TodoContext/TodoContext";

// Custom Hooks, allow you to separate the logic of the application and the Apps.
// import App from "./App";

// JSX = This code seems like html, but is javascript with Xhtml.
function App() {
    return(
        <TodoProvider>
            {/* We put inside TodoProvider our AppUI, so all the component have access to TodoContext */}
            <AppUI
                // We use Context to comunicate between components.
                // // This line call the AppUI component, witch has all the unit interface of our application
                // loading={loading}
                // error={error}
                // completedTodos={completedTodos}
                // totalTodos={totalTodos}
                // searchValue={searchValue}
                // setSearchValue={setSearchValue}
                // searchedTodos={searchedTodos}
                // todoComplete={todoComplete}
                // todoDelete={todoDelete}
                // cantClickButton={cantClickButton}
                // setCantClickButton={setCantClickButton}
                //     // This lines send to the AppUI the props values.
            />
        </TodoProvider>
        );
}

export default App;
