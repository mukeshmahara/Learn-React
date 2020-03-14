import React from 'react';

export default (props) => (
    <div className="container mt-3">
        <div className="table table-dark"

            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}>

            <td className="">{props.todo.text}</td>
            <td className=""><button onClick={props.onDelete}>x</button></td>
        </div>
        <div>

        </div>
    </div>
);