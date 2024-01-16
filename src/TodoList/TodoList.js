import './TodoList.css';

// This code create a new component
function TodoList(props) {
    /* The function is a component, and start with upper case
       The elements that are inside the components, are render to html
       React, create the:
                      html with the components and theirs elements and
                      the javascripts funtions
    */
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    );
}
// This is a named export
export { TodoList };