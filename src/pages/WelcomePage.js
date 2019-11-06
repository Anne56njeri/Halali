import React from 'react';
import { MDBContainer,MDBBtn } from "mdbreact";
import welcome from '../assets/images/celebration.svg';


export default class WelcomePage extends  React.Component{
    goToPartner=()=>{
        this.props.history.push('/partner')

    };
    goToIntern=()=>{
        this.props.history.push('/intern')

    };
    goToAdvocate=()=>{
        this.props.history.push('/advocate')

    };
    goToSecretary=()=>{
        this.props.history.push('/secretary')

    };
    render() {
        return(
            <MDBContainer>
                <br/>
                <br/>
                <div>
                    <h2 className="h2-responsive text-center welcome-text">Welcome to Halali</h2>
                    <p className="text-center welcome-text">"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua."</p>
                  <img alt="welcome image" src={welcome} className="img-fluid welcome-image"/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    <p className="text-center"><i>Select your role to continue ....</i></p>
                  <div className="role-buttons">
                      <MDBBtn  gradient="peach" onClick={this.goToPartner} className="welcome-buttons">Partner</MDBBtn>
                      <MDBBtn gradient="sunny-morning" onClick={this.goToSecretary} className="welcome-buttons">Secretary</MDBBtn>
                      <MDBBtn gradient="peach" onClick={this.goToAdvocate} className="welcome-buttons">Advocate</MDBBtn>
                      <MDBBtn gradient="aqua" onClick={this.goToIntern} className="welcome-buttons">Intern</MDBBtn>
                  </div>
                </div>
            </MDBContainer>
        )
    }
}
