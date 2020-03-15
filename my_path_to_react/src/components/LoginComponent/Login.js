import React from 'react';




const Login = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                    <form className="form-group p-4">

                     
                    <i class="fa fa-lock" aria-hidden="true"></i>
                        <label for="user" className="mt-4">Username</label>
                        <input id ="user" className="form-control glyphicon glyphicon-user " type="text" ></input>
                        
                        
                        <span>
                        <label for="pass" className="mt-4">Password</label>
                            <input id="pass" className="form-control" type="password"></input>
                        </span>
                        <input className="btn btn-outline-primary mt-4 col-lg-12" type="submit" value="login"></input>
                    </form>
                </div>
            </div>

        </div>

    );

}

export default Login;