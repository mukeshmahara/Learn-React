import React from 'react';


import PostData from './services/PostData';




export default class Login extends React.Component {

// componentDidMount=()=>{
//     console.log("Component Mounted")
// }

constructor(props){
    super(props);
    this.state = {
        username: '',
        password:''
    }
    // this.login = this.login.bind(this);
    // this.onChange = this.login.bind(this);
}


login=(e)=>{
    e.preventDefault();
    PostData('login',this.state).then((result)=>{
        let responseJSON = result;
        console.log(responseJSON); 
    });

    
}

onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
        
    })
    console.log(this.state)
}

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <form className="form-group p-4">


                            <label htmlFor = "user" className="mt-4">Username</label>
                            <input id="user" className="form-control" type="text" onChange= {this.onChange} ></input>


                            <span>
                                <label htmlFor="pass" className="mt-4">Password</label>
                                <input id="pass" className="form-control" type="password" onChange={this.onChange}></input>
                            </span>
                            <input className="btn btn-outline-primary mt-4 col-lg-12" type="submit" value="login" onClick={this.login}></input>
                        </form>
                    </div>
                </div>

            </div>

        );

    }
}