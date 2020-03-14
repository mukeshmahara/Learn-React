import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';



export default class Todolist extends React.Component {

    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
    };

    addTodo = (todo) => {
        // this.state.todos.push(todo);
        // const newTodos = {todo,...this.state.todos};
        this.setState(state=>({
            todos: [todo, ...state.todos]
        }));
    };

    toggleComplete = (id) => {

        this.setState(state=>({
            todos: this.state.todos.map(todo => {
                // suppose to update
                if (todo.id === id) {
                    return {
                        ...todo,
                        // id: todo, id,
                        // text: todo.text,
                        complete: !todo.complete
                    };

                }
                else {
                    return todo;
                }
            })
        }));

    };

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDeleteTodo = (id) => {
        this.setState(state=>{
            todos: state.todos.filter(todo => todo.id !== id)
        });
    }

    removeAllTodoThatAreComplete = () => {
        this.setState(state=>({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    }

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div className="">
                <TodoForm onSubmit={this.addTodo} />

                <ol>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo} />
                    ))}

                </ol>
                <div>
                    Todo Left :{this.state.todos.filter(todo => !todo.complete).length}
                </div>

                <div>
                    <button className="btn btn-primary mr-2" onClick={() => this.updateTodoToShow("all")}>All</button>
                    <button className="btn btn-danger mr-2" onClick={() => this.updateTodoToShow("active")}>Active</button>
                    <button className="btn btn-warning mr-2" onClick={() => this.updateTodoToShow("complete")}>Complete</button>
                </div>
                {
                    this.state.todos.some(todo => todo.complete).length ? (
                        <div>
                            <button className="btn btn-secondary" onClick={this.removeAllTodoThatAreComplete}>
                                removeAllTodoThatAreComplete
                            </button>
                        </div>
                    ) : null
                }
                <div>
                    <button onClick={() =>
                        this.setState(state=>({
                            todos: state.todos.map(todo => ({
                                ...todo,
                                complete: state.toggleAllComplete
                            })),
                            toggleAllComplete:!state.toggleAllComplete
                        }))

                    }
                    className="btn btn-dark mt-2"
                    >toggle All Complete: {`${this.state.toggleAllComplete}`}</button>
                </div>

            </div>

        )
    }

}