import React, { Component } from 'react'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent'

import '../.././assets/style/user/userRegister.css'
import '../.././assets/style/user/registerComponent.css'

class UserRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false,
            showRegister: true
        }
    }


    componentDidMount() {

    }

    render() { 
        return (
            <>
            <div id='userBox' className='userBox'>
                {/* <div id='doRegister'>
                    <div className='headerBox'></div>
                    <div className='contentBox'>
                        <button className='moveItem' type='button' onClick={() => {this.setState({showLogin: true, showRegister: false})}}>Sign Up</button>
                    </div>
                </div> */}
                { this.state.showLogin ? <LoginComponent /> : null }
                <div id='doLogin'>
                    <div className='headerBox'>
                        <div className='title'>Have Account?</div>
                        <div className='detail'>Login with your personal info</div>
                    </div>
                    <div className='contentBox'>
                        <button className='moveItem' type='button' onClick={() => {this.setState({showLogin: true, showRegister: false})}}>Sign In</button>
                    </div>
                </div>
                { this.state.showRegister ? <RegisterComponent /> : null }
            </div>
            </>
        )
    }
}
 
export default UserRegister;