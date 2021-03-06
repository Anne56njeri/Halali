import React from 'react';
import { MDBRow, MDBCol,MDBInput,MDBBtn } from 'mdbreact';

export default class LoginPage extends React.Component {
    componentDidMount(){
     localStorage.removeItem('employee')
    }
    login=()=>{
        const firm_id = localStorage.getItem('firm_id')
        const company_registered = localStorage.getItem('company_registered')
        if(company_registered){
           this.props.history.push(`/welcome/${firm_id}`) 
        } else{
        this.props.history.push(`/company_registration/${firm_id}`)
        }
    };
    render() {
        return (

            <MDBRow className="registration-form-row">
                <MDBCol lg="8" md="8" sm="8" className="login-column"/>
                <MDBCol lg="4" md="4"  sm="4" className="form-column">
                    <h3 className="h3-responsive text-center"><b>Login to continue</b></h3>
                    <div className="form">


                        <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required />


                        <MDBInput label="Password" type="password"  icon="unlock" iconClass="registration-icon" name="password" required />

                        <div className="register-button-login">
                            <MDBBtn gradient="peach" onClick={this.login} className="register-button" >Login</MDBBtn>
                        </div>
                    </div>

                </MDBCol>
            </MDBRow>

        );
    }
}
