import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'


const Loginrequest = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = `/App`;
        history.push(path);
    }


    return (
        <div>
            <form>

                <div className="login">
                    <h1 className=" headings">Login here !</h1><br />
                    <input type="text" className="u" placeholder="USERNAME" /><p></p>
                    <input type="password" className="p" placeholder="PASSWORD" /><br /><br />
                    <butoon className="button btn btn-primary" onClick={routeChange}>LOG IN</butoon>
                    <div className="foot">
                    <h5> © 2020 All Rights Reserved.</h5>
                    </div>

                </div>


            </form>
        </div >
    )

}
export default connect()(Loginrequest);
