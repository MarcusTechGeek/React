import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            // Render list of todo items
            <ul className="list-group list-group-flush">
                {/* Mapping through todo items and rendering each item */}
                {this.props.items.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            {/* Individual todo item */}
                            <li className="list-group-item bg-light d-flex justify-content-between">
                                {/* Display todo item text */}
                                {value}
                                {/* Button to delete todo item */}
                                <button className="btn text-danger badge" onClick={() => { this.props.deleteTodo(index) }}>X</button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        );
    }
}

export default TodoList;
