import React from 'react'
import shortid from 'shortid';

export default class TodoForm extends React.Component {

    state ={
        text:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: " "
        });
    };

    render() {

        return (
            <div className="text-center">
            
                <form onSubmit={this.handleSubmit} >
                    
                    <input type="text" className="form-control"
                        placeholder="Enter you activities to do"

                        onChange={this.handleChange}

                        name="text"

                        value={this.state.text} />

                    <button onClick={this.handleSubmit} className="btn btn-success mt-4 ">Add Todo</button>
                    
                </form>
            </div>
        );
    };
}