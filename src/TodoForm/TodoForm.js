import React from 'react';
import {TodoContext} from "../TodoContext/TodoContext";
import './TodoForm.css';

function TodoForm(){
    const {
        todoAdd,
            // This prop allow add Todos to our app.
        setOpenModal,
            // This prop allow open and close the modal form.
    } = React.useContext(TodoContext);
    // These lines get the props values from the TodoContext.

    const [newTodoValue, setNewTodoValue] = React.useState('');
        // This line create a new localState to save what is typing the user.
        // It is not necessary use the React Context, because the application doesn't know what the user are typing.
        // we use the React Context, when the user save the newTodo.

    // This function managed the onSubmit form
    const onSubmit = (event) => {
        // This line create a function to handle the onSubmit event.
        // to do this receive a event type as parameter.
        event.preventDefault();
            // Avoid that the form is sent.
            // document.addEventListener('submit', (e)=>{e.preventDefault();})
        todoAdd(newTodoValue);
            // This line call the todoAdd function from the React Context,
            // and send the value stored in the newTodoValue (useLocalState).
        setOpenModal(false);
            // This line set the OpenModal props on false, and this close the Modal form.
    };

    // This function managed the onCancel button.
    const onCancel = () => {
        // This line create a function to handle the onCancel event.
        setOpenModal(false);
            // This line set the OpenModal props on false, and this close the Modal form.
    };

    // This function managed the onChange button.
    const onChange = (event) => {
        // This line create a function to handle the onChange event.
        // to do this receive a event type as parameter.
        setNewTodoValue(event.target.value);
            // This line took the value of the targeted element that generate the event.
    };

    return (
        <form onSubmit={onSubmit}>
                {/*This onSubmit method call the onSubmit function.*/}
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                    // This line show the suggestion message to the user.
                value={newTodoValue}
                    // This line show the state of the newTodoValue.
                    // When the user type a letter, the onChange event (of the textArea element) is handled by the onChange function
                    // and update the useState of the newTodoValue
                onChange={onChange}
                    // This line call the onChange function, and update the newTodoValue.
                    // with this event, we update the newTodoValue, and automatically the value of the textArea is updated.
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                        // This line call the onCancel function.
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
                {/* This button does not have onClick parameter because execute the form onSubmit event. */}
            </div>
        </form>
    );
}

export { TodoForm };