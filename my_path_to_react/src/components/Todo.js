import React from 'react';

class Todo extends React.Component {

    state = {
        text = " "
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text:this.state.text,
            complete: false
        })
    }

    addTodo = () => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter you activities to do" onChange={this.handleChange} value={this.state.txt} />
                </form>
            </div>
        );
    }
}

export default Todo;