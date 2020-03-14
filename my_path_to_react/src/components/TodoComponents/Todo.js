import React from 'react';

export default (props) => (
    <div className="container-fluid mt-3">
        <div className="table table-secondary"

            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}>

            <div>
                <td className="table">{props.todo.text}</td>
                <td className=""><button onClick={props.onDelete} className="btn btn-outline-danger">delete</button></td>
            </div>

        </div>
        <div>

        </div>
    </div>
);